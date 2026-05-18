import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './SCAN/LandingPage';   
import AdminDashboard from './ADMIN/AdminDashboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    // Check URL for session parameter
    const urlParams = new URLSearchParams(window.location.search);
    const sessionParam = urlParams.get('session');
    console.log('[Attendance App] sessionParam:', sessionParam);
    
    if (sessionParam) {
      try {
        // Decode and parse session data
        const session = JSON.parse(atob(sessionParam));
        console.log('[Attendance App] parsed session:', session);
        const hoursSinceLogin = (Date.now() - session.timestamp) / 3600000;
        
        if (session.role === 'EAMS Admin' && session.loggedIn && hoursSinceLogin < 8) {
          // Save to localStorage for this domain
          localStorage.setItem('eams_session', JSON.stringify(session));
          console.log('[Attendance App] valid session from URL param, setting to admin');
          setCurrentPage('admin');
          
          // Clean URL (remove session param)
          window.history.replaceState({}, document.title, window.location.pathname);
          return;
        } else {
          console.warn('[Attendance App] invalid session or expired session data:', session);
        }
      } catch (err) {
        console.error('[Attendance App] Failed to parse session:', err, 'raw sessionParam:', sessionParam);
      }
    }
    
    // Check existing localStorage session
    const sessionData = localStorage.getItem('eams_session');
    console.log('[Attendance App] localStorage eams_session:', sessionData);
    if (sessionData) {
      try {
        const session = JSON.parse(sessionData);
        console.log('[Attendance App] parsed stored session:', session);
        const hoursSinceLogin = (Date.now() - session.timestamp) / 3600000;
        
        if (session.role === 'EAMS Admin' && session.loggedIn && hoursSinceLogin < 8) {
          console.log('[Attendance App] valid session found in localStorage, setting to admin');
          setCurrentPage('admin');
          return;
        } else {
          console.warn('[Attendance App] stored session invalid or expired:', session);
          localStorage.removeItem('eams_session');
        }
      } catch (err) {
        console.error('[Attendance App] Failed to parse stored session:', err, 'stored sessionData:', sessionData);
        localStorage.removeItem('eams_session');
      }
    }
    
    // No valid session - show landing page (public access allowed)
    console.log('[Attendance App] no valid session, but allowing public access to landing page');
    setCurrentPage('landing');
  }, []);

  const handleBackToHome = () => {
    // Clear session on logout
    localStorage.removeItem('eams_session');
    
    // Redirect to Module 1 LOGIN page (not scanner)
    window.location.href = 'http://localhost:5173/login';
  };

  const handleSecretAdmin = () => {
    setCurrentPage('admin');
  };

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage
          onBack={handleBackToHome}
          onNavigateAdmin={handleSecretAdmin}
        />
      )}

      {currentPage === 'admin' && (
        <AdminDashboard onLogout={handleBackToHome} />
      )}
    </>
  );
}

export default App;