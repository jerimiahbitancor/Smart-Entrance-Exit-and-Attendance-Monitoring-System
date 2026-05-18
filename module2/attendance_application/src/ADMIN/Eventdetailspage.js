import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Modal, Form, Badge } from 'react-bootstrap';
import { getEventAttendance, getEmployees, getDepartments, getEventSetup, setupEventEmployees, activateEvent, deactivateEvent, updateEvent } from '../api';
import './ccs/event.css';

const PLP_LOGO_KEY   = 'plp_logo';
const DEPT_LOGOS_KEY = 'dept_logos';
const NAME_KEY       = 'institution_name';

const PDF_PASIG_LOGO_KEY      = 'pdf_pasig_logo';
const PDF_WORDMARK_KEY        = 'pdf_wordmark_logo';
const PDF_OFFICE_NAME_KEY     = 'pdf_office_name';
const PDF_ADDRESS_KEY         = 'pdf_address';
const PDF_CONTACT_KEY         = 'pdf_contact';
const PDF_RECORDED_BY_KEY     = 'pdf_recorded_by';
const PDF_SIGNATORY_KEY       = 'pdf_signatory';
const PDF_SIGNATORY_TITLE_KEY = 'pdf_signatory_title';

function formatTime(val) {
  if (!val || val === '--------') return '';
  try {
    const d = new Date(`1970-01-01T${val}`);
    if (isNaN(d)) return val;
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  } catch { return val; }
}

function formatDate(val) {
  if (!val) return '';
  try {
    const d = new Date(val + 'T00:00:00');
    if (isNaN(d)) return val;
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return val; }
}

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
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      canvas.getContext('2d').drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve('');
    img.src = url;
  });
}

function formatNameLastFirst(name) {
  if (!name) return '';
  const trimmed = String(name).trim();
  if (!trimmed) return '';
  if (trimmed.includes(',')) return trimmed;

  const parts = trimmed.split(/\s+/);
  if (parts.length <= 1) return trimmed;

  const normalize = (token) => token.toLowerCase().replace(/\.+$/, '');
  const last = parts[parts.length - 1];
  const second = parts[parts.length - 2];
  const secondNorm = normalize(second);
  const thirdNorm = parts.length >= 3 ? normalize(parts[parts.length - 3]) : '';

  const compoundTwoWord = new Set(['sta', 'sta.', 'del', 'de', 'da', 'dos', 'do', 'di', 'van', 'von']);
  const compoundThreeWord = new Set(['la', 'las', 'los']);

  if (thirdNorm === 'de' && compoundThreeWord.has(secondNorm)) {
    return `${parts.slice(parts.length - 3).join(' ')}, ${parts.slice(0, -3).join(' ')}`;
  }

  if (compoundTwoWord.has(secondNorm) || (thirdNorm === 'van' && secondNorm === 'der')) {
    return `${parts.slice(parts.length - 2).join(' ')}, ${parts.slice(0, -2).join(' ')}`;
  }

  return `${last}, ${parts.slice(0, -1).join(' ')}`;
}

