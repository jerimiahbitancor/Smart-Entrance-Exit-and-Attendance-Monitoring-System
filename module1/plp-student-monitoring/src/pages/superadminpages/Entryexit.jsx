import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form, Button, Table, Modal } from 'react-bootstrap';
import { getEntryExitLogs, getAttendance, getEmployees, getEvents, getDepartments } 
from '../../../../backend/src/api';
import '../../css/Entryexit.css';

function EntryExitPage() {

  const [logs, setLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilterCat, setActiveFilterCat] = useState('all');
  const [activeFilterVal, setActiveFilterVal] = useState('All');
  const [dateDD, setDateDD] = useState('');
  const [dateMM, setDateMM] = useState('');
  const [dateYYYY, setDateYYYY] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [exporting, setExporting] = useState(false);
  const [dbDeptLogos, setDbDeptLogos] = useState({});
  const [includePasigLogos, setIncludePasigLogos] = useState(true);

  // Custom Alert Modal States
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const plpLogo = localStorage.getItem('plp_logo') || '';
  const institutionName = localStorage.getItem('institution_name') || 'Pamantasan ng Lungsod ng Pasig';

  // ===============================
  // PDF EXPORT HELPERS
  // ===============================

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function ensurePdfLibs() {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
  }

  function loadImageAsBase64(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = () => resolve('');
      img.src = url;
    });
  }

  const handleExportLog = async () => {
    if (filteredLogs.length === 0) {
      setAlertMessage("No logs available to export.");
      setShowAlertModal(true);
      return;
    }

    setExporting(true);
    try {
      await ensurePdfLibs();

      const collegeLogo = (activeFilterCat === 'dept') ? (dbDeptLogos[activeFilterVal] || '') : '';

      const [pasigLogoB64, pasigWordmarkB64, plpLogoB64, collegeLogoB64] = await Promise.all([
        includePasigLogos ? loadImageAsBase64('/Pasig_Logo.PNG') : Promise.resolve(''),
        includePasigLogos ? loadImageAsBase64('/Pasig_Wordmark.PNG') : Promise.resolve(''),
        plpLogo ? loadImageAsBase64(plpLogo) : Promise.resolve(''),
        collegeLogo ? loadImageAsBase64(collegeLogo) : Promise.resolve(''),
      ]);

      const rowsHtml = filteredLogs.map((log, i) => `
        <tr>
          <td class="cc">${i + 1}</td>
          <td>${log.timestamp || ''}</td>
          <td class="cc">${log.type || ''}</td>
          <td class="cc">${log.employee_code || ''}</td>
          <td>${log.fullName || ''}</td>
          <td>${log.department_name || ''}</td>
          <td class="cc">${log.method || ''}</td>
        </tr>
      `).join('');

      const container = document.createElement('div');
      container.style.cssText = `
        position:fixed; left:-9999px; top:0;
        width:1000px; background:#fff; padding:30px;
        font-family:Arial,sans-serif; font-size:10pt; color:#000;
      `;

      container.innerHTML = `
        <style>
          .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
          .logo-area { display: flex; align-items: center; gap: 10px; }
          .logo-area img { height: 60px; }
          .header-info { text-align: right; }
          .header-title { font-size: 16pt; font-weight: bold; color: #1a5f2e; margin-bottom: 5px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background: #1a5f2e; color: white; border: 1px solid #ddd; padding: 8px; font-size: 9pt; }
          td { border: 1px solid #ddd; padding: 6px 8px; font-size: 8.5pt; }
          .cc { text-align: center; }
          .footer { margin-top: 30px; text-align: center; font-size: 8pt; color: #666; }
        </style>
        <div class="header">
          <div class="logo-area">
            ${pasigLogoB64 ? `<img src="${pasigLogoB64}" />` : ''}
            ${plpLogoB64 ? `<img src="${plpLogoB64}" />` : ''}
            ${collegeLogoB64 ? `<img src="${collegeLogoB64}" />` : ''}
          </div>
          <div class="header-info">
            <div class="header-title">Entrance & Exit Logs Report</div>
            <div>${institutionName}</div>
            <div>Generated on: ${new Date().toLocaleString()}</div>
            <div style="font-size: 8pt; color: #555; margin-top: 5px;">
              <strong>Filter applied:</strong> 
              ${activeFilterCat === 'all' ? 'None (All Logs)' : `${activeFilterCat.toUpperCase()}: ${activeFilterVal}${activeFilterCat === 'date' ? `${dateDD}-${dateMM}-${dateYYYY}` : ''}`}
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th style="width:40px">#</th>
              <th>Timestamp</th>
              <th>Type</th>
              <th>Code</th>
              <th>Full Name</th>
              <th>Department</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
        <div class="footer">
          This report was automatically generated by the Smart Attendance System.
        </div>
      `;

      document.body.appendChild(container);

      const canvas = await window.html2canvas(container, { scale: 2 });
      document.body.removeChild(container);

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('l', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Entrance_Exit_Logs_${new Date().toISOString().split('T')[0]}.pdf`);
    } catch (err) {
      console.error('PDF export error:', err);
      alert('Failed to generate PDF.');
    } finally {
      setExporting(false);
    }
  };

  // ===============================
  // LOAD DATA FROM DATABASE
  // ===============================

  useEffect(() => {
    loadLogs();
    // Auto-refresh logs every 5 seconds for "live" updates
    const interval = setInterval(loadLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadLogs = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch all required data sources to fill missing fields
      const [eeData, attendanceData, employeesData, eventsData, departmentsData] = await Promise.all([
        getEntryExitLogs(),
        getAttendance(),
        getEmployees(),
        getEvents(),
        getDepartments()
      ]);

      const rawEE = Array.isArray(eeData) ? eeData : [];
      const rawAttendance = Array.isArray(attendanceData) ? attendanceData : (attendanceData?.data ?? []);
      const allEmployees = Array.isArray(employeesData) ? employeesData : (employeesData?.data ?? []);
      const allEvents = Array.isArray(eventsData) ? eventsData : (eventsData?.data ?? []);
      const allDepts = Array.isArray(departmentsData) ? departmentsData : [];

      // Map department names to their logos
      const logoMap = {};
      allDepts.forEach(d => {
        if (d.dept_name && d.logo) {
          logoMap[d.dept_name] = d.logo;
        }
      });
      setDbDeptLogos(logoMap);

      // Normalize all logs into a single format
      const normalizedLogs = [
        ...rawEE.map(log => ({
          ...log,
          timestamp: log.timestamp || log.time_in || log.time_out || '',
          type: log.type || 'Entry',
          method: log.method || 'face'
        })),
        ...rawAttendance.map(att => {
          const emp = allEmployees.find(e => String(e.employee_ID) === String(att.employee_ID) || String(e.employee_code) === String(att.employee_code));
          const evt = allEvents.find(e => String(e.event_ID) === String(att.event_ID));
          
          return {
            timestamp: att.time_in || att.time_out || att.timestamp || '',
            type: att.time_out && att.time_out !== '0000-00-00 00:00:00' ? 'Exit' : 'Entry',
            employee_code: att.employee_code || emp?.employee_code || '',
            fullName: att.fullName || (emp ? `${emp.employee_LastName}, ${emp.employee_firstName}` : 'Unknown'),
            department_name: att.department_name || emp?.department_name || '',
            location: att.location_name || evt?.location_name || att.event_name || 'Event',
            method: att.method || 'face'
          };
        })
      ];

      // Remove duplicates and sort by timestamp
      const uniqueLogs = Array.from(new Map(normalizedLogs.map(item => [item.timestamp + item.employee_code, item])).values())
        .filter(log => log.timestamp && log.timestamp !== '0000-00-00 00:00:00')
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      setLogs(uniqueLogs);
    } catch (err) {
      console.error('Failed to load logs:', err);
      setError(err.message || 'Failed to load logs.');
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // FILTERING
  // ===============================

  const filteredLogs = logs.filter(log => {
    const matchesSearch =
      log.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.employee_code.toString().includes(searchTerm);

    let matchesFilter = true;
    if (activeFilterCat === 'dept') {
      matchesFilter = log.department_name === activeFilterVal;
    } else if (activeFilterCat === 'type') {
      matchesFilter = activeFilterVal === 'Entry' ? (log.type === 'Entry' || log.type === 'Check In') : (log.type === 'Exit' || log.type === 'Check Out');
    } else if (activeFilterCat === 'method') {
      matchesFilter = log.method?.toLowerCase() === activeFilterVal.toLowerCase();
    } else if (activeFilterCat === 'date') {
      if (!log.timestamp) matchesFilter = false;
      else {
        const [y, m, d] = log.timestamp.split(' ')[0].split('-');
        const matchY = !dateYYYY || y === dateYYYY;
        const matchM = !dateMM || m.padStart(2, '0') === dateMM.padStart(2, '0');
        const matchD = !dateDD || d.padStart(2, '0') === dateDD.padStart(2, '0');
        matchesFilter = matchY && matchM && matchD;
      }
    }

    return matchesSearch && matchesFilter;
  });

  // ===============================
  // STATS
  // ===============================

  const totalEntries = filteredLogs.filter(log => log.type === 'Entry').length;
  const totalExits = filteredLogs.filter(log => log.type === 'Exit').length;
  const totalMovements = filteredLogs.length;

  const departments = [
    'All Departments',
    ...new Set(logs.map(log => log.department_name).filter(Boolean))
  ];

  const getTypeBadgeClass = (type) =>
    (type === 'Entry' || type === 'Check In' || type?.toLowerCase()?.includes('in')) ? 'badge-entry' : 'badge-exit';

  const getTypeIcon = (type) =>
    (type === 'Entry' || type === 'Check In' || type?.toLowerCase()?.includes('in')) ? 'bi-arrow-down-left' : 'bi-arrow-up-right';

  const formatTypeName = (type) => {
    if (type?.toLowerCase()?.includes('in') || type === 'Entry') return 'Entry';
    if (type?.toLowerCase()?.includes('out') || type === 'Exit') return 'Exit';
    return type || 'N/A';
  };

  const handleViewXML = () => {
    handleExportLog();
  };

  // ===============================
  // UI
  // ===============================

  return (
    <div className="admin-page">

      <div className="page-header-section d-flex justify-content-between align-items-center">
        <h1 className="page-title">Entrance & Exit Logs</h1>
        <div className="d-flex align-items-center gap-3">
          <Form.Check 
            type="switch"
            id="include-logos-switch"
            label="Include Pasig Logos"
            checked={includePasigLogos}
            onChange={(e) => setIncludePasigLogos(e.target.checked)}
            className="text-white fw-bold"
            style={{ fontSize: '14px' }}
          />
          <Button 
            variant="outline-primary" 
            onClick={handleExportLog}
            disabled={exporting}
            className="d-flex align-items-center gap-2"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderColor: 'rgba(255, 255, 255, 0.5)',
              color: 'white',
              fontWeight: '600',
              borderRadius: '10px',
              padding: '10px 20px'
            }}
          >
            <i className="bi bi-file-earmark-pdf"></i>
            {exporting ? 'Exporting...' : 'Generate Report PDF'}
          </Button>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <Row className="g-3 mb-4">
        <Col md={4}>
          <Card className="stat-card-ee">
            <Card.Body>
              <p>Total Movements</p>
              <h2>{totalMovements}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="stat-card-ee">
            <Card.Body>
              <p>Entries</p>
              <h2>{totalEntries}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="stat-card-ee">
            <Card.Body>
              <p>Exits</p>
              <h2>{totalExits}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ================= TABLE ================= */}
      <Card className="content-card">
        <Card.Body>

          {error && (
            <div className="alert alert-danger mb-3">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {error}
              <Button variant="link" className="p-0 ms-2" onClick={loadLogs}>Retry</Button>
            </div>
          )}

          <Row className="mb-3 g-2">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Search name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>

            <Col md={4}>
              <Form.Select 
                value={activeFilterCat} 
                onChange={e => {
                  setActiveFilterCat(e.target.value);
                  setActiveFilterVal('All');
                }}
              >
                <option value="all">All Logs</option>
                <option value="dept">Filter by Department</option>
                <option value="type">Filter by Log Type</option>
                <option value="method">Filter by Scanning Method</option>
                <option value="date">Filter by Date</option>
              </Form.Select>
            </Col>

            <Col md={4}>
              {activeFilterCat === 'dept' && (
                <Form.Select value={activeFilterVal} onChange={e => setActiveFilterVal(e.target.value)}>
                  <option value="All">Select Department...</option>
                  {departments.filter(d => d !== 'All Departments').map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </Form.Select>
              )}
              {activeFilterCat === 'type' && (
                <Form.Select value={activeFilterVal} onChange={e => setActiveFilterVal(e.target.value)}>
                  <option value="All">Select Type...</option>
                  <option value="Entry">Entry Only</option>
                  <option value="Exit">Exit Only</option>
                </Form.Select>
              )}
              {activeFilterCat === 'method' && (
                <Form.Select value={activeFilterVal} onChange={e => setActiveFilterVal(e.target.value)}>
                  <option value="All">Select Method...</option>
                  <option value="face">Face Recognition</option>
                  <option value="qr">QR Code</option>
                  <option value="manual">Manual Entry</option>
                </Form.Select>
              )}
              {activeFilterCat === 'date' && (
                <div className="d-flex gap-1">
                  <Form.Control placeholder="DD" value={dateDD} onChange={e => setDateDD(e.target.value.slice(0,2))} style={{ width: '60px' }} />
                  <Form.Control placeholder="MM" value={dateMM} onChange={e => setDateMM(e.target.value.slice(0,2))} style={{ width: '60px' }} />
                  <Form.Control placeholder="YYYY" value={dateYYYY} onChange={e => setDateYYYY(e.target.value.slice(0,4))} style={{ width: '85px' }} />
                </div>
              )}
              {activeFilterCat === 'all' && (
                <Form.Control disabled placeholder="No sub-filter" />
              )}
            </Col>
          </Row>

          <div className="xml-view-container mt-2" style={{ border: '1px solid #d4e8da', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#1a5f2e', color: 'white', padding: '12px 16px', fontSize: '13px', fontWeight: '700' }}>
              Entrance & Exit Logs — {filteredLogs.length} records
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #d4e8da', background: '#f0f7f2', textAlign: 'center' }}>
              <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #d4e8da' }}>
                <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Total</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#1a5f2e' }}>{filteredLogs.length}</div>
              </div>
              <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #d4e8da' }}>
                <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Entries</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#1a5f2e' }}>{filteredLogs.filter(l => l.type === 'Entry').length}</div>
              </div>
              <div style={{ flex: 1, padding: '10px' }}>
                <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Exits</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#c0392b' }}>{filteredLogs.filter(l => l.type === 'Exit').length}</div>
              </div>
            </div>
            <div style={{ overflowX: 'auto', maxHeight: '55vh', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead>
                  <tr style={{ background: '#1a5f2e', color: 'white', position: 'sticky', top: 0 }}>
                    <th style={{ padding: '9px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>#</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Timestamp</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Type</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Emp Code</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Name</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Department</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Method</th>
                    <th style={{ padding: '9px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '24px' }}>
                        <div className="spinner-border spinner-border-sm text-primary me-2" role="status"></div>
                        Loading logs...
                      </td>
                    </tr>
                  ) : filteredLogs.length > 0 ? (
                    filteredLogs.map((log, index) => (
                      <tr key={index} style={{ background: index % 2 === 0 ? 'white' : '#f9fafb' }}>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8e8e8', color: '#aaa', fontSize: '11px' }}>{index + 1}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8e8e8', fontSize: '11px', whiteSpace: 'nowrap' }}>
                          {log.timestamp ? new Date(log.timestamp).toLocaleString('en-US', {
                            month: 'short', day: 'numeric', year: 'numeric',
                            hour: '2-digit', minute: '2-digit'
                          }) : 'N/A'}
                        </td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8e8e8' }}>
                          {log.type === 'Entry'
                            ? <span style={{ background: '#e9f5ec', color: '#1a5f2e', border: '1px solid #c3e6cb', padding: '2px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: '700' }}>↙ Entry</span>
                            : <span style={{ background: '#fdecea', color: '#c0392b', border: '1px solid #f5c6cb', padding: '2px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: '700' }}>↗ Exit</span>}
                        </td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8e8e8', fontWeight: '700' }}>{log.employee_code}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8e8e8', fontWeight: '600' }}>{log.fullName}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8e8e8', fontSize: '11px' }}>{log.department_name || <span style={{ color: '#bbb' }}>N/A</span>}</td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8e8e8' }}>
                          <span style={{
                            fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', padding: '2px 7px', borderRadius: '4px',
                            background: log.method?.toLowerCase() === 'qr' ? '#e3f2fd' : log.method?.toLowerCase() === 'manual' ? '#fff3cd' : '#e9f5ec',
                            color: log.method?.toLowerCase() === 'qr' ? '#0d47a1' : log.method?.toLowerCase() === 'manual' ? '#856404' : '#1a5f2e',
                            border: `1px solid ${log.method?.toLowerCase() === 'qr' ? '#bbdefb' : log.method?.toLowerCase() === 'manual' ? '#ffeeba' : '#c3e6cb'}`
                          }}>
                            {log.method || 'face'}
                          </span>
                        </td>
                        <td style={{ padding: '8px 12px', borderBottom: '1px solid #e8e8e8', fontSize: '11px' }}>{log.location}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '24px', color: '#888' }}>
                        No logs found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </Card.Body>
      </Card>

      {/* Custom Alert Modal */}
      <Modal 
        show={showAlertModal} 
        onHide={() => setShowAlertModal(false)} 
        size="sm" 
        centered
        backdrop="static"
      >
        <Modal.Body className="text-center py-4">
          <div className="mb-3">
            <i className="bi bi-exclamation-circle text-warning" style={{ fontSize: '48px' }}></i>
          </div>
          <h5 className="fw-bold mb-2">Attention</h5>
          <p className="text-muted mb-4">{alertMessage}</p>
          <Button 
            variant="dark" 
            className="px-4" 
            onClick={() => setShowAlertModal(false)}
            style={{ borderRadius: '8px' }}
          >
            OK
          </Button>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default EntryExitPage;