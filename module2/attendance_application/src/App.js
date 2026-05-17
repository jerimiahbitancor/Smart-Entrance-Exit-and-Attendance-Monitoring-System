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
    
    if (sessionParam) {
      try {
        // Decode and parse session data
        const session = JSON.parse(atob(sessionParam));
        const hoursSinceLogin = (Date.now() - session.timestamp) / 3600000;
        
        if (session.role === 'EAMS Admin' && session.loggedIn && hoursSinceLogin < 8) {
          // Save to localStorage for this domain
          localStorage.setItem('eams_session', JSON.stringify(session));
          setCurrentPage('admin');
          
          // Clean URL (remove session param)
          window.history.replaceState({}, document.title, window.location.pathname);
          return;
        }
      } catch (err) {
        console.error('Failed to parse session:', err);
      }
    }
    
    // Check existing localStorage session
    const sessionData = localStorage.getItem('eams_session');
    if (sessionData) {
      const session = JSON.parse(sessionData);
      const hoursSinceLogin = (Date.now() - session.timestamp) / 3600000;
      
      if (session.role === 'EAMS Admin' && session.loggedIn && hoursSinceLogin < 8) {
        setCurrentPage('admin');
        return;
      } else {
        localStorage.removeItem('eams_session');
      }
    }
    
    // No valid session, redirect to Module 1 login
    window.location.href = 'http://localhost:5173/login';
  }, []);

  const handleBackToHome = () => {
    localStorage.removeItem('eams_session');
    setCurrentPage('landing');
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