function EventDetailsPage({ onNavigate, eventData, onUpdateData }) {

  const event_ID  = eventData?.event_ID;
  const eventName = eventData?.event_name || 'Event';

  const [records, setRecords]           = useState([]);
  const [searchTerm, setSearchTerm]     = useState('');
  const [activeFilterCat, setActiveFilterCat] = useState('all');
  const [activeFilterVal, setActiveFilterVal] = useState('All');
  const [dateDD, setDateDD] = useState('');
  const [dateMM, setDateMM] = useState('');
  const [dateYYYY, setDateYYYY] = useState('');
  const [exporting, setExporting]       = useState(false);
  const [showSetupModal, setShowSetupModal]     = useState(false);
  const [allEmployees, setAllEmployees]         = useState([]);
  const [allDepartments, setAllDepartments]     = useState([]);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState(new Set());
  const [setupSearch, setSetupSearch]   = useState('');
  const [savingSetup, setSavingSetup]   = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [eventActive, setEventActive]   = useState((eventData?.is_active ?? 1) === 1);
  const [eventStatus, setEventStatus]   = useState(
    eventData?.status ?? ((eventData?.is_active ?? 1) === 1 ? 'Activated' : 'Deactivated')
  );
  const [scanMode, setScanMode] = useState(null);
  const [hasSetup, setHasSetup] = useState(false);
  const [dbDeptLogos, setDbDeptLogos] = useState({});
  const [includePasigLogos, setIncludePasigLogos] = useState(true);

  // Load mode from localStorage on init
  useEffect(() => {
    const savedMode = localStorage.getItem(`attendanceMode_${event_ID}`);
    if (savedMode) {
      setScanMode(savedMode);
    } else {
      setScanMode(eventData?.scan_mode || 'check_in');
    }
  }, [event_ID, eventData]);

  // Status Modal for toggles
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusModalType, setStatusModalType] = useState('success'); // 'success' or 'error'
  const [statusModalMsg, setStatusModalMsg] = useState('');

  const plpLogo         = localStorage.getItem(PLP_LOGO_KEY) || '';
  const institutionName = localStorage.getItem(NAME_KEY) || 'Pamantasan ng Lungsod ng Pasig';

  const eventDate = eventData?.event_date || '';
  const eventType = eventData?.eventtype_name || '';
  const location  = eventData?.location_name || '';
  const timeStart = eventData?.event_time || '';
  const timeEnd   = eventData?.time_end   || '';

  useEffect(() => {
    if (!event_ID) return;
    (async () => {
      const setupExists = await loadSetupData();
      if (setupExists) {
        await loadAttendance();
      } else {
        setRecords([]);
      }
    })();
  }, [event_ID]);

  // Safety cleanup for modal backdrop
  useEffect(() => {
  if (showSetupModal) return;
  // Use a small delay so React finishes its own DOM cleanup first
  const timer = setTimeout(() => {
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
    const staleBackdrops = document.querySelectorAll('.modal-backdrop');
    staleBackdrops.forEach((el) => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }, 300);
  return () => clearTimeout(timer);
}, [showSetupModal]);

  const loadAttendance = async () => {
    const data = await getEventAttendance(event_ID);
    setRecords(data);
  };

  const loadSetupData = async () => {
    try {
      const [employeesData, departmentsData, setupData] = await Promise.all([
        getEmployees(),
        getDepartments(),
        getEventSetup(event_ID),
      ]);

      const empArr  = Array.isArray(employeesData)   ? employeesData   : (employeesData?.data   ?? []);
      const deptArr = Array.isArray(departmentsData) ? departmentsData : (departmentsData?.data ?? []);
      const activeEmployees = empArr.filter(e => e.is_archived !== 1);
      const ids = Array.isArray(setupData?.employee_ids) ? setupData.employee_ids : [];

      setAllEmployees(activeEmployees);
      setAllDepartments(deptArr);
      setSelectedEmployeeIds(new Set(ids.map(Number)));

      // Map department names to their logos
      const logoMap = {};
      deptArr.forEach(d => {
        if (d.dept_name && d.logo) {
          logoMap[d.dept_name] = d.logo;
        }
      });
      setDbDeptLogos(logoMap);

      const setupExists = Array.isArray(ids) && ids.length > 0;
      setHasSetup(setupExists);

      // Sync scan mode from fresh API data only if no local override
      if (setupData?.scan_mode) {
        const localSaved = localStorage.getItem(`attendanceMode_${event_ID}`);
        if (!localSaved) {
          setScanMode(setupData.scan_mode);
        }
      }

      // Prefer explicit `status` when provided by the API; fallback to is_active
      if (setupData && (setupData?.status ?? null) !== null) {
        setEventStatus(setupData.status);
        setEventActive((setupData.status === 'Activated'));
      } else {
        const isActiveVal = (setupData?.is_active ?? eventData?.is_active ?? 1) === 1;
        setEventActive(isActiveVal);
        setEventStatus(eventData?.status ?? (isActiveVal ? 'Activated' : 'Deactivated'));
      }
      return setupExists;
    } catch (e) {
      console.error('Failed to load event setup data', e);
      setHasSetup(false);
    }
  };

  const handleDepartmentToggle = (departmentId, checked) => {
    const next = new Set(selectedEmployeeIds);
    allEmployees
      .filter(emp => Number(emp.department_ID) === Number(departmentId))
      .forEach(emp => {
        if (checked) next.add(Number(emp.employee_ID));
        else next.delete(Number(emp.employee_ID));
      });
    setSelectedEmployeeIds(next);
  };

  const handleEmployeeToggle = (employeeId, checked) => {
    const next = new Set(selectedEmployeeIds);
    if (checked) next.add(Number(employeeId));
    else next.delete(Number(employeeId));
    setSelectedEmployeeIds(next);
  };

  const saveSetup = async () => {
    try {
      setSavingSetup(true);
      await setupEventEmployees(event_ID, Array.from(selectedEmployeeIds));
      // Refresh setup info so `hasSetup` and button state update immediately
      await loadSetupData();
      setShowSetupModal(false);
      await loadAttendance();
    } catch (e) {
      alert(e?.message || 'Failed to save event setup.');
    } finally {
      setSavingSetup(false);
    }
  };

  const handleActivate = async () => {
    if (!hasSetup) {
      alert('Please set up event first');
      return;
    }

    try {
      setUpdatingStatus(true);
      await activateEvent(event_ID);
      setEventActive(true);
      setEventStatus('Activated');
      await loadSetupData();
    } catch (e) {
      alert(e?.message || 'Failed to activate event.');
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleDeactivate = async () => {
    try {
      setUpdatingStatus(true);
      await deactivateEvent(event_ID);
      setEventActive(false);
      setEventStatus('Deactivated');
      await loadSetupData();
    } catch (e) {
      alert(e?.message || 'Failed to deactivate event.');
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleUpdateScanMode = async (newMode) => {
    try {
      setUpdatingStatus(true);
      const updateData = {
        ...eventData,
        event_name: eventData.event_name,
        eventtype_ID: eventData.eventtype_ID,
        location_ID: eventData.location_ID,
        event_date: eventData.event_date,
        event_time: eventData.event_time,
        time_end: eventData.time_end,
        description: eventData.description,
        scan_mode: newMode
      };
      await updateEvent(event_ID, updateData);
      
      // Mandatory LocalStorage Persistence
      localStorage.setItem(`attendanceMode_${event_ID}`, newMode);
      setScanMode(newMode);
      
      // Update the parent's (AdminDashboard) state too so it's persisted across tabs
      if (onUpdateData) {
        onUpdateData({ scan_mode: newMode });
      }
      
      // Show Success Feedback
      setStatusModalType('success');
      setStatusModalMsg(`Scanning mode successfully switched to ${newMode === 'check_in' ? 'Check-In' : 'Check-Out'}.`);
      setShowStatusModal(true);
      
      // Auto-hide modal after 2 seconds
      setTimeout(() => setShowStatusModal(false), 2000);
      
    } catch (e) {
      setStatusModalType('error');
      setStatusModalMsg(e?.message || 'Failed to update scan mode.');
      setShowStatusModal(true);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const filtered = records.filter(r => {
    const q           = searchTerm.toLowerCase();
    const matchSearch = r.fullName.toLowerCase().includes(q) || r.employee_code.toString().includes(q);
    
    let matchFilter = true;
    if (activeFilterCat === 'dept') {
      matchFilter = r.department_name === activeFilterVal;
    } else if (activeFilterCat === 'checkIn') {
      matchFilter = activeFilterVal === 'Present' ? !!r.checkIn : !r.checkIn;
    } else if (activeFilterCat === 'checkOut') {
      matchFilter = activeFilterVal === 'Done' ? !!r.checkOut : !r.checkOut;
    } else if (activeFilterCat === 'date') {
      const dt = r.time_in || r.time_out;
      if (!dt) matchFilter = false;
      else {
        const [y, m, d] = dt.split(' ')[0].split('-');
        const matchY = !dateYYYY || y === dateYYYY;
        const matchM = !dateMM || m.padStart(2, '0') === dateMM.padStart(2, '0');
        const matchD = !dateDD || d.padStart(2, '0') === dateDD.padStart(2, '0');
        matchFilter = matchY && matchM && matchD;
      }
    }

    return matchSearch && matchFilter;
  });

  const totalAttended = filtered.filter(r => r.attended).length;
  const totalMissed   = filtered.filter(r => !r.attended).length;
  const rate          = filtered.length
    ? ((totalAttended / filtered.length) * 100).toFixed(1)
    : 0;

  const departments = [
    'All Departments',
    ...new Set(records.map(r => r.department_name).filter(Boolean)),
  ];

  const availableDates = [
    'All Dates',
    ...new Set(records.map(r => {
      const dt = r.time_in || r.time_out;
      return dt ? dt.split(' ')[0] : null;
    }).filter(Boolean).sort().reverse())
  ];

  const setupFilteredEmployees = allEmployees.filter(emp => {
    const q        = setupSearch.toLowerCase();
    const fullName = `${emp.employee_firstName || ''} ${emp.employee_LastName || ''}`.trim().toLowerCase();
    const code     = String(emp.employee_code || '').toLowerCase();
    return fullName.includes(q) || code.includes(q);
  });

  // ── PDF Export ────────────────────────────────────────────────────────────
  const handleExportLog = async () => {
    setExporting(true);
    try {
      await ensurePdfLibs();

      const officeName = (activeFilterCat === 'dept') ? activeFilterVal.toUpperCase() : 'ALL DEPARTMENTS';
      const collegeLogo = (activeFilterCat === 'dept') ? (dbDeptLogos[activeFilterVal] || '') : '';
      const exportRows  = filtered.map(r => ({
        ...r,
        fullName: formatNameLastFirst(
          r.fullName ||
          `${r.employee_lastName || r.employee_LastName || ''} ${r.employee_firstName || r.employee_FirstName || ''}`.trim()
        )
      }));
      const dateStr     = formatDate(eventDate);

      // Fetch branding from settings
      const settingsPasigLogo = localStorage.getItem(PDF_PASIG_LOGO_KEY) || '';
      const settingsWordmark  = localStorage.getItem(PDF_WORDMARK_KEY) || '';

      // Pre-load logos as base64
      const [pasigLogoB64, pasigWordmarkB64, plpLogoB64, collegeLogoB64] = await Promise.all([
        includePasigLogos ? (settingsPasigLogo ? Promise.resolve(settingsPasigLogo) : loadImageAsBase64('/Pasig_Logo.PNG')) : Promise.resolve(''),
        includePasigLogos ? (settingsWordmark ? Promise.resolve(settingsWordmark) : loadImageAsBase64('/Pasig_Wordmark.PNG')) : Promise.resolve(''),
        plpLogo ? (plpLogo.startsWith('data:') ? Promise.resolve(plpLogo) : loadImageAsBase64(plpLogo)) : Promise.resolve(''),
        collegeLogo ? (collegeLogo.startsWith('data:') ? Promise.resolve(collegeLogo) : loadImageAsBase64(collegeLogo)) : Promise.resolve(''),
      ]);

      const ROWS_PER_PAGE = 22;
      const chunks = [];
      for (let i = 0; i < exportRows.length; i += ROWS_PER_PAGE) {
        chunks.push(exportRows.slice(i, i + ROWS_PER_PAGE));
      }
      if (chunks.length === 0) chunks.push([]);

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageW = pdf.internal.pageSize.getWidth();

      for (let pageIdx = 0; pageIdx < chunks.length; pageIdx++) {
        const currentChunk = chunks[pageIdx];
        const isLastPage = pageIdx === chunks.length - 1;
        const startNo = pageIdx * ROWS_PER_PAGE;

        const rowsHtml = currentChunk.map((r, i) => `
          <tr>
            <td class="cc">${startNo + i + 1}</td>
            <td>${r.fullName || ''}</td>
            <td class="cc">${r.attended ? '&#10003;' : ''}</td>
            <td class="cc">${!r.attended ? 'A' : ''}</td>
          </tr>
        `).join('');

        // Add "onward to next page" row if not last page
        const onwardHtml = !isLastPage ? `
          <tr>
            <td colspan="4" style="text-align: right; font-style: italic; font-size: 9pt; padding: 4px 8px; border: none;">
              ...onward to next page
            </td>
          </tr>
        ` : '';

        // Only add padding if it's the last page and we want to maintain a minimum height, 
        // or just let it be. The user wants 22 names limit.
        let paddingHtml = '';
        if (isLastPage) {
           const padCount = Math.max(0, 5 - currentChunk.length); // small padding for last page
           paddingHtml = Array.from({ length: padCount }).map((_, i) => `
            <tr>
              <td class="cc">${startNo + currentChunk.length + i + 1}</td>
              <td></td><td></td><td></td>
            </tr>
          `).join('');
        }

        const attended   = exportRows.filter(r => r.attended).length;
        const absent     = exportRows.filter(r => !r.attended).length;
        const attendRate = exportRows.length
          ? ((attended / exportRows.length) * 100).toFixed(1) : 0;

        const container = document.createElement('div');
        container.style.cssText = `
          position:fixed; left:-9999px; top:0;
          width:794px; background:#fff; padding:28px 40px;
          font-family:Arial,Helvetica,sans-serif; font-size:11pt; color:#000;
          box-sizing:border-box;
        `;

        container.innerHTML = `
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            .header { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 14px; }
            .logo-left { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
            .logo-left img { height: 75px; width: auto; object-fit: contain; }
            .logo-wordmark { height: 48px !important; }
            .logo-divider { width: 1.5px; height: 65px; background: #cccccc; flex-shrink: 0; margin: 0 4px; }
            .logo-placeholder { height: 75px; width: 75px; border: 1.5px dashed #bbb; display: flex; align-items: center; justify-content: center; font-size: 8pt; color: #aaa; text-align: center; line-height: 1.4; border-radius: 4px; }
            .header-right { text-align: right; line-height: 1.6; flex-shrink: 0; max-width: 320px; }
            .header-institution { font-size: 12pt; font-weight: bold; color: #ffffff; background-color: #003399; padding: 2px 6px 2px 12px; letter-spacing: 0.3px; display: inline-block; border-radius: 20px 0px 0px 20px; }
            .header-sub { font-size: 9.5pt; color: #222; font-weight: 600; margin-top: 3px; }
            .header-address { font-size: 8.5pt; color: #444; margin-top: 1px; }
            .header-contact { font-size: 8pt; color: #555; margin-top: 2px; }
            .title-block { text-align: center; padding: 8px 0 6px; }
            .title-block h2 { font-size: 13pt; font-weight: bold; text-transform: uppercase; letter-spacing: 1.2px; }
            .title-block .date-line { font-size: 11pt; margin-top: 4px; }
            .info-rows { margin: 10px 0 6px; font-size: 10.5pt; line-height: 1.7; }
            .instruction { font-size: 9pt; color: #333; margin-bottom: 8px; font-style: italic; }
            table { width: 100%; border-collapse: collapse; font-size: 10.5pt; margin-bottom: 8px; }
            th { background: #f0f0f0; font-weight: 700; border: 1px solid #000; padding: 5px 8px; text-align: center; }
            td { border: 1px solid #555; padding: 5px 8px; height: 26px; vertical-align: middle; }
            .cc { text-align: center; }
            col.col-no { width: 42px; }
            col.col-pres { width: 80px; }
            col.col-abs { width: 100px; }
            .stats-box { display: flex; gap: 28px; font-size: 10.5pt; border: 1px solid #ccc; padding: 9px 16px; border-radius: 4px; background: #fafafa; margin-bottom: 22px; }
            .footer-section { margin-top: 10px; font-size: 10pt; line-height: 1.8; }
            .footer-note { margin-bottom: 22px; }
            .signature-line { display: inline-block; width: 240px; border-top: 1.5px solid #000; margin-top: 32px; padding-top: 3px; font-size: 10pt; font-weight: bold; }
            .signature-sub { font-size: 9.5pt; font-weight: normal; color: #333; }
            .page-number { text-align: center; font-size: 9pt; color: #777; margin-top: 10px; }
          </style>

          <div class="header">
            <div class="logo-left">
              ${pasigLogoB64 ? `<img src="${pasigLogoB64}" alt="Pasig Logo" />` : ''}
              ${pasigWordmarkB64 ? `<img src="${pasigWordmarkB64}" alt="Pasig Wordmark" class="logo-wordmark" />` : ''}
              ${(pasigLogoB64 || pasigWordmarkB64) && (plpLogoB64 || collegeLogoB64) ? `<div class="logo-divider"></div>` : ''}
              ${plpLogoB64 ? `<img src="${plpLogoB64}" alt="School Logo" />` : ''}
              ${(activeFilterCat === 'dept') && collegeLogoB64 ? `<img src="${collegeLogoB64}" alt="Department Logo" />` : ''}
            </div>
            <div class="header-right">
              <div class="header-institution">${institutionName}</div>
              <div class="header-sub">Office of the Human Resource Development</div>
              <div class="header-address">Alkalde Jose St., Kapasigan, Pasig City, Philippines 1600</div>
              <div class="header-contact">&#9990; 638-1014 Loc. 106 &nbsp;&nbsp;|&nbsp;&nbsp; &#9993; hrd@plpasig.edu.ph</div>
            </div>
          </div>

          <div class="title-block">
            <h2>Attendance for ${eventType || 'Event'}</h2>
            <div class="date-line">
              DATE: <strong>${dateStr}</strong>
              ${timeStart ? ` &nbsp;|&nbsp; TIME: <strong>${formatTime(timeStart)}${timeEnd ? ' \u2013 ' + formatTime(timeEnd) : ''}</strong>` : ''}
            </div>
          </div>

          <div class="info-rows">
            <div><strong>NAME OF OFFICE:</strong> ${officeName}</div>
            ${location ? `<div><strong>VENUE:</strong> ${location}</div>` : ''}
            <div style="margin-top: 5px; font-size: 9pt; color: #555;">
              <strong>Filter applied:</strong> 
              ${activeFilterCat === 'all' ? 'None (All Records)' : `${activeFilterCat.toUpperCase()}: ${activeFilterVal}${activeFilterCat === 'date' ? `${dateDD}-${dateMM}-${dateYYYY}` : ''}`}
            </div>
          </div>

          <div class="instruction">
            <strong>&#10003;</strong> means present; if absent <strong>A</strong></strong>.
          </div>

          <table>
            <colgroup><col class="col-no" /><col /><col class="col-pres" /><col class="col-abs" /></colgroup>
            <thead>
              <tr><th>No.</th><th>Name of Employee</th><th>PRESENT</th><th>ABSENT</th></tr>
            </thead>
            <tbody>
              ${rowsHtml}
              ${paddingHtml}
              ${onwardHtml}
            </tbody>
          </table>

          ${isLastPage ? `
            <div class="stats-box">
              <span>Total Employees: <strong>${exportRows.length}</strong></span>
              <span>Attended: <strong>${attended}</strong></span>
              <span>Absent: <strong>${absent}</strong></span>
              <span>Attendance Rate: <strong>${attendRate}%</strong></span>
            </div>

            <div class="footer-section">
              <div class="footer-note">
                Recorded by HRD Personnel<br/>
                Attendance checked/monitored by:
              </div>
              <div class="signature-line">
                Signature Over Printed Name<br/>
                <span class="signature-sub">Head of Office</span>
              </div>
            </div>
          ` : ''}

          <div class="page-number">Page ${pageIdx + 1} of ${chunks.length}</div>
        `;

        document.body.appendChild(container);

        const canvas = await window.html2canvas(container, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: 794,
        });

        if (container.parentNode === document.body) {
          document.body.removeChild(container);
        }

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const imgW = pageW;
        const imgH = (canvas.height / canvas.width) * imgW;

        if (pageIdx > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, imgW, imgH);
      }

      pdf.save(`${eventName.replace(/\s+/g, '_')}_Attendance.pdf`);
    } catch (err) {
      console.error('PDF export error:', err);
      alert('Export failed. Please try again.');
    } finally {
      setExporting(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="admin-page">

      <div className="page-header-section">
        <h1 className="page-title">Event Details ({eventName})</h1>
        <div className="d-flex align-items-center gap-2">
            {(() => {
              const variant = eventStatus === 'Activated' ? 'success' : (eventStatus === 'Completed' ? 'info' : 'secondary');
              return <Badge bg={variant}>{eventStatus || 'Unknown'}</Badge>;
            })()}
          <Button onClick={() => onNavigate('events')}>Back to Events</Button>
        </div>
      </div>

      <Row className="g-3 mb-4">
        <Col md={4}>
          <Card className="stat-card-glass">
            <Card.Body>
              <p>Attended</p>
              <h2>{totalAttended}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="stat-card-glass">
            <Card.Body>
              <p>Not Attended</p>
              <h2 className="danger">{totalMissed}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="stat-card-glass">
            <Card.Body>
              <p>Attendance Rate</p>
              <h2>{rate}%</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="content-card">
        <Card.Body>

          <div className="card-header-section">
            <div>
              <h5>Attendance Records</h5>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold me-2" style={{ fontSize: '14px' }}>Mode:</span>
              <Button
                variant="none"
                onClick={() => handleUpdateScanMode('check_in')}
                disabled={updatingStatus}
                size="sm"
                className={`btn-mode-toggle btn-mode-checkin ${scanMode === 'check_in' ? 'active' : 'inactive'}`}
              >
                Check In
              </Button>
              <Button
                variant="none"
                onClick={() => handleUpdateScanMode('check_out')}
                disabled={updatingStatus}
                size="sm"
                className={`btn-mode-toggle btn-mode-checkout ${scanMode === 'check_out' ? 'active' : 'inactive'}`}
              >
                Check Out
              </Button>
              <div className="ms-3 d-flex align-items-center gap-3">
                <Form.Check 
                  type="switch"
                  id="include-logos-switch"
                  label="Include Pasig Logos"
                  checked={includePasigLogos}
                  onChange={(e) => setIncludePasigLogos(e.target.checked)}
                  className="fw-bold"
                  style={{ fontSize: '13px' }}
                />
                <Button onClick={handleExportLog} disabled={exporting || !hasSetup} className="btn-export-pdf">
                  {exporting ? 'Exporting…' : 'Generate Report PDF'}
                </Button>
              </div>
            </div>
          </div>

          <Row className="mb-3 g-2">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Search name or ID..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
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
                <option value="all">All Records</option>
                <option value="dept">Filter by Department</option>
                <option value="checkIn">Filter by Check-In Status</option>
                <option value="checkOut">Filter by Check-Out Status</option>
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
              {activeFilterCat === 'checkIn' && (
                <Form.Select value={activeFilterVal} onChange={e => setActiveFilterVal(e.target.value)}>
                  <option value="All">Select Status...</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </Form.Select>
              )}
              {activeFilterCat === 'checkOut' && (
                <Form.Select value={activeFilterVal} onChange={e => setActiveFilterVal(e.target.value)}>
                  <option value="All">Select Status...</option>
                  <option value="Done">Checked Out</option>
                  <option value="Pending">Pending</option>
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
          <div className="xml-view mt-3" style={{
            background: '#f8fdf9',
            border: '1px solid #d4e8da',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <div style={{ background: '#1a5f2e', color: 'white', padding: '14px 20px', fontSize: '13px', fontWeight: '700' }}>
              XML Report — {eventName} &nbsp;|&nbsp; {eventDate} &nbsp;|&nbsp; {filtered.length} records
            </div>
            <div style={{ display: 'flex', borderBottom: '1px solid #d4e8da', background: '#f0f7f2', textAlign: 'center' }}>
              <div style={{ flex: 1, padding: '12px', borderRight: '1px solid #d4e8da' }}>
                <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Total</div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '#1a5f2e' }}>{filtered.length}</div>
              </div>
              <div style={{ flex: 1, padding: '12px', borderRight: '1px solid #d4e8da' }}>
                <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Attended</div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '#1a5f2e' }}>{filtered.filter(r => r.attended).length}</div>
              </div>
              <div style={{ flex: 1, padding: '12px' }}>
                <div style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>Not Attended</div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '#c0392b' }}>{filtered.filter(r => !r.attended).length}</div>
              </div>
            </div>
            <div style={{ overflowX: 'auto', maxHeight: '55vh', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead>
                  <tr style={{ background: '#1a5f2e', color: 'white', position: 'sticky', top: 0 }}>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>#</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Employee Code</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Name</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Department</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Check-In</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Check-Out</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Attended</th>
                    <th style={{ padding: '10px 12px', textAlign: 'left', fontSize: '11px', textTransform: 'uppercase' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length > 0 ? (
                    filtered.map((r, index) => (
                      <tr key={index} style={{ background: index % 2 === 0 ? 'white' : '#f9fafb' }}>
                        <td style={{ padding: '9px 12px', borderBottom: '1px solid #e8e8e8', color: '#aaa', fontSize: '11px' }}>{index + 1}</td>
                        <td style={{ padding: '9px 12px', borderBottom: '1px solid #e8e8e8' }}>{r.employee_code}</td>
                        <td style={{ padding: '9px 12px', borderBottom: '1px solid #e8e8e8', fontWeight: '600' }}>
                          {formatNameLastFirst(
                            r.fullName ||
                            `${r.employee_lastName || r.employee_LastName || ''} ${r.employee_firstName || r.employee_FirstName || ''}`.trim()
                          )}
                        </td>
                        <td style={{ padding: '9px 12px', borderBottom: '1px solid #e8e8e8' }}>{r.department_name}</td>
                        <td style={{ padding: '9px 12px', borderBottom: '1px solid #e8e8e8', fontSize: '11px' }}>{r.checkIn || <span style={{ color: '#bbb' }}>--------</span>}</td>
                        <td style={{ padding: '9px 12px', borderBottom: '1px solid #e8e8e8', fontSize: '11px' }}>{r.checkOut || <span style={{ color: '#bbb' }}>--------</span>}</td>
                        <td style={{ padding: '9px 12px', borderBottom: '1px solid #e8e8e8' }}>
                          {r.attended
                            ? <span style={{ background: '#e9f5ec', color: '#1a5f2e', border: '1px solid #c3e6cb', padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: '700' }}>✓ Attended</span>
                            : <span style={{ background: '#fdecea', color: '#c0392b', border: '1px solid #f5c6cb', padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: '700' }}>✗ Absent</span>}
                        </td>
                        <td style={{ padding: '9px 12px', borderBottom: '1px solid #e8e8e8' }}>
                          {r.status
                            ? <span style={{ background: '#e3f2fd', color: '#0d47a1', border: '1px solid #bbdefb', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '700' }}>{r.status}</span>
                            : <span style={{ color: '#bbb' }}>--------</span>}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" style={{ textAlign: 'center', padding: '24px', color: '#888' }}>No records found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-footer">
            Showing {filtered.length} of {records.length} employees
          </div>

          <div className="mt-3 d-flex justify-content-end gap-2">
            <Button variant="outline-primary" onClick={() => setShowSetupModal(true)}>
              Setup Event
            </Button>
            {eventActive ? (
              <Button variant="outline-danger" onClick={handleDeactivate} disabled={updatingStatus}>
                {updatingStatus ? 'Updating...' : 'Deactivate'}
              </Button>
            ) : (
              <Button variant="success" onClick={handleActivate} disabled={updatingStatus || !hasSetup}>
                {updatingStatus ? 'Updating...' : 'Activate'}
              </Button>
            )}
          </div>

        </Card.Body>
      </Card>

      <Modal show={showSetupModal} onHide={() => setShowSetupModal(false)} size="lg" centered>
  <Modal.Header closeButton>
    <div>
      <Modal.Title>Setup Event Employees</Modal.Title>
      <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.72)', marginTop: 2 }}>
        Select who should attend this event
      </p>
    </div>
  </Modal.Header>
  <Modal.Body>
    <Form.Control
      className="mb-3 search-input"
      type="text"
      placeholder="Search employee number or name..."
      value={setupSearch}
      onChange={(e) => setSetupSearch(e.target.value)}
    />

    <div className="mb-3">
      <div className="setup-section-header">
        <span className="setup-section-label">Departments</span>
        <span
          className="setup-select-all"
          onClick={() => {
            const allIds = new Set(allEmployees.map(e => Number(e.employee_ID)));
            const allSelected = allEmployees.every(e => selectedEmployeeIds.has(Number(e.employee_ID)));
            setSelectedEmployeeIds(allSelected ? new Set() : allIds);
          }}
        >
          {allEmployees.every(e => selectedEmployeeIds.has(Number(e.employee_ID))) ? 'Deselect all' : 'Select all'}
        </span>
      </div>
      <div className="dept-chips-wrap">
        {allDepartments.map((dept) => {
          const deptEmployees = allEmployees.filter(
            emp => Number(emp.department_ID) === Number(dept.id)
          );
          const allSelected = deptEmployees.length > 0 &&
            deptEmployees.every(emp => selectedEmployeeIds.has(Number(emp.employee_ID)));
          return (
            <label key={dept.id} className={`dept-chip ${allSelected ? 'dept-chip--selected' : ''}`}>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={(e) => handleDepartmentToggle(dept.id, e.target.checked)}
                style={{ accentColor: '#28a745', width: 12, height: 12 }}
              />
              {dept.dept_name || dept.department_name}
            </label>
          );
        })}
      </div>
    </div>

    <div className="employee-list-box">
      <div className="employee-list-header">
        <span className="setup-section-label">Employees</span>
        <span style={{ fontSize: 12, color: 'var(--bs-secondary-color, #6c757d)' }}>
          {selectedEmployeeIds.size} selected
        </span>
      </div>
      <div className="employee-list-scroll">
        {setupFilteredEmployees.map((emp) => {
          const employeeId = Number(emp.employee_ID);
          const isChecked = selectedEmployeeIds.has(employeeId);
          return (
            <label key={employeeId} className={`employee-row ${isChecked ? 'employee-row--selected' : ''}`}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleEmployeeToggle(employeeId, e.target.checked)}
                style={{ accentColor: '#28a745', width: 14, height: 14, flexShrink: 0 }}
              />
              <div className="employee-row-info">
                <p className="employee-row-name">{emp.employee_firstName} {emp.employee_LastName}</p>
                <p className="employee-row-sub">{emp.employee_code} · {emp.department_name}</p>
              </div>
              <span className="employee-dept-badge">{emp.department_name}</span>
            </label>
          );
        })}
        {setupFilteredEmployees.length === 0 && (
          <div style={{ padding: '20px', textAlign: 'center', color: '#888', fontSize: 13 }}>
            No employees found
          </div>
        )}
      </div>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <span style={{ fontSize: 12, color: '#6c757d', marginRight: 'auto' }}>
      {selectedEmployeeIds.size} of {allEmployees.length} employees selected
    </span>
    <Button variant="secondary" onClick={() => setShowSetupModal(false)}>Cancel</Button>
    <Button variant="primary" onClick={saveSetup} disabled={savingSetup}>
      {savingSetup ? 'Saving...' : 'Complete'}
    </Button>
  </Modal.Footer>
</Modal>

      {/* Success/Error Feedback Modal */}
      <Modal 
        show={showStatusModal} 
        onHide={() => setShowStatusModal(false)} 
        centered 
        size="sm"
        backdrop="static"
      >
        <Modal.Body className="text-center py-4">
          <div className="mb-3">
            {statusModalType === 'success' ? (
              <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '3rem' }}></i>
            ) : (
              <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: '3rem' }}></i>
            )}
          </div>
          <h5 className={statusModalType === 'success' ? 'text-success' : 'text-danger'}>
            {statusModalType === 'success' ? 'Success' : 'Error'}
          </h5>
          <p className="mb-0 text-muted">{statusModalMsg}</p>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default EventDetailsPage;