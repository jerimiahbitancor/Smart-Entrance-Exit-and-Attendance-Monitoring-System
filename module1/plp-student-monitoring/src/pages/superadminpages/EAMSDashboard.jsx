import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
// import EmployeesPage from './Employees';
// import EventsPage from './Eventspage';
// import EventDetailsPage from './Eventdetailspage';
// import EntryExitPage from './Entryexitpage';
// import Settingspage from './Settingspage';
// import Eventsarchives from './Eventsarchives';
// import EmployeesArchive from './Employeesarchives';
import { getDashboardStats, getDepartmentAttendance, getEvents, getEventAttendance }  from '../../../../backend/src/api';
import '../../css/EAMSDashboard.css';
import LiveClock from "../../components/LiveClock";
import InfoTooltip from "../../components/InfoTooltip";

// ── Keys shared with Settingspage ──────────────────────────────────────────
const LOGO_KEY = 'plp_logo';
const NAME_KEY = 'institution_name';

function AdminDashboard({ onLogout }) {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [currentPage, setCurrentPage] = useState({ page: 'dashboard', data: null });
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [archivesDropdownOpen, setArchivesDropdownOpen] = useState(false);

  // ── Branding (logo + name) ─────────────────────────────────────────────
  const [sidebarLogo, setSidebarLogo] = useState(() => localStorage.getItem(LOGO_KEY) || null);
  const [sidebarName, setSidebarName] = useState(() => localStorage.getItem(NAME_KEY) || 'INSTITUTIONAL ADMIN SUPPORT');

  const [selectedEventFilter, setSelectedEventFilter] = useState('all');
  const [todayEvents, setTodayEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [selectedEventData, setSelectedEventData] = useState(null);

  const [rawAttendanceData, setRawAttendanceData] = useState([]);


  const getEventId = (ev) => ev?.event_ID ?? ev?.id ?? ev?.eventId ?? null;

  // Aggregate department data from raw attendance array (works for both single event and "All Events Today")
  const aggregateDepartmentData = (attendanceArray) => {
    if (!Array.isArray(attendanceArray) || attendanceArray.length === 0) {
      return [];
    }

    const deptMap = {};

    attendanceArray.forEach(emp => {
      const deptName = emp.department_name || 'Unknown Department';
      
      if (!deptMap[deptName]) {
        deptMap[deptName] = { 
          department_name: deptName, 
          present: 0, 
          absent: 0 
        };
      }

      if (emp.attended === true) {
        // Late counts as "Present" in the department bars (matches the KPI Present + Late logic)
        deptMap[deptName].present++;
      } else {
        deptMap[deptName].absent++;
      }
    });

    return Object.values(deptMap);
  };

  // Called by Settingspage when user clicks Save
  const handleBrandingChange = ({ logo, name }) => {
    if (logo) {
      setSidebarLogo(logo);
      localStorage.setItem(LOGO_KEY, logo);
    }
    if (name) {
      setSidebarName(name);
      localStorage.setItem(NAME_KEY, name);
    }
  };

  const [stats, setStats] = useState({
    totalPresent: 0,
    totalAbsent:  0,
    totalLate:    0,
    todayEntries: 0,
    todayExits:   0,
    totalEmployees: 0,
  });

  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => { loadDashboardData(); }, []);

  // Re-fetch whenever the user navigates back to the dashboard
  useEffect(() => {
    if (currentPage.page === 'dashboard') loadDashboardData();
  }, [currentPage.page]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        // Fetch all events (API may support filtering but we'll be defensive)
        const eventsData = await getEvents();
        const eventsArr = Array.isArray(eventsData) ? eventsData : (eventsData?.data ?? []);

        // Normalize event date string (YYYY-MM-DD) helper
        const getEventDateStr = (ev) => {
          if (!ev) return null;
          return (ev.event_date || ev.date || ev.eventDate || '').toString().split('T')[0] || null;
        };

        const todayStr = new Date().toISOString().split('T')[0];

        const todays = eventsArr.filter(ev => getEventDateStr(ev) === todayStr);

        setAllEvents(eventsArr);
        setTodayEvents(todays);

        // Auto-select first event if none selected and today's events exist
        if (todays.length > 0 && selectedEventFilter === 'all') {
          setSelectedEventFilter(String(todays[0].event_ID ?? todays[0].id ?? todays[0].eventId));
        }
      } catch (err) {
        console.error('Failed to load events:', err);
        setAllEvents([]);
        setTodayEvents([]);
      }
    };

    loadEvents();
  }, []);



const loadDashboardData = async () => {
  try {
    let rawAttendance = [];   // This will hold the combined employee attendance data

    if (selectedEventFilter === 'all') {
      // === ALL EVENTS TODAY ===
      // Fetch attendance for EVERY event happening today and combine them
      for (const event of todayEvents) {
        const eventId = getEventId(event);
        if (!eventId) continue;

        try {
          const eventAtt = await getEventAttendance(eventId);
          if (Array.isArray(eventAtt)) {
            rawAttendance.push(...eventAtt);
          }
        } catch (e) {
          console.warn(`Failed to load attendance for event ${eventId}`, e);
        }
      }
    } else {
      // === SINGLE SPECIFIC EVENT ===
      const eventId = parseInt(selectedEventFilter);
      if (eventId) {
        try {
          const eventAtt = await getEventAttendance(eventId);
          if (Array.isArray(eventAtt)) {
            rawAttendance = eventAtt;
          }
        } catch (e) {
          console.warn(`Failed to load attendance for event ${eventId}`, e);
        }
      }
    }

    // Now compute both stats and department breakdown from the same raw data
    const normalizedStats = normalizeStats(rawAttendance, selectedEventFilter);
    const aggregatedDepts = aggregateDepartmentData(rawAttendance);

    setStats(normalizedStats);
    setDepartmentData(aggregatedDepts);
    setRawAttendanceData(rawAttendance);   // ← Add this line
  } catch (err) {
    console.error('Failed to load dashboard data:', err);
    setStats({
      totalPresent: 0, totalAbsent: 0, totalLate: 0,
      todayEntries: 0, todayExits: 0, totalEmployees: 0
    });
    setDepartmentData([]);
  }
};
const normalizeStats = (rawData, filterType) => {
  if (filterType !== 'all') {
    // Specific single event
    if (!Array.isArray(rawData)) {
      return { totalPresent:0, totalAbsent:0, totalLate:0, todayEntries:0, todayExits:0, totalEmployees:0 };
    }

    let present = 0;
    let late    = 0;
    let absent  = 0;

    rawData.forEach(emp => {
      if (emp.attended === true) {
        if (emp.status === "Late") late++;
        else present++;
      } else {
        absent++;
      }
    });

    return {
      totalPresent:   present,
      totalAbsent:    absent,
      totalLate:      late,
      todayEntries:   present + late,
      todayExits:     rawData.filter(e => !!e.checkOut).length,
      totalEmployees: rawData.length,
    };
  }

  // === "All Events Today" mode ===
  if (!Array.isArray(rawData)) {
    return { totalPresent:0, totalAbsent:0, totalLate:0, todayEntries:0, todayExits:0, totalEmployees:0 };
  }

  let present = 0;
  let late    = 0;
  let absent  = 0;

  rawData.forEach(emp => {
    if (emp.attended === true) {
      if (emp.status === "Late") late++;
      else present++;
    } else {
      absent++;
    }
  });

  return {
    totalPresent:   present,
    totalAbsent:    absent,
    totalLate:      late,
    todayEntries:   present + late,
    todayExits:     rawData.filter(e => !!e.checkOut).length,
    totalEmployees: rawData.length,        // total targeted employees across today's events
  };
};

useEffect(() => {
  if (currentPage.page === 'dashboard') {
    loadDashboardData();
  }
}, [currentPage.page, selectedEventFilter]);

useEffect(() => {
  if (selectedEventFilter !== 'all') {
    const event = todayEvents.find(e => getEventId(e) === parseInt(selectedEventFilter));
    setSelectedEventData(event || null);
  } else {
    setSelectedEventData(null);
  }
}, [selectedEventFilter, todayEvents]);

  const total          = stats.totalPresent + stats.totalAbsent + stats.totalLate;
  const presentPercent = total ? (stats.totalPresent / total) * 100 : 0;
  const latePercent    = total ? (stats.totalLate    / total) * 100 : 0;
  const absentPercent  = total ? (stats.totalAbsent  / total) * 100 : 0;

  const formatTime = (date) =>
    date.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' });

  const navigateToPage = (pageName, data = null) => {
    setEventsDropdownOpen(false);
    setArchivesDropdownOpen(false);

    const eventsPages  = ['events', 'eventDetails'];
    const archivePages = ['archiveEmployees', 'archiveEvents'];
    let menu = pageName;
    if (eventsPages.includes(pageName))  menu = 'events';
    else if (archivePages.includes(pageName)) menu = 'archive';
    setActiveMenu(menu);
    setCurrentPage({ page: pageName, data });
  };

  // ── SVG Donut ──────────────────────────────────────────────────────────────
  const SvgDonut = () => {
    const size = 260;
    const cx = size / 2, cy = size / 2;
    const r = 95, strokeW = 50;
    const circ = 2 * Math.PI * r;
    const slices = [
      { pct: presentPercent, color: '#28a745' },
      { pct: latePercent,    color: '#ffc107' },
      { pct: absentPercent,  color: '#dc3545' },
    ];
    let cumulative = 0;
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ flexShrink: 0 }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f0f0f0" strokeWidth={strokeW} />
        {slices.map((s, i) => {
          const dash   = (s.pct / 100) * circ;
          const gap    = circ - dash;
          const offset = circ * 0.25 - (cumulative / 100) * circ;
          cumulative += s.pct;
          if (s.pct === 0) return null;
          return (
            <circle
              key={i}
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={s.color}
              strokeWidth={strokeW}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
            />
          );
        })}
        <text x={cx} y={cy - 12} textAnchor="middle" fontSize="36" fontWeight="800" fill="#222">{total}</text>
        <text x={cx} y={cy + 16} textAnchor="middle" fontSize="14" fill="#aaa">Total</text>
      </svg>
    );
  };

  // ── Dept Bars ──────────────────────────────────────────────────────────────
  const maxDeptTotal = Math.max(...departmentData.map(d => (d.present || 0) + (d.absent || 0)), 1);

  const renderDashboard = () => {
    const todayDateStr = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const isEventSelected = selectedEventFilter !== 'all';
    const currentEventName = isEventSelected 
      ? todayEvents.find(e => e.id === parseInt(selectedEventFilter))?.event_name 
      : "All Events Today";

    // Compute counts for Active / Upcoming events:
    const getEventDateStr = (ev) => (ev?.event_date || ev?.date || ev?.eventDate || '').toString().split('T')[0] || null;
    const todayStr = new Date().toISOString().split('T')[0];

    const activeEventsCount = todayEvents.filter(ev => {
      const st = (ev.status ?? (ev.is_active !== undefined ? (ev.is_active ? 'activated' : 'deactivated') : '')).toString().toLowerCase();
      return st === 'activated';
    }).length;

    const upcomingEventsCount = (allEvents || []).filter(ev => {
      const evDate = getEventDateStr(ev);
      if (!evDate) return false;
      if (evDate > todayStr) return true; // future dates
      if (evDate === todayStr) {
        const st = (ev.status ?? (ev.is_active !== undefined ? (ev.is_active ? 'activated' : 'deactivated') : '')).toString().toLowerCase();
        return st !== 'activated'; // later today but not activated
      }
      return false;
    }).length;

    return (
      <div className="dashboard-container">
        <h1 className="dashboard-title mb-4">
          Dashboard {isEventSelected ? `- ${currentEventName}` : ": Today's Events"}
        </h1>

<h2 className="dashboard-title mb-1" style={{ 
  fontSize: '1.4rem', 
  color: '#1a4731', 
  fontWeight: '700', 
  letterSpacing: '0.5px',
  textShadow: '0 1px 3px rgba(0,0,0,0.4)',
  background: 'linear-gradient(90deg, #4ade80, #16a34a)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}>
  {todayDateStr}
</h2>

      {/* Event Filter Dropdown */}
      <div className="mb-4">
        <select
          className="form-select"
          style={{ maxWidth: '320px', fontSize: '1rem' }}
          value={selectedEventFilter}
          onChange={(e) => setSelectedEventFilter(e.target.value)}
        >
          <option value="all">All Events Today</option>
          {todayEvents.map((event) => {
                    const id = event.event_ID ?? event.id ?? event.eventId;
                    const name = event.event_name ?? event.eventName ?? event.name ?? `Event ${id}`;
                    const time = event.event_time ?? event.time ?? '';
                    return (
                      <option key={id} value={String(id)}>
                        {name} {time ? `- ${time}` : ''}
                      </option>
                    );
                  })}
        </select>
      </div>
      <Row xs={1} md={2} lg={5} className="g-4 mb-4">
      <Col>
          <Card className="stat-card">
            <Card.Body>
              <p className="stat-label">
                Active Events Today
                <InfoTooltip text="Number of events scheduled for today that are activated" />
              </p>
              <h2 className="stat-value text-success">{activeEventsCount}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="stat-card">
            <Card.Body>
              <p className="stat-label">
                Upcoming Events
                <InfoTooltip text="Number of events scheduled for today that are not yet activated" />
              </p>
              <h2 className="stat-value text-success">{upcomingEventsCount}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="stat-card">
            <Card.Body>
              <p className="stat-label">
                Present Today
                <InfoTooltip text="Number of employees present today" />
              </p>
              <h2 className="stat-value text-warning">{stats.totalPresent}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card className="stat-card">
            <Card.Body>
              <p className="stat-label">
                Absent Today
                <InfoTooltip text="Number of employees absent today" />
              </p>
              <h2 className="stat-value text-danger">{stats.totalAbsent}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="stat-card">
            <Card.Body>
              <p className="stat-label">
                {selectedEventFilter === 'all' 
                  ? "Total Event Attendees" 
                  : "Event Attendees"}
                <InfoTooltip 
                  text={selectedEventFilter === 'all' 
                    ? "Total number of employees targeted across all events today" 
                    : "Total number of employees set for this event"} 
                />
              </p>
              <h2 className="stat-value">{stats.totalEmployees || total}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* ── ENTRY / EXIT ──
      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card className="gateway-card">
            <Card.Body>
              <h5>
                Today's Entries
                <InfoTooltip text="Number of employees who entered today" />
              </h5>
              <h2>{stats.todayEntries}</h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="gateway-card">
            <Card.Body>
              <h5>
                Today's Exits
                <InfoTooltip text="Number of employees who exited today" />
              </h5>
              <h2>{stats.todayExits}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      {/* ── CHARTS ── */}
      <Row className="g-4">

        {/* PIE */}
        <Col lg={6}>
          <Card className="analytics-card">
            <Card.Body>
              <h6 style={{ fontWeight:700, fontSize:15, marginBottom:2 }}>
                Overall Status Distribution
                <InfoTooltip text="Shows the percentage of employees Present, Late, and Absent today" />
              </h6>
              <p style={{ fontSize:12, color:'#aaa', marginBottom:20 }}>
                Total attendance status breakdown
              </p>

              <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:36 }}>
                <SvgDonut />
                <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                  {[
                    { label:'Present', value:stats.totalPresent, pct:presentPercent, color:'#28a745' },
                    { label:'Late',    value:stats.totalLate,    pct:latePercent,    color:'#ffc107' },
                    { label:'Absent',  value:stats.totalAbsent,  pct:absentPercent,  color:'#dc3545' },
                  ].map((d, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <span style={{ width:14, height:14, borderRadius:'50%', background:d.color, flexShrink:0 }} />
                      <span style={{ fontSize:15, color:'#444' }}>
                        {d.label}: <strong style={{ color:'#222' }}>{d.value}</strong>{' '}
                        <span style={{ color:'#999', fontSize:13 }}>({d.pct.toFixed(0)}%)</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* DEPT BARS */}
       {/* DEPT BARS - DYNAMIC */}
<Col lg={6}>
  <Card className="analytics-card">
    <Card.Body>
      <h6 style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>
        {selectedEventFilter === 'all' 
          ? "Department-wise Attendance (All Events Today)" 
          : "Department-wise Attendance"}
        <InfoTooltip 
          text={selectedEventFilter === 'all' 
            ? "Attendance breakdown across all events scheduled for today" 
            : "Attendance breakdown for employees targeted in this event"} 
        />
      </h6>
      <p style={{ fontSize: 12, color: '#aaa', marginBottom: 16 }}>
        {selectedEventFilter === 'all' 
          ? "Aggregated by department for today's events" 
          : "Breakdown by department for this event"}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {departmentData.length > 0 ? (
          departmentData.map((dept, i) => {
            const present = dept.present || 0;
            const absent  = dept.absent  || 0;
            const BAR_BASE_WIDTH = 220;
            const presentPx = Math.round((present / maxDeptTotal) * BAR_BASE_WIDTH);
            const absentPx  = Math.round((absent  / maxDeptTotal) * BAR_BASE_WIDTH);

            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ 
                  fontSize: 15, 
                  color: '#555', 
                  fontWeight: 500, 
                  width: 150, 
                  textAlign: 'left', 
                  flexShrink: 0, 
                  lineHeight: 1.2 
                }}>
                  {dept.department_name}
                </span>
                <div style={{ display: 'flex', gap: 2, alignItems: 'center', flexGrow: 1 }}>
                  {present > 0 && (
                    <div style={{
                      width: Math.max(presentPx, 20), 
                      height: 24,
                      background: '#28a745',
                      borderRadius: absent === 0 ? 4 : '4px 0 0 4px',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#fff', 
                      fontSize: 11, 
                      fontWeight: 700,
                      minWidth: 'fit-content', 
                      padding: '0 5px'
                    }}>
                      {present}
                    </div>
                  )}
                  {absent > 0 && (
                    <div style={{
                      width: Math.max(absentPx, 20), 
                      height: 24,
                      background: '#dc3545',
                      borderRadius: present === 0 ? 4 : '0 4px 4px 0',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#fff', 
                      fontSize: 11, 
                      fontWeight: 700,
                      minWidth: 'fit-content', 
                      padding: '0 5px'
                    }}>
                      {absent}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ color: '#888', fontStyle: 'italic', textAlign: 'center', padding: '20px 0' }}>
            No department data available for the selected {selectedEventFilter === 'all' ? 'events' : 'event'}.
          </p>
        )}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 20, marginTop: 16, paddingTop: 12, borderTop: '1px solid #f0f0f0' }}>
        {[['#28a745', 'Present'], ['#dc3545', 'Absent']].map(([color, label]) => (
          <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#555' }}>
            <span style={{ width: 12, height: 12, borderRadius: 2, background: color, display: 'inline-block' }} />
            {label}
          </span>
        ))}
      </div>
    </Card.Body>
  </Card>
</Col>

      </Row>

      {/* ── PER-EVENT BREAKDOWN ──
      {selectedEventFilter === 'all' && (
        <div className="mt-5">
          <Card className="analytics-card">
            <Card.Body>
              <h6 style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>
                Per-Event Breakdown
                <InfoTooltip text="Detailed attendance breakdown for each individual event happening today" />
              </h6>
              <p style={{ fontSize: 12, color: '#aaa', marginBottom: 20 }}>
                Click on any event card to switch to its detailed view
              </p>

              <div className="space-y-4">
                {todayEvents.length > 0 ? (
                  todayEvents.map((event) => {
                    const eventId = getEventId(event);
                    if (!eventId) return null;

                    // Use rawAttendanceData from state (correct reference)
                    const eventAttendance = rawAttendanceData.filter(
                      (emp) => String(emp.event_id || emp.eventId || emp.event_ID || '') === String(eventId)
                    );

                    const present = eventAttendance.filter(
                      emp => emp.attended === true && emp.status !== "Late"
                    ).length;

                    const late = eventAttendance.filter(
                      emp => emp.attended === true && emp.status === "Late"
                    ).length;

                    const absent = eventAttendance.filter(
                      emp => emp.attended === false
                    ).length;

                    const total = present + late + absent || 1;
                    const presentPercent = ((present / total) * 100).toFixed(1);

                    return (
                      <div
                        key={eventId}
                        className="cursor-pointer rounded-lg border border-gray-200 p-5 transition-all hover:border-blue-500 hover:shadow-md"
                        onClick={() => setSelectedEventFilter(String(eventId))}
                        style={{ backgroundColor: '#fff' }}
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <h5 className="mb-1 fw-bold">
                              {event.event_name || event.name || `Event ${eventId}`}
                            </h5>
                            <p className="text-muted mb-0">
                              {event.event_time || event.time || 'No time specified'}
                            </p>
                          </div>
                          <div className="rounded-full bg-green-100 px-4 py-1 text-sm text-green-700 font-medium">
                            {presentPercent}% Present
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="rounded-lg bg-green-50 p-4 text-center">
                            <p className="mb-1 text-sm text-gray-600">Present</p>
                            <p className="text-3xl font-bold text-green-700">{present}</p>
                          </div>
                          <div className="rounded-lg bg-amber-50 p-4 text-center">
                            <p className="mb-1 text-sm text-gray-600">Late</p>
                            <p className="text-3xl font-bold text-amber-700">{late}</p>
                          </div>
                          <div className="rounded-lg bg-red-50 p-4 text-center">
                            <p className="mb-1 text-sm text-gray-600">Absent</p>
                            <p className="text-3xl font-bold text-red-700">{absent}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-muted py-8">
                    No events scheduled for today.
                  </p>
                )}
              </div>
            </Card.Body>
          </Card>
        </div>
      )} */}
    </div>
  );
};

  return (
    <div className="admin-dashboard">
      

      <div className="main-content-area">
        <div className="status-bar">
          <span className="status-badge">Live Status</span>
          <LiveClock className="status-clock" />
        </div>
        <div className="content-overlay">
          {currentPage.page==='dashboard'        && renderDashboard()}
          
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;