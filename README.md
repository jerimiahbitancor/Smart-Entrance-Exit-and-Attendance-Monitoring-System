# Smart-Entrance-Exit-and-Attendance-Monitoring-System
An Integrated Smart Entrance, Exit, and Attendance Monitoring System with Data Analytics for Institutional Decision Support

# Overview
This system provides a unified, intelligent solution for monitoring student movement (entrance/exit) and employee attendance (with special support for flag ceremonies) at Pamantasan ng Lungsod ng Pasig. By combining real‑time tracking with advanced data analytics, the platform delivers actionable insights to support administrative decision‑making, enhance security, and improve operational efficiency.

The system consists of two independent but integrable modules:

1. Entrance & Exit Student Monitoring System – tracks student arrival/departure times and movement patterns.

2. Employee Attendance Monitoring System – records employee check‑in/out, with dedicated handling for flag ceremony attendance.

A Super Admin role oversees both modules, manages users, and accesses cross‑module analytics.

```
Smart-Entrance-Exit-and-Attendance-Monitoring-System
├─ module1
│  ├─ backend
│  │  ├─ eems.sql
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ routes
│  │  │  ├─ addUser.js
│  │  │  ├─ analytics.js
│  │  │  ├─ forgotPassword.js
│  │  │  ├─ importStudents.js
│  │  │  ├─ login.js
│  │  │  ├─ manualEntry.js
│  │  │  ├─ notifications.js
│  │  │  ├─ programs.js
│  │  │  ├─ qrScan.js
│  │  │  ├─ recognize.js
│  │  │  ├─ registration.js
│  │  │  ├─ studentTabAnalytics.js
│  │  │  ├─ systemSettings.js
│  │  │  ├─ visitor-exit.js
│  │  │  └─ visitor.js
│  │  ├─ server.js
│  │  └─ src
│  │     ├─ app.js
│  │     ├─ audioUtils.js
│  │     ├─ db.js
│  │     ├─ gateUtils.js
│  │     ├─ time.js
│  │     └─ utils.js
│  ├─ files.txt
│  ├─ plp-student-monitoring
│  │  ├─ eslint.config.js
│  │  ├─ index.html
│  │  ├─ main.cjs
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  ├─ eems-logs.xslt
│  │  │  ├─ logo.png
│  │  │  ├─ logo3.png
│  │  │  ├─ logoplp.gif
│  │  │  ├─ pasig.png
│  │  │  ├─ pasig_agos.png
│  │  │  ├─ sounds
│  │  │  │  ├─ already_entered.mp3
│  │  │  │  ├─ already_exited.mp3
│  │  │  │  ├─ entry_recorded.mp3
│  │  │  │  ├─ exit_recorded.mp3
│  │  │  │  ├─ gate_closed.mp3
│  │  │  │  ├─ no_entry_recorded.mp3
│  │  │  │  └─ visitor_pass_issued.mp3
│  │  │  ├─ visitor-config.xml
│  │  │  └─ vite.svg
│  │  ├─ README.md
│  │  ├─ src
│  │  │  ├─ App.css
│  │  │  ├─ App.jsx
│  │  │  ├─ assets
│  │  │  │  ├─ ADMIN_DASHBOARD.png
│  │  │  │  ├─ background.png
│  │  │  │  ├─ DASHBOARD_BG.png
│  │  │  │  ├─ facerecogbg.png
│  │  │  │  ├─ llogoplp.png
│  │  │  │  ├─ logo.png
│  │  │  │  ├─ logo2.png
│  │  │  │  ├─ MAIN.png
│  │  │  │  ├─ react.svg
│  │  │  │  ├─ school.jpg
│  │  │  │  └─ try.png
│  │  │  ├─ components
│  │  │  │  ├─ AddUser.jsx
│  │  │  │  ├─ EditStudent.jsx
│  │  │  │  ├─ EditUser.jsx
│  │  │  │  ├─ FaceScan.jsx
│  │  │  │  ├─ GenerateReportFilter.jsx
│  │  │  │  ├─ GenerateReportPdf.jsx
│  │  │  │  ├─ ImportStudents.jsx
│  │  │  │  ├─ ManualInputModal.jsx
│  │  │  │  ├─ ProtectedRoute.jsx
│  │  │  │  ├─ QRScanModal.jsx
│  │  │  │  ├─ RegisterStudent.jsx
│  │  │  │  ├─ RegisterStudentCam.jsx
│  │  │  │  ├─ SettingsDisplay.jsx
│  │  │  │  ├─ ShowEntryExitAlerts.jsx
│  │  │  │  └─ VisitorModal.jsx
│  │  │  ├─ componentscss
│  │  │  │  ├─ AddUser.css
│  │  │  │  ├─ DashboardLayout.css
│  │  │  │  ├─ EditStudent.css
│  │  │  │  ├─ FaceScan.css
│  │  │  │  ├─ GenerateGraduateReportFilter.css
│  │  │  │  ├─ GenerateGraduateReportPdf.css
│  │  │  │  ├─ GenerateReportFilter.css
│  │  │  │  ├─ GenerateReportPdf.css
│  │  │  │  ├─ ImportStudents.css
│  │  │  │  ├─ ManualInputModal.css
│  │  │  │  ├─ QRScanModal.css
│  │  │  │  ├─ RegisterStudent.css
│  │  │  │  ├─ RegisterStudentCam.css
│  │  │  │  ├─ Sidebar.css
│  │  │  │  └─ VisitorModal.css
│  │  │  ├─ context
│  │  │  │  ├─ AuthContext.jsx
│  │  │  │  ├─ CameraContext.jsx
│  │  │  │  └─ LogContext.jsx
│  │  │  ├─ css
│  │  │  │  ├─ Analytics.css
│  │  │  │  ├─ Dashboard.css
│  │  │  │  ├─ FaceRecognition.css
│  │  │  │  ├─ ForgotPass.css
│  │  │  │  ├─ GeneralSettings.css
│  │  │  │  ├─ GlobalModal.css
│  │  │  │  ├─ LandingPage.css
│  │  │  │  ├─ Login.css
│  │  │  │  ├─ Monitor.css
│  │  │  │  ├─ RealTimeMonitor.css
│  │  │  │  ├─ Records.css
│  │  │  │  ├─ SettingsDisplay.css
│  │  │  │  ├─ Students.css
│  │  │  │  ├─ SystemSettings.css
│  │  │  │  └─ Users.css
│  │  │  ├─ index.css
│  │  │  ├─ layouts
│  │  │  │  ├─ DashboardLayout.jsx
│  │  │  │  └─ Sidebar.jsx
│  │  │  ├─ main.jsx
│  │  │  ├─ pages
│  │  │  │  ├─ About.jsx
│  │  │  │  ├─ adminpages
│  │  │  │  │  ├─ Analytics.jsx
│  │  │  │  │  ├─ Dashboard.jsx
│  │  │  │  │  ├─ Monitor.jsx
│  │  │  │  │  ├─ Records.jsx
│  │  │  │  │  └─ Students.jsx
│  │  │  │  ├─ EntranceFaceRecognition.jsx
│  │  │  │  ├─ ExitFaceRecognition.jsx
│  │  │  │  ├─ ForgotPass.jsx
│  │  │  │  ├─ ForgotPass2.jsx
│  │  │  │  ├─ LandingPage.jsx
│  │  │  │  ├─ Login.jsx
│  │  │  │  └─ superadminpages
│  │  │  │     ├─ SuperDashboard.jsx
│  │  │  │     ├─ SuperStudents.jsx
│  │  │  │     ├─ SystemSettings
│  │  │  │     │  ├─ AcademicYearSettings.jsx
│  │  │  │     │  ├─ AddDepartmentModal.jsx
│  │  │  │     │  ├─ AddProgramModal.jsx
│  │  │  │     │  ├─ ArchivedDepartments.jsx
│  │  │  │     │  ├─ ArchivedPrograms.jsx
│  │  │  │     │  ├─ ArchivedStudents.jsx
│  │  │  │     │  ├─ ArchivedUsers.jsx
│  │  │  │     │  ├─ DepartmentSelect.jsx
│  │  │  │     │  ├─ DepartmentsTab.jsx
│  │  │  │     │  ├─ EditProgramModal.jsx
│  │  │  │     │  ├─ EditProgramTab.jsx
│  │  │  │     │  ├─ GateSettings.jsx
│  │  │  │     │  ├─ GeneralSettings.jsx
│  │  │  │     │  ├─ GenerateGraduateReportPdf.jsx
│  │  │  │     │  ├─ GenerateGraduateReportsFilter.jsx
│  │  │  │     │  ├─ LogoSettings.jsx
│  │  │  │     │  └─ SystemSettings.jsx
│  │  │  │     └─ Users.jsx
│  │  │  └─ utils
│  │  │     ├─ eems-report.xslt
│  │  │     ├─ pdfGenerator.js
│  │  │     ├─ timeUtils.js
│  │  │     ├─ xmlParser.js
│  │  │     └─ xmlReportUtils.js
│  │  └─ vite.config.js
│  ├─ python
│  │  ├─ face_service.py
│  │  ├─ myenv
│  │  │  ├─ Lib
│  │  │  │  └─ site-packages
│  │  │  │     ├─ distutils-precedence.pth
│  │  │  │     ├─ pip
│  │  │  │     │  ├─ py.typed
│  │  │  │     │  ├─ _internal
│  │  │  │     │  │  ├─ build_env.py
│  │  │  │     │  │  ├─ cache.py
│  │  │  │     │  │  ├─ cli
│  │  │  │     │  │  │  ├─ autocompletion.py
│  │  │  │     │  │  │  ├─ base_command.py
│  │  │  │     │  │  │  ├─ cmdoptions.py
│  │  │  │     │  │  │  ├─ command_context.py
│  │  │  │     │  │  │  ├─ main.py
│  │  │  │     │  │  │  ├─ main_parser.py
│  │  │  │     │  │  │  ├─ parser.py
│  │  │  │     │  │  │  ├─ progress_bars.py
│  │  │  │     │  │  │  ├─ req_command.py
│  │  │  │     │  │  │  ├─ spinners.py
│  │  │  │     │  │  │  ├─ status_codes.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ commands
│  │  │  │     │  │  │  ├─ cache.py
│  │  │  │     │  │  │  ├─ check.py
│  │  │  │     │  │  │  ├─ completion.py
│  │  │  │     │  │  │  ├─ configuration.py
│  │  │  │     │  │  │  ├─ debug.py
│  │  │  │     │  │  │  ├─ download.py
│  │  │  │     │  │  │  ├─ freeze.py
│  │  │  │     │  │  │  ├─ hash.py
│  │  │  │     │  │  │  ├─ help.py
│  │  │  │     │  │  │  ├─ index.py
│  │  │  │     │  │  │  ├─ install.py
│  │  │  │     │  │  │  ├─ list.py
│  │  │  │     │  │  │  ├─ search.py
│  │  │  │     │  │  │  ├─ show.py
│  │  │  │     │  │  │  ├─ uninstall.py
│  │  │  │     │  │  │  ├─ wheel.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ configuration.py
│  │  │  │     │  │  ├─ distributions
│  │  │  │     │  │  │  ├─ base.py
│  │  │  │     │  │  │  ├─ installed.py
│  │  │  │     │  │  │  ├─ sdist.py
│  │  │  │     │  │  │  ├─ wheel.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ exceptions.py
│  │  │  │     │  │  ├─ index
│  │  │  │     │  │  │  ├─ collector.py
│  │  │  │     │  │  │  ├─ package_finder.py
│  │  │  │     │  │  │  ├─ sources.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ locations
│  │  │  │     │  │  │  ├─ base.py
│  │  │  │     │  │  │  ├─ _distutils.py
│  │  │  │     │  │  │  ├─ _sysconfig.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ main.py
│  │  │  │     │  │  ├─ metadata
│  │  │  │     │  │  │  ├─ base.py
│  │  │  │     │  │  │  ├─ pkg_resources.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ models
│  │  │  │     │  │  │  ├─ candidate.py
│  │  │  │     │  │  │  ├─ direct_url.py
│  │  │  │     │  │  │  ├─ format_control.py
│  │  │  │     │  │  │  ├─ index.py
│  │  │  │     │  │  │  ├─ link.py
│  │  │  │     │  │  │  ├─ scheme.py
│  │  │  │     │  │  │  ├─ search_scope.py
│  │  │  │     │  │  │  ├─ selection_prefs.py
│  │  │  │     │  │  │  ├─ target_python.py
│  │  │  │     │  │  │  ├─ wheel.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ network
│  │  │  │     │  │  │  ├─ auth.py
│  │  │  │     │  │  │  ├─ cache.py
│  │  │  │     │  │  │  ├─ download.py
│  │  │  │     │  │  │  ├─ lazy_wheel.py
│  │  │  │     │  │  │  ├─ session.py
│  │  │  │     │  │  │  ├─ utils.py
│  │  │  │     │  │  │  ├─ xmlrpc.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ operations
│  │  │  │     │  │  │  ├─ build
│  │  │  │     │  │  │  │  ├─ metadata.py
│  │  │  │     │  │  │  │  ├─ metadata_editable.py
│  │  │  │     │  │  │  │  ├─ metadata_legacy.py
│  │  │  │     │  │  │  │  ├─ wheel.py
│  │  │  │     │  │  │  │  ├─ wheel_editable.py
│  │  │  │     │  │  │  │  ├─ wheel_legacy.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ check.py
│  │  │  │     │  │  │  ├─ freeze.py
│  │  │  │     │  │  │  ├─ install
│  │  │  │     │  │  │  │  ├─ editable_legacy.py
│  │  │  │     │  │  │  │  ├─ legacy.py
│  │  │  │     │  │  │  │  ├─ wheel.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ prepare.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ pyproject.py
│  │  │  │     │  │  ├─ req
│  │  │  │     │  │  │  ├─ constructors.py
│  │  │  │     │  │  │  ├─ req_file.py
│  │  │  │     │  │  │  ├─ req_install.py
│  │  │  │     │  │  │  ├─ req_set.py
│  │  │  │     │  │  │  ├─ req_tracker.py
│  │  │  │     │  │  │  ├─ req_uninstall.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ resolution
│  │  │  │     │  │  │  ├─ base.py
│  │  │  │     │  │  │  ├─ legacy
│  │  │  │     │  │  │  │  ├─ resolver.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ resolvelib
│  │  │  │     │  │  │  │  ├─ base.py
│  │  │  │     │  │  │  │  ├─ candidates.py
│  │  │  │     │  │  │  │  ├─ factory.py
│  │  │  │     │  │  │  │  ├─ found_candidates.py
│  │  │  │     │  │  │  │  ├─ provider.py
│  │  │  │     │  │  │  │  ├─ reporter.py
│  │  │  │     │  │  │  │  ├─ requirements.py
│  │  │  │     │  │  │  │  ├─ resolver.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ self_outdated_check.py
│  │  │  │     │  │  ├─ utils
│  │  │  │     │  │  │  ├─ appdirs.py
│  │  │  │     │  │  │  ├─ compat.py
│  │  │  │     │  │  │  ├─ compatibility_tags.py
│  │  │  │     │  │  │  ├─ datetime.py
│  │  │  │     │  │  │  ├─ deprecation.py
│  │  │  │     │  │  │  ├─ direct_url_helpers.py
│  │  │  │     │  │  │  ├─ distutils_args.py
│  │  │  │     │  │  │  ├─ egg_link.py
│  │  │  │     │  │  │  ├─ encoding.py
│  │  │  │     │  │  │  ├─ entrypoints.py
│  │  │  │     │  │  │  ├─ filesystem.py
│  │  │  │     │  │  │  ├─ filetypes.py
│  │  │  │     │  │  │  ├─ glibc.py
│  │  │  │     │  │  │  ├─ hashes.py
│  │  │  │     │  │  │  ├─ inject_securetransport.py
│  │  │  │     │  │  │  ├─ logging.py
│  │  │  │     │  │  │  ├─ misc.py
│  │  │  │     │  │  │  ├─ models.py
│  │  │  │     │  │  │  ├─ packaging.py
│  │  │  │     │  │  │  ├─ setuptools_build.py
│  │  │  │     │  │  │  ├─ subprocess.py
│  │  │  │     │  │  │  ├─ temp_dir.py
│  │  │  │     │  │  │  ├─ unpacking.py
│  │  │  │     │  │  │  ├─ urls.py
│  │  │  │     │  │  │  ├─ virtualenv.py
│  │  │  │     │  │  │  ├─ wheel.py
│  │  │  │     │  │  │  ├─ _log.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ vcs
│  │  │  │     │  │  │  ├─ bazaar.py
│  │  │  │     │  │  │  ├─ git.py
│  │  │  │     │  │  │  ├─ mercurial.py
│  │  │  │     │  │  │  ├─ subversion.py
│  │  │  │     │  │  │  ├─ versioncontrol.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ wheel_builder.py
│  │  │  │     │  │  └─ __init__.py
│  │  │  │     │  ├─ _vendor
│  │  │  │     │  │  ├─ cachecontrol
│  │  │  │     │  │  │  ├─ adapter.py
│  │  │  │     │  │  │  ├─ cache.py
│  │  │  │     │  │  │  ├─ caches
│  │  │  │     │  │  │  │  ├─ file_cache.py
│  │  │  │     │  │  │  │  ├─ redis_cache.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ compat.py
│  │  │  │     │  │  │  ├─ controller.py
│  │  │  │     │  │  │  ├─ filewrapper.py
│  │  │  │     │  │  │  ├─ heuristics.py
│  │  │  │     │  │  │  ├─ serialize.py
│  │  │  │     │  │  │  ├─ wrapper.py
│  │  │  │     │  │  │  ├─ _cmd.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ certifi
│  │  │  │     │  │  │  ├─ cacert.pem
│  │  │  │     │  │  │  ├─ core.py
│  │  │  │     │  │  │  ├─ __init__.py
│  │  │  │     │  │  │  └─ __main__.py
│  │  │  │     │  │  ├─ chardet
│  │  │  │     │  │  │  ├─ big5freq.py
│  │  │  │     │  │  │  ├─ big5prober.py
│  │  │  │     │  │  │  ├─ chardistribution.py
│  │  │  │     │  │  │  ├─ charsetgroupprober.py
│  │  │  │     │  │  │  ├─ charsetprober.py
│  │  │  │     │  │  │  ├─ cli
│  │  │  │     │  │  │  │  ├─ chardetect.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ codingstatemachine.py
│  │  │  │     │  │  │  ├─ compat.py
│  │  │  │     │  │  │  ├─ cp949prober.py
│  │  │  │     │  │  │  ├─ enums.py
│  │  │  │     │  │  │  ├─ escprober.py
│  │  │  │     │  │  │  ├─ escsm.py
│  │  │  │     │  │  │  ├─ eucjpprober.py
│  │  │  │     │  │  │  ├─ euckrfreq.py
│  │  │  │     │  │  │  ├─ euckrprober.py
│  │  │  │     │  │  │  ├─ euctwfreq.py
│  │  │  │     │  │  │  ├─ euctwprober.py
│  │  │  │     │  │  │  ├─ gb2312freq.py
│  │  │  │     │  │  │  ├─ gb2312prober.py
│  │  │  │     │  │  │  ├─ hebrewprober.py
│  │  │  │     │  │  │  ├─ jisfreq.py
│  │  │  │     │  │  │  ├─ jpcntx.py
│  │  │  │     │  │  │  ├─ langbulgarianmodel.py
│  │  │  │     │  │  │  ├─ langgreekmodel.py
│  │  │  │     │  │  │  ├─ langhebrewmodel.py
│  │  │  │     │  │  │  ├─ langhungarianmodel.py
│  │  │  │     │  │  │  ├─ langrussianmodel.py
│  │  │  │     │  │  │  ├─ langthaimodel.py
│  │  │  │     │  │  │  ├─ langturkishmodel.py
│  │  │  │     │  │  │  ├─ latin1prober.py
│  │  │  │     │  │  │  ├─ mbcharsetprober.py
│  │  │  │     │  │  │  ├─ mbcsgroupprober.py
│  │  │  │     │  │  │  ├─ mbcssm.py
│  │  │  │     │  │  │  ├─ metadata
│  │  │  │     │  │  │  │  ├─ languages.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ sbcharsetprober.py
│  │  │  │     │  │  │  ├─ sbcsgroupprober.py
│  │  │  │     │  │  │  ├─ sjisprober.py
│  │  │  │     │  │  │  ├─ universaldetector.py
│  │  │  │     │  │  │  ├─ utf8prober.py
│  │  │  │     │  │  │  ├─ version.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ colorama
│  │  │  │     │  │  │  ├─ ansi.py
│  │  │  │     │  │  │  ├─ ansitowin32.py
│  │  │  │     │  │  │  ├─ initialise.py
│  │  │  │     │  │  │  ├─ win32.py
│  │  │  │     │  │  │  ├─ winterm.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ distlib
│  │  │  │     │  │  │  ├─ compat.py
│  │  │  │     │  │  │  ├─ database.py
│  │  │  │     │  │  │  ├─ index.py
│  │  │  │     │  │  │  ├─ locators.py
│  │  │  │     │  │  │  ├─ manifest.py
│  │  │  │     │  │  │  ├─ markers.py
│  │  │  │     │  │  │  ├─ metadata.py
│  │  │  │     │  │  │  ├─ resources.py
│  │  │  │     │  │  │  ├─ scripts.py
│  │  │  │     │  │  │  ├─ t32.exe
│  │  │  │     │  │  │  ├─ t64-arm.exe
│  │  │  │     │  │  │  ├─ t64.exe
│  │  │  │     │  │  │  ├─ util.py
│  │  │  │     │  │  │  ├─ version.py
│  │  │  │     │  │  │  ├─ w32.exe
│  │  │  │     │  │  │  ├─ w64-arm.exe
│  │  │  │     │  │  │  ├─ w64.exe
│  │  │  │     │  │  │  ├─ wheel.py
│  │  │  │     │  │  │  ├─ _backport
│  │  │  │     │  │  │  │  ├─ misc.py
│  │  │  │     │  │  │  │  ├─ shutil.py
│  │  │  │     │  │  │  │  ├─ sysconfig.cfg
│  │  │  │     │  │  │  │  ├─ sysconfig.py
│  │  │  │     │  │  │  │  ├─ tarfile.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ distro.py
│  │  │  │     │  │  ├─ html5lib
│  │  │  │     │  │  │  ├─ constants.py
│  │  │  │     │  │  │  ├─ filters
│  │  │  │     │  │  │  │  ├─ alphabeticalattributes.py
│  │  │  │     │  │  │  │  ├─ base.py
│  │  │  │     │  │  │  │  ├─ inject_meta_charset.py
│  │  │  │     │  │  │  │  ├─ lint.py
│  │  │  │     │  │  │  │  ├─ optionaltags.py
│  │  │  │     │  │  │  │  ├─ sanitizer.py
│  │  │  │     │  │  │  │  ├─ whitespace.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ html5parser.py
│  │  │  │     │  │  │  ├─ serializer.py
│  │  │  │     │  │  │  ├─ treeadapters
│  │  │  │     │  │  │  │  ├─ genshi.py
│  │  │  │     │  │  │  │  ├─ sax.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ treebuilders
│  │  │  │     │  │  │  │  ├─ base.py
│  │  │  │     │  │  │  │  ├─ dom.py
│  │  │  │     │  │  │  │  ├─ etree.py
│  │  │  │     │  │  │  │  ├─ etree_lxml.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ treewalkers
│  │  │  │     │  │  │  │  ├─ base.py
│  │  │  │     │  │  │  │  ├─ dom.py
│  │  │  │     │  │  │  │  ├─ etree.py
│  │  │  │     │  │  │  │  ├─ etree_lxml.py
│  │  │  │     │  │  │  │  ├─ genshi.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ _ihatexml.py
│  │  │  │     │  │  │  ├─ _inputstream.py
│  │  │  │     │  │  │  ├─ _tokenizer.py
│  │  │  │     │  │  │  ├─ _trie
│  │  │  │     │  │  │  │  ├─ py.py
│  │  │  │     │  │  │  │  ├─ _base.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ _utils.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ idna
│  │  │  │     │  │  │  ├─ codec.py
│  │  │  │     │  │  │  ├─ compat.py
│  │  │  │     │  │  │  ├─ core.py
│  │  │  │     │  │  │  ├─ idnadata.py
│  │  │  │     │  │  │  ├─ intranges.py
│  │  │  │     │  │  │  ├─ package_data.py
│  │  │  │     │  │  │  ├─ uts46data.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ msgpack
│  │  │  │     │  │  │  ├─ exceptions.py
│  │  │  │     │  │  │  ├─ ext.py
│  │  │  │     │  │  │  ├─ fallback.py
│  │  │  │     │  │  │  ├─ _version.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ packaging
│  │  │  │     │  │  │  ├─ markers.py
│  │  │  │     │  │  │  ├─ requirements.py
│  │  │  │     │  │  │  ├─ specifiers.py
│  │  │  │     │  │  │  ├─ tags.py
│  │  │  │     │  │  │  ├─ utils.py
│  │  │  │     │  │  │  ├─ version.py
│  │  │  │     │  │  │  ├─ _manylinux.py
│  │  │  │     │  │  │  ├─ _musllinux.py
│  │  │  │     │  │  │  ├─ _structures.py
│  │  │  │     │  │  │  ├─ __about__.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ pep517
│  │  │  │     │  │  │  ├─ build.py
│  │  │  │     │  │  │  ├─ check.py
│  │  │  │     │  │  │  ├─ colorlog.py
│  │  │  │     │  │  │  ├─ compat.py
│  │  │  │     │  │  │  ├─ dirtools.py
│  │  │  │     │  │  │  ├─ envbuild.py
│  │  │  │     │  │  │  ├─ in_process
│  │  │  │     │  │  │  │  ├─ _in_process.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ meta.py
│  │  │  │     │  │  │  ├─ wrappers.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ pkg_resources
│  │  │  │     │  │  │  ├─ py31compat.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ platformdirs
│  │  │  │     │  │  │  ├─ android.py
│  │  │  │     │  │  │  ├─ api.py
│  │  │  │     │  │  │  ├─ macos.py
│  │  │  │     │  │  │  ├─ unix.py
│  │  │  │     │  │  │  ├─ version.py
│  │  │  │     │  │  │  ├─ windows.py
│  │  │  │     │  │  │  ├─ __init__.py
│  │  │  │     │  │  │  └─ __main__.py
│  │  │  │     │  │  ├─ progress
│  │  │  │     │  │  │  ├─ bar.py
│  │  │  │     │  │  │  ├─ colors.py
│  │  │  │     │  │  │  ├─ counter.py
│  │  │  │     │  │  │  ├─ spinner.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ pygments
│  │  │  │     │  │  │  ├─ cmdline.py
│  │  │  │     │  │  │  ├─ console.py
│  │  │  │     │  │  │  ├─ filter.py
│  │  │  │     │  │  │  ├─ filters
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ formatter.py
│  │  │  │     │  │  │  ├─ formatters
│  │  │  │     │  │  │  │  ├─ bbcode.py
│  │  │  │     │  │  │  │  ├─ groff.py
│  │  │  │     │  │  │  │  ├─ html.py
│  │  │  │     │  │  │  │  ├─ img.py
│  │  │  │     │  │  │  │  ├─ irc.py
│  │  │  │     │  │  │  │  ├─ latex.py
│  │  │  │     │  │  │  │  ├─ other.py
│  │  │  │     │  │  │  │  ├─ pangomarkup.py
│  │  │  │     │  │  │  │  ├─ rtf.py
│  │  │  │     │  │  │  │  ├─ svg.py
│  │  │  │     │  │  │  │  ├─ terminal.py
│  │  │  │     │  │  │  │  ├─ terminal256.py
│  │  │  │     │  │  │  │  ├─ _mapping.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ lexer.py
│  │  │  │     │  │  │  ├─ lexers
│  │  │  │     │  │  │  │  ├─ python.py
│  │  │  │     │  │  │  │  ├─ _mapping.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ modeline.py
│  │  │  │     │  │  │  ├─ plugin.py
│  │  │  │     │  │  │  ├─ regexopt.py
│  │  │  │     │  │  │  ├─ scanner.py
│  │  │  │     │  │  │  ├─ sphinxext.py
│  │  │  │     │  │  │  ├─ style.py
│  │  │  │     │  │  │  ├─ styles
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ token.py
│  │  │  │     │  │  │  ├─ unistring.py
│  │  │  │     │  │  │  ├─ util.py
│  │  │  │     │  │  │  ├─ __init__.py
│  │  │  │     │  │  │  └─ __main__.py
│  │  │  │     │  │  ├─ pyparsing
│  │  │  │     │  │  │  ├─ actions.py
│  │  │  │     │  │  │  ├─ common.py
│  │  │  │     │  │  │  ├─ core.py
│  │  │  │     │  │  │  ├─ diagram
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ exceptions.py
│  │  │  │     │  │  │  ├─ helpers.py
│  │  │  │     │  │  │  ├─ results.py
│  │  │  │     │  │  │  ├─ testing.py
│  │  │  │     │  │  │  ├─ unicode.py
│  │  │  │     │  │  │  ├─ util.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ requests
│  │  │  │     │  │  │  ├─ adapters.py
│  │  │  │     │  │  │  ├─ api.py
│  │  │  │     │  │  │  ├─ auth.py
│  │  │  │     │  │  │  ├─ certs.py
│  │  │  │     │  │  │  ├─ compat.py
│  │  │  │     │  │  │  ├─ cookies.py
│  │  │  │     │  │  │  ├─ exceptions.py
│  │  │  │     │  │  │  ├─ help.py
│  │  │  │     │  │  │  ├─ hooks.py
│  │  │  │     │  │  │  ├─ models.py
│  │  │  │     │  │  │  ├─ packages.py
│  │  │  │     │  │  │  ├─ sessions.py
│  │  │  │     │  │  │  ├─ status_codes.py
│  │  │  │     │  │  │  ├─ structures.py
│  │  │  │     │  │  │  ├─ utils.py
│  │  │  │     │  │  │  ├─ _internal_utils.py
│  │  │  │     │  │  │  ├─ __init__.py
│  │  │  │     │  │  │  └─ __version__.py
│  │  │  │     │  │  ├─ resolvelib
│  │  │  │     │  │  │  ├─ compat
│  │  │  │     │  │  │  │  ├─ collections_abc.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ providers.py
│  │  │  │     │  │  │  ├─ reporters.py
│  │  │  │     │  │  │  ├─ resolvers.py
│  │  │  │     │  │  │  ├─ structs.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ rich
│  │  │  │     │  │  │  ├─ abc.py
│  │  │  │     │  │  │  ├─ align.py
│  │  │  │     │  │  │  ├─ ansi.py
│  │  │  │     │  │  │  ├─ bar.py
│  │  │  │     │  │  │  ├─ box.py
│  │  │  │     │  │  │  ├─ cells.py
│  │  │  │     │  │  │  ├─ color.py
│  │  │  │     │  │  │  ├─ color_triplet.py
│  │  │  │     │  │  │  ├─ columns.py
│  │  │  │     │  │  │  ├─ console.py
│  │  │  │     │  │  │  ├─ constrain.py
│  │  │  │     │  │  │  ├─ containers.py
│  │  │  │     │  │  │  ├─ control.py
│  │  │  │     │  │  │  ├─ default_styles.py
│  │  │  │     │  │  │  ├─ diagnose.py
│  │  │  │     │  │  │  ├─ emoji.py
│  │  │  │     │  │  │  ├─ errors.py
│  │  │  │     │  │  │  ├─ filesize.py
│  │  │  │     │  │  │  ├─ file_proxy.py
│  │  │  │     │  │  │  ├─ highlighter.py
│  │  │  │     │  │  │  ├─ json.py
│  │  │  │     │  │  │  ├─ jupyter.py
│  │  │  │     │  │  │  ├─ layout.py
│  │  │  │     │  │  │  ├─ live.py
│  │  │  │     │  │  │  ├─ live_render.py
│  │  │  │     │  │  │  ├─ logging.py
│  │  │  │     │  │  │  ├─ markup.py
│  │  │  │     │  │  │  ├─ measure.py
│  │  │  │     │  │  │  ├─ padding.py
│  │  │  │     │  │  │  ├─ pager.py
│  │  │  │     │  │  │  ├─ palette.py
│  │  │  │     │  │  │  ├─ panel.py
│  │  │  │     │  │  │  ├─ pretty.py
│  │  │  │     │  │  │  ├─ progress.py
│  │  │  │     │  │  │  ├─ progress_bar.py
│  │  │  │     │  │  │  ├─ prompt.py
│  │  │  │     │  │  │  ├─ protocol.py
│  │  │  │     │  │  │  ├─ region.py
│  │  │  │     │  │  │  ├─ repr.py
│  │  │  │     │  │  │  ├─ rule.py
│  │  │  │     │  │  │  ├─ scope.py
│  │  │  │     │  │  │  ├─ screen.py
│  │  │  │     │  │  │  ├─ segment.py
│  │  │  │     │  │  │  ├─ spinner.py
│  │  │  │     │  │  │  ├─ status.py
│  │  │  │     │  │  │  ├─ style.py
│  │  │  │     │  │  │  ├─ styled.py
│  │  │  │     │  │  │  ├─ syntax.py
│  │  │  │     │  │  │  ├─ table.py
│  │  │  │     │  │  │  ├─ tabulate.py
│  │  │  │     │  │  │  ├─ terminal_theme.py
│  │  │  │     │  │  │  ├─ text.py
│  │  │  │     │  │  │  ├─ theme.py
│  │  │  │     │  │  │  ├─ themes.py
│  │  │  │     │  │  │  ├─ traceback.py
│  │  │  │     │  │  │  ├─ tree.py
│  │  │  │     │  │  │  ├─ _cell_widths.py
│  │  │  │     │  │  │  ├─ _emoji_codes.py
│  │  │  │     │  │  │  ├─ _emoji_replace.py
│  │  │  │     │  │  │  ├─ _extension.py
│  │  │  │     │  │  │  ├─ _inspect.py
│  │  │  │     │  │  │  ├─ _log_render.py
│  │  │  │     │  │  │  ├─ _loop.py
│  │  │  │     │  │  │  ├─ _lru_cache.py
│  │  │  │     │  │  │  ├─ _palettes.py
│  │  │  │     │  │  │  ├─ _pick.py
│  │  │  │     │  │  │  ├─ _ratio.py
│  │  │  │     │  │  │  ├─ _spinners.py
│  │  │  │     │  │  │  ├─ _stack.py
│  │  │  │     │  │  │  ├─ _timer.py
│  │  │  │     │  │  │  ├─ _windows.py
│  │  │  │     │  │  │  ├─ _wrap.py
│  │  │  │     │  │  │  ├─ __init__.py
│  │  │  │     │  │  │  └─ __main__.py
│  │  │  │     │  │  ├─ six.py
│  │  │  │     │  │  ├─ tenacity
│  │  │  │     │  │  │  ├─ after.py
│  │  │  │     │  │  │  ├─ before.py
│  │  │  │     │  │  │  ├─ before_sleep.py
│  │  │  │     │  │  │  ├─ nap.py
│  │  │  │     │  │  │  ├─ retry.py
│  │  │  │     │  │  │  ├─ stop.py
│  │  │  │     │  │  │  ├─ tornadoweb.py
│  │  │  │     │  │  │  ├─ wait.py
│  │  │  │     │  │  │  ├─ _asyncio.py
│  │  │  │     │  │  │  ├─ _utils.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ tomli
│  │  │  │     │  │  │  ├─ _parser.py
│  │  │  │     │  │  │  ├─ _re.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ typing_extensions.py
│  │  │  │     │  │  ├─ urllib3
│  │  │  │     │  │  │  ├─ connection.py
│  │  │  │     │  │  │  ├─ connectionpool.py
│  │  │  │     │  │  │  ├─ contrib
│  │  │  │     │  │  │  │  ├─ appengine.py
│  │  │  │     │  │  │  │  ├─ ntlmpool.py
│  │  │  │     │  │  │  │  ├─ pyopenssl.py
│  │  │  │     │  │  │  │  ├─ securetransport.py
│  │  │  │     │  │  │  │  ├─ socks.py
│  │  │  │     │  │  │  │  ├─ _appengine_environ.py
│  │  │  │     │  │  │  │  ├─ _securetransport
│  │  │  │     │  │  │  │  │  ├─ bindings.py
│  │  │  │     │  │  │  │  │  ├─ low_level.py
│  │  │  │     │  │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ exceptions.py
│  │  │  │     │  │  │  ├─ fields.py
│  │  │  │     │  │  │  ├─ filepost.py
│  │  │  │     │  │  │  ├─ packages
│  │  │  │     │  │  │  │  ├─ backports
│  │  │  │     │  │  │  │  │  ├─ makefile.py
│  │  │  │     │  │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  │  ├─ six.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ poolmanager.py
│  │  │  │     │  │  │  ├─ request.py
│  │  │  │     │  │  │  ├─ response.py
│  │  │  │     │  │  │  ├─ util
│  │  │  │     │  │  │  │  ├─ connection.py
│  │  │  │     │  │  │  │  ├─ proxy.py
│  │  │  │     │  │  │  │  ├─ queue.py
│  │  │  │     │  │  │  │  ├─ request.py
│  │  │  │     │  │  │  │  ├─ response.py
│  │  │  │     │  │  │  │  ├─ retry.py
│  │  │  │     │  │  │  │  ├─ ssltransport.py
│  │  │  │     │  │  │  │  ├─ ssl_.py
│  │  │  │     │  │  │  │  ├─ ssl_match_hostname.py
│  │  │  │     │  │  │  │  ├─ timeout.py
│  │  │  │     │  │  │  │  ├─ url.py
│  │  │  │     │  │  │  │  ├─ wait.py
│  │  │  │     │  │  │  │  └─ __init__.py
│  │  │  │     │  │  │  ├─ _collections.py
│  │  │  │     │  │  │  ├─ _version.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ vendor.txt
│  │  │  │     │  │  ├─ webencodings
│  │  │  │     │  │  │  ├─ labels.py
│  │  │  │     │  │  │  ├─ mklabels.py
│  │  │  │     │  │  │  ├─ tests.py
│  │  │  │     │  │  │  ├─ x_user_defined.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  └─ __init__.py
│  │  │  │     │  ├─ __init__.py
│  │  │  │     │  └─ __main__.py
│  │  │  │     ├─ pip-22.0.4.dist-info
│  │  │  │     │  ├─ entry_points.txt
│  │  │  │     │  ├─ INSTALLER
│  │  │  │     │  ├─ LICENSE.txt
│  │  │  │     │  ├─ METADATA
│  │  │  │     │  ├─ RECORD
│  │  │  │     │  ├─ REQUESTED
│  │  │  │     │  ├─ top_level.txt
│  │  │  │     │  └─ WHEEL
│  │  │  │     ├─ pkg_resources
│  │  │  │     │  ├─ extern
│  │  │  │     │  │  └─ __init__.py
│  │  │  │     │  ├─ tests
│  │  │  │     │  │  └─ data
│  │  │  │     │  │     └─ my-test-package-source
│  │  │  │     │  │        └─ setup.py
│  │  │  │     │  ├─ _vendor
│  │  │  │     │  │  ├─ appdirs.py
│  │  │  │     │  │  ├─ packaging
│  │  │  │     │  │  │  ├─ markers.py
│  │  │  │     │  │  │  ├─ requirements.py
│  │  │  │     │  │  │  ├─ specifiers.py
│  │  │  │     │  │  │  ├─ tags.py
│  │  │  │     │  │  │  ├─ utils.py
│  │  │  │     │  │  │  ├─ version.py
│  │  │  │     │  │  │  ├─ _compat.py
│  │  │  │     │  │  │  ├─ _structures.py
│  │  │  │     │  │  │  ├─ _typing.py
│  │  │  │     │  │  │  ├─ __about__.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ pyparsing.py
│  │  │  │     │  │  └─ __init__.py
│  │  │  │     │  └─ __init__.py
│  │  │  │     ├─ setuptools
│  │  │  │     │  ├─ archive_util.py
│  │  │  │     │  ├─ build_meta.py
│  │  │  │     │  ├─ cli-32.exe
│  │  │  │     │  ├─ cli-64.exe
│  │  │  │     │  ├─ cli.exe
│  │  │  │     │  ├─ command
│  │  │  │     │  │  ├─ alias.py
│  │  │  │     │  │  ├─ bdist_egg.py
│  │  │  │     │  │  ├─ bdist_rpm.py
│  │  │  │     │  │  ├─ build_clib.py
│  │  │  │     │  │  ├─ build_ext.py
│  │  │  │     │  │  ├─ build_py.py
│  │  │  │     │  │  ├─ develop.py
│  │  │  │     │  │  ├─ dist_info.py
│  │  │  │     │  │  ├─ easy_install.py
│  │  │  │     │  │  ├─ egg_info.py
│  │  │  │     │  │  ├─ install.py
│  │  │  │     │  │  ├─ install_egg_info.py
│  │  │  │     │  │  ├─ install_lib.py
│  │  │  │     │  │  ├─ install_scripts.py
│  │  │  │     │  │  ├─ launcher manifest.xml
│  │  │  │     │  │  ├─ py36compat.py
│  │  │  │     │  │  ├─ register.py
│  │  │  │     │  │  ├─ rotate.py
│  │  │  │     │  │  ├─ saveopts.py
│  │  │  │     │  │  ├─ sdist.py
│  │  │  │     │  │  ├─ setopt.py
│  │  │  │     │  │  ├─ test.py
│  │  │  │     │  │  ├─ upload.py
│  │  │  │     │  │  ├─ upload_docs.py
│  │  │  │     │  │  └─ __init__.py
│  │  │  │     │  ├─ config.py
│  │  │  │     │  ├─ depends.py
│  │  │  │     │  ├─ dep_util.py
│  │  │  │     │  ├─ dist.py
│  │  │  │     │  ├─ errors.py
│  │  │  │     │  ├─ extension.py
│  │  │  │     │  ├─ extern
│  │  │  │     │  │  └─ __init__.py
│  │  │  │     │  ├─ glob.py
│  │  │  │     │  ├─ gui-32.exe
│  │  │  │     │  ├─ gui-64.exe
│  │  │  │     │  ├─ gui.exe
│  │  │  │     │  ├─ installer.py
│  │  │  │     │  ├─ launch.py
│  │  │  │     │  ├─ monkey.py
│  │  │  │     │  ├─ msvc.py
│  │  │  │     │  ├─ namespaces.py
│  │  │  │     │  ├─ package_index.py
│  │  │  │     │  ├─ py34compat.py
│  │  │  │     │  ├─ sandbox.py
│  │  │  │     │  ├─ script (dev).tmpl
│  │  │  │     │  ├─ script.tmpl
│  │  │  │     │  ├─ unicode_utils.py
│  │  │  │     │  ├─ version.py
│  │  │  │     │  ├─ wheel.py
│  │  │  │     │  ├─ windows_support.py
│  │  │  │     │  ├─ _deprecation_warning.py
│  │  │  │     │  ├─ _distutils
│  │  │  │     │  │  ├─ archive_util.py
│  │  │  │     │  │  ├─ bcppcompiler.py
│  │  │  │     │  │  ├─ ccompiler.py
│  │  │  │     │  │  ├─ cmd.py
│  │  │  │     │  │  ├─ command
│  │  │  │     │  │  │  ├─ bdist.py
│  │  │  │     │  │  │  ├─ bdist_dumb.py
│  │  │  │     │  │  │  ├─ bdist_msi.py
│  │  │  │     │  │  │  ├─ bdist_rpm.py
│  │  │  │     │  │  │  ├─ bdist_wininst.py
│  │  │  │     │  │  │  ├─ build.py
│  │  │  │     │  │  │  ├─ build_clib.py
│  │  │  │     │  │  │  ├─ build_ext.py
│  │  │  │     │  │  │  ├─ build_py.py
│  │  │  │     │  │  │  ├─ build_scripts.py
│  │  │  │     │  │  │  ├─ check.py
│  │  │  │     │  │  │  ├─ clean.py
│  │  │  │     │  │  │  ├─ config.py
│  │  │  │     │  │  │  ├─ install.py
│  │  │  │     │  │  │  ├─ install_data.py
│  │  │  │     │  │  │  ├─ install_egg_info.py
│  │  │  │     │  │  │  ├─ install_headers.py
│  │  │  │     │  │  │  ├─ install_lib.py
│  │  │  │     │  │  │  ├─ install_scripts.py
│  │  │  │     │  │  │  ├─ py37compat.py
│  │  │  │     │  │  │  ├─ register.py
│  │  │  │     │  │  │  ├─ sdist.py
│  │  │  │     │  │  │  ├─ upload.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ config.py
│  │  │  │     │  │  ├─ core.py
│  │  │  │     │  │  ├─ cygwinccompiler.py
│  │  │  │     │  │  ├─ debug.py
│  │  │  │     │  │  ├─ dep_util.py
│  │  │  │     │  │  ├─ dir_util.py
│  │  │  │     │  │  ├─ dist.py
│  │  │  │     │  │  ├─ errors.py
│  │  │  │     │  │  ├─ extension.py
│  │  │  │     │  │  ├─ fancy_getopt.py
│  │  │  │     │  │  ├─ filelist.py
│  │  │  │     │  │  ├─ file_util.py
│  │  │  │     │  │  ├─ log.py
│  │  │  │     │  │  ├─ msvc9compiler.py
│  │  │  │     │  │  ├─ msvccompiler.py
│  │  │  │     │  │  ├─ py35compat.py
│  │  │  │     │  │  ├─ py38compat.py
│  │  │  │     │  │  ├─ spawn.py
│  │  │  │     │  │  ├─ sysconfig.py
│  │  │  │     │  │  ├─ text_file.py
│  │  │  │     │  │  ├─ unixccompiler.py
│  │  │  │     │  │  ├─ util.py
│  │  │  │     │  │  ├─ version.py
│  │  │  │     │  │  ├─ versionpredicate.py
│  │  │  │     │  │  ├─ _msvccompiler.py
│  │  │  │     │  │  └─ __init__.py
│  │  │  │     │  ├─ _imp.py
│  │  │  │     │  ├─ _vendor
│  │  │  │     │  │  ├─ more_itertools
│  │  │  │     │  │  │  ├─ more.py
│  │  │  │     │  │  │  ├─ recipes.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ ordered_set.py
│  │  │  │     │  │  ├─ packaging
│  │  │  │     │  │  │  ├─ markers.py
│  │  │  │     │  │  │  ├─ requirements.py
│  │  │  │     │  │  │  ├─ specifiers.py
│  │  │  │     │  │  │  ├─ tags.py
│  │  │  │     │  │  │  ├─ utils.py
│  │  │  │     │  │  │  ├─ version.py
│  │  │  │     │  │  │  ├─ _compat.py
│  │  │  │     │  │  │  ├─ _structures.py
│  │  │  │     │  │  │  ├─ _typing.py
│  │  │  │     │  │  │  ├─ __about__.py
│  │  │  │     │  │  │  └─ __init__.py
│  │  │  │     │  │  ├─ pyparsing.py
│  │  │  │     │  │  └─ __init__.py
│  │  │  │     │  └─ __init__.py
│  │  │  │     ├─ setuptools-58.1.0.dist-info
│  │  │  │     │  ├─ entry_points.txt
│  │  │  │     │  ├─ INSTALLER
│  │  │  │     │  ├─ LICENSE
│  │  │  │     │  ├─ METADATA
│  │  │  │     │  ├─ RECORD
│  │  │  │     │  ├─ REQUESTED
│  │  │  │     │  ├─ top_level.txt
│  │  │  │     │  └─ WHEEL
│  │  │  │     └─ _distutils_hack
│  │  │  │        ├─ override.py
│  │  │  │        └─ __init__.py
│  │  │  ├─ pyvenv.cfg
│  │  │  └─ Scripts
│  │  │     ├─ activate
│  │  │     ├─ activate.bat
│  │  │     ├─ Activate.ps1
│  │  │     ├─ deactivate.bat
│  │  │     ├─ pip.exe
│  │  │     ├─ pip3.10.exe
│  │  │     ├─ pip3.exe
│  │  │     ├─ python.exe
│  │  │     └─ pythonw.exe
│  │  └─ sample.py
│  ├─ README.md
│  └─ requirements.txt
├─ module2
│  ├─ attendance_application
│  │  ├─ main.js
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  ├─ ADMIN BG.png
│  │  │  ├─ BG.png
│  │  │  ├─ ccs.png
│  │  │  ├─ CCSlogo.png
│  │  │  ├─ favicon.ico
│  │  │  ├─ index.html
│  │  │  ├─ LOGO.png
│  │  │  ├─ logo192.png
│  │  │  ├─ logo512.png
│  │  │  ├─ manifest.json
│  │  │  ├─ models
│  │  │  │  ├─ face_expression_model-shard1
│  │  │  │  ├─ face_expression_model-weights_manifest.json
│  │  │  │  ├─ face_landmark_68_model-shard1
│  │  │  │  ├─ face_landmark_68_model-weights_manifest.json
│  │  │  │  ├─ face_recognition_model-shard1
│  │  │  │  ├─ face_recognition_model-shard2
│  │  │  │  ├─ face_recognition_model-weights_manifest.json
│  │  │  │  ├─ tiny_face_detector_model-shard1
│  │  │  │  └─ tiny_face_detector_model-weights_manifest.json
│  │  │  ├─ Pasig_Logo.png
│  │  │  ├─ Pasig_Wordmark.png
│  │  │  └─ robots.txt
│  │  ├─ README.md
│  │  └─ src
│  │     ├─ ADMIN
│  │     │  ├─ AdminDashboard.js
│  │     │  ├─ ccs
│  │     │  │  ├─ archives.css
│  │     │  │  ├─ dashboard.css
│  │     │  │  ├─ employee.css
│  │     │  │  ├─ entryexit.css
│  │     │  │  ├─ event.css
│  │     │  │  └─ settings.css
│  │     │  ├─ Employeesarchives.js
│  │     │  ├─ Employeespage.js
│  │     │  ├─ Entryexitpage.js
│  │     │  ├─ Eventdetailspage.js
│  │     │  ├─ Eventsarchives.js
│  │     │  ├─ Eventspage.js
│  │     │  └─ Settingspage.js
│  │     ├─ api.js
│  │     ├─ App.css
│  │     ├─ App.js
│  │     ├─ components
│  │     │  ├─ InfoTooltip.css
│  │     │  ├─ InfoTooltip.js
│  │     │  └─ LiveClock.js
│  │     ├─ index.css
│  │     ├─ index.js
│  │     └─ SCAN
│  │        ├─ Adminlogin.js
│  │        ├─ LandingPage.css
│  │        └─ LandingPage.js
│  ├─ facial_attendance_api
│  │  ├─ config
│  │  │  ├─ database.php
│  │  │  └─ email_config.php
│  │  ├─ controllers
│  │  │  ├─ add_is_active_column.php
│  │  │  ├─ add_status_column.php
│  │  │  ├─ attendance.php
│  │  │  ├─ auth.php
│  │  │  ├─ dashboard_department.php
│  │  │  ├─ dashboard_stats.php
│  │  │  ├─ department.php
│  │  │  ├─ email.php
│  │  │  ├─ employee.php
│  │  │  ├─ employee_photos - Copy.php
│  │  │  ├─ employee_photos.php
│  │  │  ├─ employee_update.php
│  │  │  ├─ entry_exit.php
│  │  │  ├─ events.php
│  │  │  ├─ eventtype.php
│  │  │  ├─ event_attendance.php
│  │  │  ├─ location.php
│  │  │  ├─ make_hash.php
│  │  │  ├─ password_reset_request.php
│  │  │  ├─ position.php
│  │  │  ├─ reset_password.php
│  │  │  └─ send_qr_email.php
│  │  └─ vendor
│  │     └─ PHPMailer-master
│  │        ├─ COMMITMENT
│  │        ├─ composer.json
│  │        ├─ get_oauth_token.php
│  │        ├─ language
│  │        │  ├─ phpmailer.lang-af.php
│  │        │  ├─ phpmailer.lang-ar.php
│  │        │  ├─ phpmailer.lang-as.php
│  │        │  ├─ phpmailer.lang-az.php
│  │        │  ├─ phpmailer.lang-ba.php
│  │        │  ├─ phpmailer.lang-be.php
│  │        │  ├─ phpmailer.lang-bg.php
│  │        │  ├─ phpmailer.lang-bn.php
│  │        │  ├─ phpmailer.lang-ca.php
│  │        │  ├─ phpmailer.lang-cs.php
│  │        │  ├─ phpmailer.lang-da.php
│  │        │  ├─ phpmailer.lang-de.php
│  │        │  ├─ phpmailer.lang-el.php
│  │        │  ├─ phpmailer.lang-eo.php
│  │        │  ├─ phpmailer.lang-es.php
│  │        │  ├─ phpmailer.lang-et.php
│  │        │  ├─ phpmailer.lang-fa.php
│  │        │  ├─ phpmailer.lang-fi.php
│  │        │  ├─ phpmailer.lang-fo.php
│  │        │  ├─ phpmailer.lang-fr.php
│  │        │  ├─ phpmailer.lang-gl.php
│  │        │  ├─ phpmailer.lang-he.php
│  │        │  ├─ phpmailer.lang-hi.php
│  │        │  ├─ phpmailer.lang-hr.php
│  │        │  ├─ phpmailer.lang-hu.php
│  │        │  ├─ phpmailer.lang-hy.php
│  │        │  ├─ phpmailer.lang-id.php
│  │        │  ├─ phpmailer.lang-it.php
│  │        │  ├─ phpmailer.lang-ja.php
│  │        │  ├─ phpmailer.lang-ka.php
│  │        │  ├─ phpmailer.lang-ko.php
│  │        │  ├─ phpmailer.lang-ku.php
│  │        │  ├─ phpmailer.lang-lt.php
│  │        │  ├─ phpmailer.lang-lv.php
│  │        │  ├─ phpmailer.lang-mg.php
│  │        │  ├─ phpmailer.lang-mn.php
│  │        │  ├─ phpmailer.lang-ms.php
│  │        │  ├─ phpmailer.lang-nb.php
│  │        │  ├─ phpmailer.lang-nl.php
│  │        │  ├─ phpmailer.lang-pl.php
│  │        │  ├─ phpmailer.lang-pt.php
│  │        │  ├─ phpmailer.lang-pt_br.php
│  │        │  ├─ phpmailer.lang-ro.php
│  │        │  ├─ phpmailer.lang-ru.php
│  │        │  ├─ phpmailer.lang-si.php
│  │        │  ├─ phpmailer.lang-sk.php
│  │        │  ├─ phpmailer.lang-sl.php
│  │        │  ├─ phpmailer.lang-sr.php
│  │        │  ├─ phpmailer.lang-sr_latn.php
│  │        │  ├─ phpmailer.lang-sv.php
│  │        │  ├─ phpmailer.lang-tl.php
│  │        │  ├─ phpmailer.lang-tr.php
│  │        │  ├─ phpmailer.lang-uk.php
│  │        │  ├─ phpmailer.lang-ur.php
│  │        │  ├─ phpmailer.lang-vi.php
│  │        │  ├─ phpmailer.lang-zh.php
│  │        │  └─ phpmailer.lang-zh_cn.php
│  │        ├─ LICENSE
│  │        ├─ README.md
│  │        ├─ SECURITY.md
│  │        ├─ SMTPUTF8.md
│  │        ├─ src
│  │        │  ├─ DSNConfigurator.php
│  │        │  ├─ Exception.php
│  │        │  ├─ OAuth.php
│  │        │  ├─ OAuthTokenProvider.php
│  │        │  ├─ PHPMailer.php
│  │        │  ├─ POP3.php
│  │        │  └─ SMTP.php
│  │        └─ VERSION
│  ├─ Launcher.bat
│  ├─ module1
│  │  └─ python
│  │     ├─ myenv
│  │     │  └─ Lib
│  │     │     └─ site-packages
│  │     │        ├─ pip
│  │     │        │  ├─ _internal
│  │     │        │  │  ├─ cli
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ autocompletion.cpython-310.pyc
│  │     │        │  │  │     ├─ base_command.cpython-310.pyc
│  │     │        │  │  │     ├─ cmdoptions.cpython-310.pyc
│  │     │        │  │  │     ├─ command_context.cpython-310.pyc
│  │     │        │  │  │     ├─ main.cpython-310.pyc
│  │     │        │  │  │     ├─ main_parser.cpython-310.pyc
│  │     │        │  │  │     ├─ parser.cpython-310.pyc
│  │     │        │  │  │     ├─ progress_bars.cpython-310.pyc
│  │     │        │  │  │     ├─ req_command.cpython-310.pyc
│  │     │        │  │  │     ├─ spinners.cpython-310.pyc
│  │     │        │  │  │     ├─ status_codes.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ commands
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ cache.cpython-310.pyc
│  │     │        │  │  │     ├─ check.cpython-310.pyc
│  │     │        │  │  │     ├─ completion.cpython-310.pyc
│  │     │        │  │  │     ├─ configuration.cpython-310.pyc
│  │     │        │  │  │     ├─ debug.cpython-310.pyc
│  │     │        │  │  │     ├─ download.cpython-310.pyc
│  │     │        │  │  │     ├─ freeze.cpython-310.pyc
│  │     │        │  │  │     ├─ hash.cpython-310.pyc
│  │     │        │  │  │     ├─ help.cpython-310.pyc
│  │     │        │  │  │     ├─ index.cpython-310.pyc
│  │     │        │  │  │     ├─ install.cpython-310.pyc
│  │     │        │  │  │     ├─ list.cpython-310.pyc
│  │     │        │  │  │     ├─ search.cpython-310.pyc
│  │     │        │  │  │     ├─ show.cpython-310.pyc
│  │     │        │  │  │     ├─ uninstall.cpython-310.pyc
│  │     │        │  │  │     ├─ wheel.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ distributions
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ base.cpython-310.pyc
│  │     │        │  │  │     ├─ installed.cpython-310.pyc
│  │     │        │  │  │     ├─ sdist.cpython-310.pyc
│  │     │        │  │  │     ├─ wheel.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ index
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ collector.cpython-310.pyc
│  │     │        │  │  │     ├─ package_finder.cpython-310.pyc
│  │     │        │  │  │     ├─ sources.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ locations
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ base.cpython-310.pyc
│  │     │        │  │  │     ├─ _distutils.cpython-310.pyc
│  │     │        │  │  │     ├─ _sysconfig.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ metadata
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ base.cpython-310.pyc
│  │     │        │  │  │     ├─ pkg_resources.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ models
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ candidate.cpython-310.pyc
│  │     │        │  │  │     ├─ direct_url.cpython-310.pyc
│  │     │        │  │  │     ├─ format_control.cpython-310.pyc
│  │     │        │  │  │     ├─ index.cpython-310.pyc
│  │     │        │  │  │     ├─ link.cpython-310.pyc
│  │     │        │  │  │     ├─ scheme.cpython-310.pyc
│  │     │        │  │  │     ├─ search_scope.cpython-310.pyc
│  │     │        │  │  │     ├─ selection_prefs.cpython-310.pyc
│  │     │        │  │  │     ├─ target_python.cpython-310.pyc
│  │     │        │  │  │     ├─ wheel.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ network
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ auth.cpython-310.pyc
│  │     │        │  │  │     ├─ cache.cpython-310.pyc
│  │     │        │  │  │     ├─ download.cpython-310.pyc
│  │     │        │  │  │     ├─ lazy_wheel.cpython-310.pyc
│  │     │        │  │  │     ├─ session.cpython-310.pyc
│  │     │        │  │  │     ├─ utils.cpython-310.pyc
│  │     │        │  │  │     ├─ xmlrpc.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ operations
│  │     │        │  │  │  ├─ build
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ metadata.cpython-310.pyc
│  │     │        │  │  │  │     ├─ metadata_editable.cpython-310.pyc
│  │     │        │  │  │  │     ├─ metadata_legacy.cpython-310.pyc
│  │     │        │  │  │  │     ├─ wheel.cpython-310.pyc
│  │     │        │  │  │  │     ├─ wheel_editable.cpython-310.pyc
│  │     │        │  │  │  │     ├─ wheel_legacy.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ install
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ editable_legacy.cpython-310.pyc
│  │     │        │  │  │  │     ├─ legacy.cpython-310.pyc
│  │     │        │  │  │  │     ├─ wheel.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ check.cpython-310.pyc
│  │     │        │  │  │     ├─ freeze.cpython-310.pyc
│  │     │        │  │  │     ├─ prepare.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ req
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ constructors.cpython-310.pyc
│  │     │        │  │  │     ├─ req_file.cpython-310.pyc
│  │     │        │  │  │     ├─ req_install.cpython-310.pyc
│  │     │        │  │  │     ├─ req_set.cpython-310.pyc
│  │     │        │  │  │     ├─ req_tracker.cpython-310.pyc
│  │     │        │  │  │     ├─ req_uninstall.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ resolution
│  │     │        │  │  │  ├─ legacy
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ resolver.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ resolvelib
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ base.cpython-310.pyc
│  │     │        │  │  │  │     ├─ candidates.cpython-310.pyc
│  │     │        │  │  │  │     ├─ factory.cpython-310.pyc
│  │     │        │  │  │  │     ├─ found_candidates.cpython-310.pyc
│  │     │        │  │  │  │     ├─ provider.cpython-310.pyc
│  │     │        │  │  │  │     ├─ reporter.cpython-310.pyc
│  │     │        │  │  │  │     ├─ requirements.cpython-310.pyc
│  │     │        │  │  │  │     ├─ resolver.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ base.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ utils
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ appdirs.cpython-310.pyc
│  │     │        │  │  │     ├─ compat.cpython-310.pyc
│  │     │        │  │  │     ├─ compatibility_tags.cpython-310.pyc
│  │     │        │  │  │     ├─ datetime.cpython-310.pyc
│  │     │        │  │  │     ├─ deprecation.cpython-310.pyc
│  │     │        │  │  │     ├─ direct_url_helpers.cpython-310.pyc
│  │     │        │  │  │     ├─ distutils_args.cpython-310.pyc
│  │     │        │  │  │     ├─ egg_link.cpython-310.pyc
│  │     │        │  │  │     ├─ encoding.cpython-310.pyc
│  │     │        │  │  │     ├─ entrypoints.cpython-310.pyc
│  │     │        │  │  │     ├─ filesystem.cpython-310.pyc
│  │     │        │  │  │     ├─ filetypes.cpython-310.pyc
│  │     │        │  │  │     ├─ glibc.cpython-310.pyc
│  │     │        │  │  │     ├─ hashes.cpython-310.pyc
│  │     │        │  │  │     ├─ inject_securetransport.cpython-310.pyc
│  │     │        │  │  │     ├─ logging.cpython-310.pyc
│  │     │        │  │  │     ├─ misc.cpython-310.pyc
│  │     │        │  │  │     ├─ models.cpython-310.pyc
│  │     │        │  │  │     ├─ packaging.cpython-310.pyc
│  │     │        │  │  │     ├─ setuptools_build.cpython-310.pyc
│  │     │        │  │  │     ├─ subprocess.cpython-310.pyc
│  │     │        │  │  │     ├─ temp_dir.cpython-310.pyc
│  │     │        │  │  │     ├─ unpacking.cpython-310.pyc
│  │     │        │  │  │     ├─ urls.cpython-310.pyc
│  │     │        │  │  │     ├─ virtualenv.cpython-310.pyc
│  │     │        │  │  │     ├─ wheel.cpython-310.pyc
│  │     │        │  │  │     ├─ _log.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ vcs
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ bazaar.cpython-310.pyc
│  │     │        │  │  │     ├─ git.cpython-310.pyc
│  │     │        │  │  │     ├─ mercurial.cpython-310.pyc
│  │     │        │  │  │     ├─ subversion.cpython-310.pyc
│  │     │        │  │  │     ├─ versioncontrol.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  └─ __pycache__
│  │     │        │  │     ├─ build_env.cpython-310.pyc
│  │     │        │  │     ├─ cache.cpython-310.pyc
│  │     │        │  │     ├─ configuration.cpython-310.pyc
│  │     │        │  │     ├─ exceptions.cpython-310.pyc
│  │     │        │  │     ├─ main.cpython-310.pyc
│  │     │        │  │     ├─ pyproject.cpython-310.pyc
│  │     │        │  │     ├─ self_outdated_check.cpython-310.pyc
│  │     │        │  │     ├─ wheel_builder.cpython-310.pyc
│  │     │        │  │     └─ __init__.cpython-310.pyc
│  │     │        │  ├─ _vendor
│  │     │        │  │  ├─ cachecontrol
│  │     │        │  │  │  ├─ caches
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ file_cache.cpython-310.pyc
│  │     │        │  │  │  │     ├─ redis_cache.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ adapter.cpython-310.pyc
│  │     │        │  │  │     ├─ cache.cpython-310.pyc
│  │     │        │  │  │     ├─ compat.cpython-310.pyc
│  │     │        │  │  │     ├─ controller.cpython-310.pyc
│  │     │        │  │  │     ├─ filewrapper.cpython-310.pyc
│  │     │        │  │  │     ├─ heuristics.cpython-310.pyc
│  │     │        │  │  │     ├─ serialize.cpython-310.pyc
│  │     │        │  │  │     ├─ wrapper.cpython-310.pyc
│  │     │        │  │  │     ├─ _cmd.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ certifi
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ core.cpython-310.pyc
│  │     │        │  │  │     ├─ __init__.cpython-310.pyc
│  │     │        │  │  │     └─ __main__.cpython-310.pyc
│  │     │        │  │  ├─ chardet
│  │     │        │  │  │  ├─ cli
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ chardetect.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ metadata
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ languages.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ big5freq.cpython-310.pyc
│  │     │        │  │  │     ├─ big5prober.cpython-310.pyc
│  │     │        │  │  │     ├─ chardistribution.cpython-310.pyc
│  │     │        │  │  │     ├─ charsetgroupprober.cpython-310.pyc
│  │     │        │  │  │     ├─ charsetprober.cpython-310.pyc
│  │     │        │  │  │     ├─ codingstatemachine.cpython-310.pyc
│  │     │        │  │  │     ├─ compat.cpython-310.pyc
│  │     │        │  │  │     ├─ cp949prober.cpython-310.pyc
│  │     │        │  │  │     ├─ enums.cpython-310.pyc
│  │     │        │  │  │     ├─ escprober.cpython-310.pyc
│  │     │        │  │  │     ├─ escsm.cpython-310.pyc
│  │     │        │  │  │     ├─ eucjpprober.cpython-310.pyc
│  │     │        │  │  │     ├─ euckrfreq.cpython-310.pyc
│  │     │        │  │  │     ├─ euckrprober.cpython-310.pyc
│  │     │        │  │  │     ├─ euctwfreq.cpython-310.pyc
│  │     │        │  │  │     ├─ euctwprober.cpython-310.pyc
│  │     │        │  │  │     ├─ gb2312freq.cpython-310.pyc
│  │     │        │  │  │     ├─ gb2312prober.cpython-310.pyc
│  │     │        │  │  │     ├─ hebrewprober.cpython-310.pyc
│  │     │        │  │  │     ├─ jisfreq.cpython-310.pyc
│  │     │        │  │  │     ├─ jpcntx.cpython-310.pyc
│  │     │        │  │  │     ├─ langbulgarianmodel.cpython-310.pyc
│  │     │        │  │  │     ├─ langgreekmodel.cpython-310.pyc
│  │     │        │  │  │     ├─ langhebrewmodel.cpython-310.pyc
│  │     │        │  │  │     ├─ langhungarianmodel.cpython-310.pyc
│  │     │        │  │  │     ├─ langrussianmodel.cpython-310.pyc
│  │     │        │  │  │     ├─ langthaimodel.cpython-310.pyc
│  │     │        │  │  │     ├─ langturkishmodel.cpython-310.pyc
│  │     │        │  │  │     ├─ latin1prober.cpython-310.pyc
│  │     │        │  │  │     ├─ mbcharsetprober.cpython-310.pyc
│  │     │        │  │  │     ├─ mbcsgroupprober.cpython-310.pyc
│  │     │        │  │  │     ├─ mbcssm.cpython-310.pyc
│  │     │        │  │  │     ├─ sbcharsetprober.cpython-310.pyc
│  │     │        │  │  │     ├─ sbcsgroupprober.cpython-310.pyc
│  │     │        │  │  │     ├─ sjisprober.cpython-310.pyc
│  │     │        │  │  │     ├─ universaldetector.cpython-310.pyc
│  │     │        │  │  │     ├─ utf8prober.cpython-310.pyc
│  │     │        │  │  │     ├─ version.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ colorama
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ ansi.cpython-310.pyc
│  │     │        │  │  │     ├─ ansitowin32.cpython-310.pyc
│  │     │        │  │  │     ├─ initialise.cpython-310.pyc
│  │     │        │  │  │     ├─ win32.cpython-310.pyc
│  │     │        │  │  │     ├─ winterm.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ distlib
│  │     │        │  │  │  ├─ _backport
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ misc.cpython-310.pyc
│  │     │        │  │  │  │     ├─ shutil.cpython-310.pyc
│  │     │        │  │  │  │     ├─ sysconfig.cpython-310.pyc
│  │     │        │  │  │  │     ├─ tarfile.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ compat.cpython-310.pyc
│  │     │        │  │  │     ├─ database.cpython-310.pyc
│  │     │        │  │  │     ├─ index.cpython-310.pyc
│  │     │        │  │  │     ├─ locators.cpython-310.pyc
│  │     │        │  │  │     ├─ manifest.cpython-310.pyc
│  │     │        │  │  │     ├─ markers.cpython-310.pyc
│  │     │        │  │  │     ├─ metadata.cpython-310.pyc
│  │     │        │  │  │     ├─ resources.cpython-310.pyc
│  │     │        │  │  │     ├─ scripts.cpython-310.pyc
│  │     │        │  │  │     ├─ util.cpython-310.pyc
│  │     │        │  │  │     ├─ version.cpython-310.pyc
│  │     │        │  │  │     ├─ wheel.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ html5lib
│  │     │        │  │  │  ├─ filters
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ alphabeticalattributes.cpython-310.pyc
│  │     │        │  │  │  │     ├─ base.cpython-310.pyc
│  │     │        │  │  │  │     ├─ inject_meta_charset.cpython-310.pyc
│  │     │        │  │  │  │     ├─ lint.cpython-310.pyc
│  │     │        │  │  │  │     ├─ optionaltags.cpython-310.pyc
│  │     │        │  │  │  │     ├─ sanitizer.cpython-310.pyc
│  │     │        │  │  │  │     ├─ whitespace.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ treeadapters
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ genshi.cpython-310.pyc
│  │     │        │  │  │  │     ├─ sax.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ treebuilders
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ base.cpython-310.pyc
│  │     │        │  │  │  │     ├─ dom.cpython-310.pyc
│  │     │        │  │  │  │     ├─ etree.cpython-310.pyc
│  │     │        │  │  │  │     ├─ etree_lxml.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ treewalkers
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ base.cpython-310.pyc
│  │     │        │  │  │  │     ├─ dom.cpython-310.pyc
│  │     │        │  │  │  │     ├─ etree.cpython-310.pyc
│  │     │        │  │  │  │     ├─ etree_lxml.cpython-310.pyc
│  │     │        │  │  │  │     ├─ genshi.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ _trie
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ py.cpython-310.pyc
│  │     │        │  │  │  │     ├─ _base.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ constants.cpython-310.pyc
│  │     │        │  │  │     ├─ html5parser.cpython-310.pyc
│  │     │        │  │  │     ├─ serializer.cpython-310.pyc
│  │     │        │  │  │     ├─ _ihatexml.cpython-310.pyc
│  │     │        │  │  │     ├─ _inputstream.cpython-310.pyc
│  │     │        │  │  │     ├─ _tokenizer.cpython-310.pyc
│  │     │        │  │  │     ├─ _utils.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ idna
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ codec.cpython-310.pyc
│  │     │        │  │  │     ├─ compat.cpython-310.pyc
│  │     │        │  │  │     ├─ core.cpython-310.pyc
│  │     │        │  │  │     ├─ idnadata.cpython-310.pyc
│  │     │        │  │  │     ├─ intranges.cpython-310.pyc
│  │     │        │  │  │     ├─ package_data.cpython-310.pyc
│  │     │        │  │  │     ├─ uts46data.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ msgpack
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ exceptions.cpython-310.pyc
│  │     │        │  │  │     ├─ ext.cpython-310.pyc
│  │     │        │  │  │     ├─ fallback.cpython-310.pyc
│  │     │        │  │  │     ├─ _version.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ packaging
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ markers.cpython-310.pyc
│  │     │        │  │  │     ├─ requirements.cpython-310.pyc
│  │     │        │  │  │     ├─ specifiers.cpython-310.pyc
│  │     │        │  │  │     ├─ tags.cpython-310.pyc
│  │     │        │  │  │     ├─ utils.cpython-310.pyc
│  │     │        │  │  │     ├─ version.cpython-310.pyc
│  │     │        │  │  │     ├─ _manylinux.cpython-310.pyc
│  │     │        │  │  │     ├─ _musllinux.cpython-310.pyc
│  │     │        │  │  │     ├─ _structures.cpython-310.pyc
│  │     │        │  │  │     ├─ __about__.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ pep517
│  │     │        │  │  │  ├─ in_process
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ _in_process.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ build.cpython-310.pyc
│  │     │        │  │  │     ├─ check.cpython-310.pyc
│  │     │        │  │  │     ├─ colorlog.cpython-310.pyc
│  │     │        │  │  │     ├─ compat.cpython-310.pyc
│  │     │        │  │  │     ├─ dirtools.cpython-310.pyc
│  │     │        │  │  │     ├─ envbuild.cpython-310.pyc
│  │     │        │  │  │     ├─ meta.cpython-310.pyc
│  │     │        │  │  │     ├─ wrappers.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ pkg_resources
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ py31compat.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ platformdirs
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ android.cpython-310.pyc
│  │     │        │  │  │     ├─ api.cpython-310.pyc
│  │     │        │  │  │     ├─ macos.cpython-310.pyc
│  │     │        │  │  │     ├─ unix.cpython-310.pyc
│  │     │        │  │  │     ├─ version.cpython-310.pyc
│  │     │        │  │  │     ├─ windows.cpython-310.pyc
│  │     │        │  │  │     ├─ __init__.cpython-310.pyc
│  │     │        │  │  │     └─ __main__.cpython-310.pyc
│  │     │        │  │  ├─ progress
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ bar.cpython-310.pyc
│  │     │        │  │  │     ├─ colors.cpython-310.pyc
│  │     │        │  │  │     ├─ counter.cpython-310.pyc
│  │     │        │  │  │     ├─ spinner.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ pygments
│  │     │        │  │  │  ├─ filters
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ formatters
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ bbcode.cpython-310.pyc
│  │     │        │  │  │  │     ├─ groff.cpython-310.pyc
│  │     │        │  │  │  │     ├─ html.cpython-310.pyc
│  │     │        │  │  │  │     ├─ img.cpython-310.pyc
│  │     │        │  │  │  │     ├─ irc.cpython-310.pyc
│  │     │        │  │  │  │     ├─ latex.cpython-310.pyc
│  │     │        │  │  │  │     ├─ other.cpython-310.pyc
│  │     │        │  │  │  │     ├─ pangomarkup.cpython-310.pyc
│  │     │        │  │  │  │     ├─ rtf.cpython-310.pyc
│  │     │        │  │  │  │     ├─ svg.cpython-310.pyc
│  │     │        │  │  │  │     ├─ terminal.cpython-310.pyc
│  │     │        │  │  │  │     ├─ terminal256.cpython-310.pyc
│  │     │        │  │  │  │     ├─ _mapping.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ lexers
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ python.cpython-310.pyc
│  │     │        │  │  │  │     ├─ _mapping.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ styles
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ cmdline.cpython-310.pyc
│  │     │        │  │  │     ├─ console.cpython-310.pyc
│  │     │        │  │  │     ├─ filter.cpython-310.pyc
│  │     │        │  │  │     ├─ formatter.cpython-310.pyc
│  │     │        │  │  │     ├─ lexer.cpython-310.pyc
│  │     │        │  │  │     ├─ modeline.cpython-310.pyc
│  │     │        │  │  │     ├─ plugin.cpython-310.pyc
│  │     │        │  │  │     ├─ regexopt.cpython-310.pyc
│  │     │        │  │  │     ├─ scanner.cpython-310.pyc
│  │     │        │  │  │     ├─ sphinxext.cpython-310.pyc
│  │     │        │  │  │     ├─ style.cpython-310.pyc
│  │     │        │  │  │     ├─ token.cpython-310.pyc
│  │     │        │  │  │     ├─ unistring.cpython-310.pyc
│  │     │        │  │  │     ├─ util.cpython-310.pyc
│  │     │        │  │  │     ├─ __init__.cpython-310.pyc
│  │     │        │  │  │     └─ __main__.cpython-310.pyc
│  │     │        │  │  ├─ pyparsing
│  │     │        │  │  │  ├─ diagram
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ actions.cpython-310.pyc
│  │     │        │  │  │     ├─ common.cpython-310.pyc
│  │     │        │  │  │     ├─ core.cpython-310.pyc
│  │     │        │  │  │     ├─ exceptions.cpython-310.pyc
│  │     │        │  │  │     ├─ helpers.cpython-310.pyc
│  │     │        │  │  │     ├─ results.cpython-310.pyc
│  │     │        │  │  │     ├─ testing.cpython-310.pyc
│  │     │        │  │  │     ├─ unicode.cpython-310.pyc
│  │     │        │  │  │     ├─ util.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ requests
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ adapters.cpython-310.pyc
│  │     │        │  │  │     ├─ api.cpython-310.pyc
│  │     │        │  │  │     ├─ auth.cpython-310.pyc
│  │     │        │  │  │     ├─ certs.cpython-310.pyc
│  │     │        │  │  │     ├─ compat.cpython-310.pyc
│  │     │        │  │  │     ├─ cookies.cpython-310.pyc
│  │     │        │  │  │     ├─ exceptions.cpython-310.pyc
│  │     │        │  │  │     ├─ help.cpython-310.pyc
│  │     │        │  │  │     ├─ hooks.cpython-310.pyc
│  │     │        │  │  │     ├─ models.cpython-310.pyc
│  │     │        │  │  │     ├─ packages.cpython-310.pyc
│  │     │        │  │  │     ├─ sessions.cpython-310.pyc
│  │     │        │  │  │     ├─ status_codes.cpython-310.pyc
│  │     │        │  │  │     ├─ structures.cpython-310.pyc
│  │     │        │  │  │     ├─ utils.cpython-310.pyc
│  │     │        │  │  │     ├─ _internal_utils.cpython-310.pyc
│  │     │        │  │  │     ├─ __init__.cpython-310.pyc
│  │     │        │  │  │     └─ __version__.cpython-310.pyc
│  │     │        │  │  ├─ resolvelib
│  │     │        │  │  │  ├─ compat
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ collections_abc.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ providers.cpython-310.pyc
│  │     │        │  │  │     ├─ reporters.cpython-310.pyc
│  │     │        │  │  │     ├─ resolvers.cpython-310.pyc
│  │     │        │  │  │     ├─ structs.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ rich
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ abc.cpython-310.pyc
│  │     │        │  │  │     ├─ align.cpython-310.pyc
│  │     │        │  │  │     ├─ ansi.cpython-310.pyc
│  │     │        │  │  │     ├─ bar.cpython-310.pyc
│  │     │        │  │  │     ├─ box.cpython-310.pyc
│  │     │        │  │  │     ├─ cells.cpython-310.pyc
│  │     │        │  │  │     ├─ color.cpython-310.pyc
│  │     │        │  │  │     ├─ color_triplet.cpython-310.pyc
│  │     │        │  │  │     ├─ columns.cpython-310.pyc
│  │     │        │  │  │     ├─ console.cpython-310.pyc
│  │     │        │  │  │     ├─ constrain.cpython-310.pyc
│  │     │        │  │  │     ├─ containers.cpython-310.pyc
│  │     │        │  │  │     ├─ control.cpython-310.pyc
│  │     │        │  │  │     ├─ default_styles.cpython-310.pyc
│  │     │        │  │  │     ├─ diagnose.cpython-310.pyc
│  │     │        │  │  │     ├─ emoji.cpython-310.pyc
│  │     │        │  │  │     ├─ errors.cpython-310.pyc
│  │     │        │  │  │     ├─ filesize.cpython-310.pyc
│  │     │        │  │  │     ├─ file_proxy.cpython-310.pyc
│  │     │        │  │  │     ├─ highlighter.cpython-310.pyc
│  │     │        │  │  │     ├─ json.cpython-310.pyc
│  │     │        │  │  │     ├─ jupyter.cpython-310.pyc
│  │     │        │  │  │     ├─ layout.cpython-310.pyc
│  │     │        │  │  │     ├─ live.cpython-310.pyc
│  │     │        │  │  │     ├─ live_render.cpython-310.pyc
│  │     │        │  │  │     ├─ logging.cpython-310.pyc
│  │     │        │  │  │     ├─ markup.cpython-310.pyc
│  │     │        │  │  │     ├─ measure.cpython-310.pyc
│  │     │        │  │  │     ├─ padding.cpython-310.pyc
│  │     │        │  │  │     ├─ pager.cpython-310.pyc
│  │     │        │  │  │     ├─ palette.cpython-310.pyc
│  │     │        │  │  │     ├─ panel.cpython-310.pyc
│  │     │        │  │  │     ├─ pretty.cpython-310.pyc
│  │     │        │  │  │     ├─ progress.cpython-310.pyc
│  │     │        │  │  │     ├─ progress_bar.cpython-310.pyc
│  │     │        │  │  │     ├─ prompt.cpython-310.pyc
│  │     │        │  │  │     ├─ protocol.cpython-310.pyc
│  │     │        │  │  │     ├─ region.cpython-310.pyc
│  │     │        │  │  │     ├─ repr.cpython-310.pyc
│  │     │        │  │  │     ├─ rule.cpython-310.pyc
│  │     │        │  │  │     ├─ scope.cpython-310.pyc
│  │     │        │  │  │     ├─ screen.cpython-310.pyc
│  │     │        │  │  │     ├─ segment.cpython-310.pyc
│  │     │        │  │  │     ├─ spinner.cpython-310.pyc
│  │     │        │  │  │     ├─ status.cpython-310.pyc
│  │     │        │  │  │     ├─ style.cpython-310.pyc
│  │     │        │  │  │     ├─ styled.cpython-310.pyc
│  │     │        │  │  │     ├─ syntax.cpython-310.pyc
│  │     │        │  │  │     ├─ table.cpython-310.pyc
│  │     │        │  │  │     ├─ tabulate.cpython-310.pyc
│  │     │        │  │  │     ├─ terminal_theme.cpython-310.pyc
│  │     │        │  │  │     ├─ text.cpython-310.pyc
│  │     │        │  │  │     ├─ theme.cpython-310.pyc
│  │     │        │  │  │     ├─ themes.cpython-310.pyc
│  │     │        │  │  │     ├─ traceback.cpython-310.pyc
│  │     │        │  │  │     ├─ tree.cpython-310.pyc
│  │     │        │  │  │     ├─ _cell_widths.cpython-310.pyc
│  │     │        │  │  │     ├─ _emoji_codes.cpython-310.pyc
│  │     │        │  │  │     ├─ _emoji_replace.cpython-310.pyc
│  │     │        │  │  │     ├─ _extension.cpython-310.pyc
│  │     │        │  │  │     ├─ _inspect.cpython-310.pyc
│  │     │        │  │  │     ├─ _log_render.cpython-310.pyc
│  │     │        │  │  │     ├─ _loop.cpython-310.pyc
│  │     │        │  │  │     ├─ _lru_cache.cpython-310.pyc
│  │     │        │  │  │     ├─ _palettes.cpython-310.pyc
│  │     │        │  │  │     ├─ _pick.cpython-310.pyc
│  │     │        │  │  │     ├─ _ratio.cpython-310.pyc
│  │     │        │  │  │     ├─ _spinners.cpython-310.pyc
│  │     │        │  │  │     ├─ _stack.cpython-310.pyc
│  │     │        │  │  │     ├─ _timer.cpython-310.pyc
│  │     │        │  │  │     ├─ _windows.cpython-310.pyc
│  │     │        │  │  │     ├─ _wrap.cpython-310.pyc
│  │     │        │  │  │     ├─ __init__.cpython-310.pyc
│  │     │        │  │  │     └─ __main__.cpython-310.pyc
│  │     │        │  │  ├─ tenacity
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ after.cpython-310.pyc
│  │     │        │  │  │     ├─ before.cpython-310.pyc
│  │     │        │  │  │     ├─ before_sleep.cpython-310.pyc
│  │     │        │  │  │     ├─ nap.cpython-310.pyc
│  │     │        │  │  │     ├─ retry.cpython-310.pyc
│  │     │        │  │  │     ├─ stop.cpython-310.pyc
│  │     │        │  │  │     ├─ tornadoweb.cpython-310.pyc
│  │     │        │  │  │     ├─ wait.cpython-310.pyc
│  │     │        │  │  │     ├─ _asyncio.cpython-310.pyc
│  │     │        │  │  │     ├─ _utils.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ tomli
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ _parser.cpython-310.pyc
│  │     │        │  │  │     ├─ _re.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ urllib3
│  │     │        │  │  │  ├─ contrib
│  │     │        │  │  │  │  ├─ _securetransport
│  │     │        │  │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │  │     ├─ bindings.cpython-310.pyc
│  │     │        │  │  │  │  │     ├─ low_level.cpython-310.pyc
│  │     │        │  │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ appengine.cpython-310.pyc
│  │     │        │  │  │  │     ├─ ntlmpool.cpython-310.pyc
│  │     │        │  │  │  │     ├─ pyopenssl.cpython-310.pyc
│  │     │        │  │  │  │     ├─ securetransport.cpython-310.pyc
│  │     │        │  │  │  │     ├─ socks.cpython-310.pyc
│  │     │        │  │  │  │     ├─ _appengine_environ.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ packages
│  │     │        │  │  │  │  ├─ backports
│  │     │        │  │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │  │     ├─ makefile.cpython-310.pyc
│  │     │        │  │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ six.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  ├─ util
│  │     │        │  │  │  │  └─ __pycache__
│  │     │        │  │  │  │     ├─ connection.cpython-310.pyc
│  │     │        │  │  │  │     ├─ proxy.cpython-310.pyc
│  │     │        │  │  │  │     ├─ queue.cpython-310.pyc
│  │     │        │  │  │  │     ├─ request.cpython-310.pyc
│  │     │        │  │  │  │     ├─ response.cpython-310.pyc
│  │     │        │  │  │  │     ├─ retry.cpython-310.pyc
│  │     │        │  │  │  │     ├─ ssltransport.cpython-310.pyc
│  │     │        │  │  │  │     ├─ ssl_.cpython-310.pyc
│  │     │        │  │  │  │     ├─ ssl_match_hostname.cpython-310.pyc
│  │     │        │  │  │  │     ├─ timeout.cpython-310.pyc
│  │     │        │  │  │  │     ├─ url.cpython-310.pyc
│  │     │        │  │  │  │     ├─ wait.cpython-310.pyc
│  │     │        │  │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ connection.cpython-310.pyc
│  │     │        │  │  │     ├─ connectionpool.cpython-310.pyc
│  │     │        │  │  │     ├─ exceptions.cpython-310.pyc
│  │     │        │  │  │     ├─ fields.cpython-310.pyc
│  │     │        │  │  │     ├─ filepost.cpython-310.pyc
│  │     │        │  │  │     ├─ poolmanager.cpython-310.pyc
│  │     │        │  │  │     ├─ request.cpython-310.pyc
│  │     │        │  │  │     ├─ response.cpython-310.pyc
│  │     │        │  │  │     ├─ _collections.cpython-310.pyc
│  │     │        │  │  │     ├─ _version.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ webencodings
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ labels.cpython-310.pyc
│  │     │        │  │  │     ├─ mklabels.cpython-310.pyc
│  │     │        │  │  │     ├─ tests.cpython-310.pyc
│  │     │        │  │  │     ├─ x_user_defined.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  └─ __pycache__
│  │     │        │  │     ├─ distro.cpython-310.pyc
│  │     │        │  │     ├─ six.cpython-310.pyc
│  │     │        │  │     ├─ typing_extensions.cpython-310.pyc
│  │     │        │  │     └─ __init__.cpython-310.pyc
│  │     │        │  └─ __pycache__
│  │     │        │     ├─ __init__.cpython-310.pyc
│  │     │        │     └─ __main__.cpython-310.pyc
│  │     │        ├─ pkg_resources
│  │     │        │  ├─ extern
│  │     │        │  │  └─ __pycache__
│  │     │        │  │     └─ __init__.cpython-310.pyc
│  │     │        │  ├─ tests
│  │     │        │  │  └─ data
│  │     │        │  │     └─ my-test-package-source
│  │     │        │  │        └─ __pycache__
│  │     │        │  │           └─ setup.cpython-310.pyc
│  │     │        │  ├─ _vendor
│  │     │        │  │  ├─ packaging
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ markers.cpython-310.pyc
│  │     │        │  │  │     ├─ requirements.cpython-310.pyc
│  │     │        │  │  │     ├─ specifiers.cpython-310.pyc
│  │     │        │  │  │     ├─ tags.cpython-310.pyc
│  │     │        │  │  │     ├─ utils.cpython-310.pyc
│  │     │        │  │  │     ├─ version.cpython-310.pyc
│  │     │        │  │  │     ├─ _compat.cpython-310.pyc
│  │     │        │  │  │     ├─ _structures.cpython-310.pyc
│  │     │        │  │  │     ├─ _typing.cpython-310.pyc
│  │     │        │  │  │     ├─ __about__.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  └─ __pycache__
│  │     │        │  │     ├─ appdirs.cpython-310.pyc
│  │     │        │  │     ├─ pyparsing.cpython-310.pyc
│  │     │        │  │     └─ __init__.cpython-310.pyc
│  │     │        │  └─ __pycache__
│  │     │        │     └─ __init__.cpython-310.pyc
│  │     │        ├─ setuptools
│  │     │        │  ├─ command
│  │     │        │  │  └─ __pycache__
│  │     │        │  │     ├─ alias.cpython-310.pyc
│  │     │        │  │     ├─ bdist_egg.cpython-310.pyc
│  │     │        │  │     ├─ bdist_rpm.cpython-310.pyc
│  │     │        │  │     ├─ build_clib.cpython-310.pyc
│  │     │        │  │     ├─ build_ext.cpython-310.pyc
│  │     │        │  │     ├─ build_py.cpython-310.pyc
│  │     │        │  │     ├─ develop.cpython-310.pyc
│  │     │        │  │     ├─ dist_info.cpython-310.pyc
│  │     │        │  │     ├─ easy_install.cpython-310.pyc
│  │     │        │  │     ├─ egg_info.cpython-310.pyc
│  │     │        │  │     ├─ install.cpython-310.pyc
│  │     │        │  │     ├─ install_egg_info.cpython-310.pyc
│  │     │        │  │     ├─ install_lib.cpython-310.pyc
│  │     │        │  │     ├─ install_scripts.cpython-310.pyc
│  │     │        │  │     ├─ py36compat.cpython-310.pyc
│  │     │        │  │     ├─ register.cpython-310.pyc
│  │     │        │  │     ├─ rotate.cpython-310.pyc
│  │     │        │  │     ├─ saveopts.cpython-310.pyc
│  │     │        │  │     ├─ sdist.cpython-310.pyc
│  │     │        │  │     ├─ setopt.cpython-310.pyc
│  │     │        │  │     ├─ test.cpython-310.pyc
│  │     │        │  │     ├─ upload.cpython-310.pyc
│  │     │        │  │     ├─ upload_docs.cpython-310.pyc
│  │     │        │  │     └─ __init__.cpython-310.pyc
│  │     │        │  ├─ extern
│  │     │        │  │  └─ __pycache__
│  │     │        │  │     └─ __init__.cpython-310.pyc
│  │     │        │  ├─ _distutils
│  │     │        │  │  ├─ command
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ bdist.cpython-310.pyc
│  │     │        │  │  │     ├─ bdist_dumb.cpython-310.pyc
│  │     │        │  │  │     ├─ bdist_msi.cpython-310.pyc
│  │     │        │  │  │     ├─ bdist_rpm.cpython-310.pyc
│  │     │        │  │  │     ├─ bdist_wininst.cpython-310.pyc
│  │     │        │  │  │     ├─ build.cpython-310.pyc
│  │     │        │  │  │     ├─ build_clib.cpython-310.pyc
│  │     │        │  │  │     ├─ build_ext.cpython-310.pyc
│  │     │        │  │  │     ├─ build_py.cpython-310.pyc
│  │     │        │  │  │     ├─ build_scripts.cpython-310.pyc
│  │     │        │  │  │     ├─ check.cpython-310.pyc
│  │     │        │  │  │     ├─ clean.cpython-310.pyc
│  │     │        │  │  │     ├─ config.cpython-310.pyc
│  │     │        │  │  │     ├─ install.cpython-310.pyc
│  │     │        │  │  │     ├─ install_data.cpython-310.pyc
│  │     │        │  │  │     ├─ install_egg_info.cpython-310.pyc
│  │     │        │  │  │     ├─ install_headers.cpython-310.pyc
│  │     │        │  │  │     ├─ install_lib.cpython-310.pyc
│  │     │        │  │  │     ├─ install_scripts.cpython-310.pyc
│  │     │        │  │  │     ├─ py37compat.cpython-310.pyc
│  │     │        │  │  │     ├─ register.cpython-310.pyc
│  │     │        │  │  │     ├─ sdist.cpython-310.pyc
│  │     │        │  │  │     ├─ upload.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  └─ __pycache__
│  │     │        │  │     ├─ archive_util.cpython-310.pyc
│  │     │        │  │     ├─ bcppcompiler.cpython-310.pyc
│  │     │        │  │     ├─ ccompiler.cpython-310.pyc
│  │     │        │  │     ├─ cmd.cpython-310.pyc
│  │     │        │  │     ├─ config.cpython-310.pyc
│  │     │        │  │     ├─ core.cpython-310.pyc
│  │     │        │  │     ├─ cygwinccompiler.cpython-310.pyc
│  │     │        │  │     ├─ debug.cpython-310.pyc
│  │     │        │  │     ├─ dep_util.cpython-310.pyc
│  │     │        │  │     ├─ dir_util.cpython-310.pyc
│  │     │        │  │     ├─ dist.cpython-310.pyc
│  │     │        │  │     ├─ errors.cpython-310.pyc
│  │     │        │  │     ├─ extension.cpython-310.pyc
│  │     │        │  │     ├─ fancy_getopt.cpython-310.pyc
│  │     │        │  │     ├─ filelist.cpython-310.pyc
│  │     │        │  │     ├─ file_util.cpython-310.pyc
│  │     │        │  │     ├─ log.cpython-310.pyc
│  │     │        │  │     ├─ msvc9compiler.cpython-310.pyc
│  │     │        │  │     ├─ msvccompiler.cpython-310.pyc
│  │     │        │  │     ├─ py35compat.cpython-310.pyc
│  │     │        │  │     ├─ py38compat.cpython-310.pyc
│  │     │        │  │     ├─ spawn.cpython-310.pyc
│  │     │        │  │     ├─ sysconfig.cpython-310.pyc
│  │     │        │  │     ├─ text_file.cpython-310.pyc
│  │     │        │  │     ├─ unixccompiler.cpython-310.pyc
│  │     │        │  │     ├─ util.cpython-310.pyc
│  │     │        │  │     ├─ version.cpython-310.pyc
│  │     │        │  │     ├─ versionpredicate.cpython-310.pyc
│  │     │        │  │     ├─ _msvccompiler.cpython-310.pyc
│  │     │        │  │     └─ __init__.cpython-310.pyc
│  │     │        │  ├─ _vendor
│  │     │        │  │  ├─ more_itertools
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ more.cpython-310.pyc
│  │     │        │  │  │     ├─ recipes.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  ├─ packaging
│  │     │        │  │  │  └─ __pycache__
│  │     │        │  │  │     ├─ markers.cpython-310.pyc
│  │     │        │  │  │     ├─ requirements.cpython-310.pyc
│  │     │        │  │  │     ├─ specifiers.cpython-310.pyc
│  │     │        │  │  │     ├─ tags.cpython-310.pyc
│  │     │        │  │  │     ├─ utils.cpython-310.pyc
│  │     │        │  │  │     ├─ version.cpython-310.pyc
│  │     │        │  │  │     ├─ _compat.cpython-310.pyc
│  │     │        │  │  │     ├─ _structures.cpython-310.pyc
│  │     │        │  │  │     ├─ _typing.cpython-310.pyc
│  │     │        │  │  │     ├─ __about__.cpython-310.pyc
│  │     │        │  │  │     └─ __init__.cpython-310.pyc
│  │     │        │  │  └─ __pycache__
│  │     │        │  │     ├─ ordered_set.cpython-310.pyc
│  │     │        │  │     ├─ pyparsing.cpython-310.pyc
│  │     │        │  │     └─ __init__.cpython-310.pyc
│  │     │        │  └─ __pycache__
│  │     │        │     ├─ archive_util.cpython-310.pyc
│  │     │        │     ├─ build_meta.cpython-310.pyc
│  │     │        │     ├─ config.cpython-310.pyc
│  │     │        │     ├─ depends.cpython-310.pyc
│  │     │        │     ├─ dep_util.cpython-310.pyc
│  │     │        │     ├─ dist.cpython-310.pyc
│  │     │        │     ├─ errors.cpython-310.pyc
│  │     │        │     ├─ extension.cpython-310.pyc
│  │     │        │     ├─ glob.cpython-310.pyc
│  │     │        │     ├─ installer.cpython-310.pyc
│  │     │        │     ├─ launch.cpython-310.pyc
│  │     │        │     ├─ monkey.cpython-310.pyc
│  │     │        │     ├─ msvc.cpython-310.pyc
│  │     │        │     ├─ namespaces.cpython-310.pyc
│  │     │        │     ├─ package_index.cpython-310.pyc
│  │     │        │     ├─ py34compat.cpython-310.pyc
│  │     │        │     ├─ sandbox.cpython-310.pyc
│  │     │        │     ├─ unicode_utils.cpython-310.pyc
│  │     │        │     ├─ version.cpython-310.pyc
│  │     │        │     ├─ wheel.cpython-310.pyc
│  │     │        │     ├─ windows_support.cpython-310.pyc
│  │     │        │     ├─ _deprecation_warning.cpython-310.pyc
│  │     │        │     ├─ _imp.cpython-310.pyc
│  │     │        │     └─ __init__.cpython-310.pyc
│  │     │        └─ _distutils_hack
│  │     │           └─ __pycache__
│  │     │              ├─ override.cpython-310.pyc
│  │     │              └─ __init__.cpython-310.pyc
│  │     └─ venv
│  │        ├─ Lib
│  │        │  └─ site-packages
│  │        │     ├─ annotated_doc
│  │        │     │  ├─ main.py
│  │        │     │  ├─ py.typed
│  │        │     │  └─ __init__.py
│  │        │     ├─ annotated_doc-0.0.4.dist-info
│  │        │     │  ├─ entry_points.txt
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ annotated_types
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ test_cases.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ annotated_types-0.7.0.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ anyio
│  │        │     │  ├─ abc
│  │        │     │  │  ├─ _eventloop.py
│  │        │     │  │  ├─ _resources.py
│  │        │     │  │  ├─ _sockets.py
│  │        │     │  │  ├─ _streams.py
│  │        │     │  │  ├─ _subprocesses.py
│  │        │     │  │  ├─ _tasks.py
│  │        │     │  │  ├─ _testing.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ from_thread.py
│  │        │     │  ├─ functools.py
│  │        │     │  ├─ lowlevel.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ pytest_plugin.py
│  │        │     │  ├─ streams
│  │        │     │  │  ├─ buffered.py
│  │        │     │  │  ├─ file.py
│  │        │     │  │  ├─ memory.py
│  │        │     │  │  ├─ stapled.py
│  │        │     │  │  ├─ text.py
│  │        │     │  │  ├─ tls.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ to_interpreter.py
│  │        │     │  ├─ to_process.py
│  │        │     │  ├─ to_thread.py
│  │        │     │  ├─ _backends
│  │        │     │  │  ├─ _asyncio.py
│  │        │     │  │  ├─ _trio.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ _core
│  │        │     │  │  ├─ _asyncio_selector_thread.py
│  │        │     │  │  ├─ _contextmanagers.py
│  │        │     │  │  ├─ _eventloop.py
│  │        │     │  │  ├─ _exceptions.py
│  │        │     │  │  ├─ _fileio.py
│  │        │     │  │  ├─ _resources.py
│  │        │     │  │  ├─ _signals.py
│  │        │     │  │  ├─ _sockets.py
│  │        │     │  │  ├─ _streams.py
│  │        │     │  │  ├─ _subprocesses.py
│  │        │     │  │  ├─ _synchronization.py
│  │        │     │  │  ├─ _tasks.py
│  │        │     │  │  ├─ _tempfile.py
│  │        │     │  │  ├─ _testing.py
│  │        │     │  │  ├─ _typedattr.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ anyio-4.12.1.dist-info
│  │        │     │  ├─ entry_points.txt
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  ├─ top_level.txt
│  │        │     │  └─ WHEEL
│  │        │     ├─ click
│  │        │     │  ├─ core.py
│  │        │     │  ├─ decorators.py
│  │        │     │  ├─ exceptions.py
│  │        │     │  ├─ formatting.py
│  │        │     │  ├─ globals.py
│  │        │     │  ├─ parser.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ shell_completion.py
│  │        │     │  ├─ termui.py
│  │        │     │  ├─ testing.py
│  │        │     │  ├─ types.py
│  │        │     │  ├─ utils.py
│  │        │     │  ├─ _compat.py
│  │        │     │  ├─ _termui_impl.py
│  │        │     │  ├─ _textwrap.py
│  │        │     │  ├─ _utils.py
│  │        │     │  ├─ _winconsole.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ click-8.3.1.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE.txt
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ colorama
│  │        │     │  ├─ ansi.py
│  │        │     │  ├─ ansitowin32.py
│  │        │     │  ├─ initialise.py
│  │        │     │  ├─ tests
│  │        │     │  │  ├─ ansitowin32_test.py
│  │        │     │  │  ├─ ansi_test.py
│  │        │     │  │  ├─ initialise_test.py
│  │        │     │  │  ├─ isatty_test.py
│  │        │     │  │  ├─ utils.py
│  │        │     │  │  ├─ winterm_test.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ win32.py
│  │        │     │  ├─ winterm.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ colorama-0.4.6.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE.txt
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ fastapi
│  │        │     │  ├─ .agents
│  │        │     │  │  └─ skills
│  │        │     │  │     └─ fastapi
│  │        │     │  │        └─ SKILL.md
│  │        │     │  ├─ applications.py
│  │        │     │  ├─ background.py
│  │        │     │  ├─ cli.py
│  │        │     │  ├─ concurrency.py
│  │        │     │  ├─ datastructures.py
│  │        │     │  ├─ dependencies
│  │        │     │  │  ├─ models.py
│  │        │     │  │  ├─ utils.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ encoders.py
│  │        │     │  ├─ exceptions.py
│  │        │     │  ├─ exception_handlers.py
│  │        │     │  ├─ logger.py
│  │        │     │  ├─ middleware
│  │        │     │  │  ├─ asyncexitstack.py
│  │        │     │  │  ├─ cors.py
│  │        │     │  │  ├─ gzip.py
│  │        │     │  │  ├─ httpsredirect.py
│  │        │     │  │  ├─ trustedhost.py
│  │        │     │  │  ├─ wsgi.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ openapi
│  │        │     │  │  ├─ constants.py
│  │        │     │  │  ├─ docs.py
│  │        │     │  │  ├─ models.py
│  │        │     │  │  ├─ utils.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ params.py
│  │        │     │  ├─ param_functions.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ requests.py
│  │        │     │  ├─ responses.py
│  │        │     │  ├─ routing.py
│  │        │     │  ├─ security
│  │        │     │  │  ├─ api_key.py
│  │        │     │  │  ├─ base.py
│  │        │     │  │  ├─ http.py
│  │        │     │  │  ├─ oauth2.py
│  │        │     │  │  ├─ open_id_connect_url.py
│  │        │     │  │  ├─ utils.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ staticfiles.py
│  │        │     │  ├─ templating.py
│  │        │     │  ├─ testclient.py
│  │        │     │  ├─ types.py
│  │        │     │  ├─ utils.py
│  │        │     │  ├─ websockets.py
│  │        │     │  ├─ _compat
│  │        │     │  │  ├─ shared.py
│  │        │     │  │  ├─ v2.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ __init__.py
│  │        │     │  └─ __main__.py
│  │        │     ├─ h11
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ _abnf.py
│  │        │     │  ├─ _connection.py
│  │        │     │  ├─ _events.py
│  │        │     │  ├─ _headers.py
│  │        │     │  ├─ _readers.py
│  │        │     │  ├─ _receivebuffer.py
│  │        │     │  ├─ _state.py
│  │        │     │  ├─ _util.py
│  │        │     │  ├─ _version.py
│  │        │     │  ├─ _writers.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ h11-0.16.0.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE.txt
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  ├─ top_level.txt
│  │        │     │  └─ WHEEL
│  │        │     ├─ idna
│  │        │     │  ├─ codec.py
│  │        │     │  ├─ compat.py
│  │        │     │  ├─ core.py
│  │        │     │  ├─ idnadata.py
│  │        │     │  ├─ intranges.py
│  │        │     │  ├─ package_data.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ uts46data.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ idna-3.11.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE.md
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ multipart
│  │        │     │  ├─ decoders.py
│  │        │     │  ├─ exceptions.py
│  │        │     │  ├─ multipart.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ numpy
│  │        │     │  ├─ char
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ conftest.py
│  │        │     │  ├─ core
│  │        │     │  │  ├─ arrayprint.py
│  │        │     │  │  ├─ defchararray.py
│  │        │     │  │  ├─ einsumfunc.py
│  │        │     │  │  ├─ fromnumeric.py
│  │        │     │  │  ├─ function_base.py
│  │        │     │  │  ├─ getlimits.py
│  │        │     │  │  ├─ multiarray.py
│  │        │     │  │  ├─ numeric.py
│  │        │     │  │  ├─ numerictypes.py
│  │        │     │  │  ├─ overrides.py
│  │        │     │  │  ├─ overrides.pyi
│  │        │     │  │  ├─ records.py
│  │        │     │  │  ├─ shape_base.py
│  │        │     │  │  ├─ umath.py
│  │        │     │  │  ├─ _dtype.py
│  │        │     │  │  ├─ _dtype.pyi
│  │        │     │  │  ├─ _dtype_ctypes.py
│  │        │     │  │  ├─ _dtype_ctypes.pyi
│  │        │     │  │  ├─ _internal.py
│  │        │     │  │  ├─ _multiarray_umath.py
│  │        │     │  │  ├─ _utils.py
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ ctypeslib
│  │        │     │  │  ├─ _ctypeslib.py
│  │        │     │  │  ├─ _ctypeslib.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ doc
│  │        │     │  │  └─ ufuncs.py
│  │        │     │  ├─ dtypes.py
│  │        │     │  ├─ dtypes.pyi
│  │        │     │  ├─ exceptions.py
│  │        │     │  ├─ exceptions.pyi
│  │        │     │  ├─ f2py
│  │        │     │  │  ├─ auxfuncs.py
│  │        │     │  │  ├─ auxfuncs.pyi
│  │        │     │  │  ├─ capi_maps.py
│  │        │     │  │  ├─ capi_maps.pyi
│  │        │     │  │  ├─ cb_rules.py
│  │        │     │  │  ├─ cb_rules.pyi
│  │        │     │  │  ├─ cfuncs.py
│  │        │     │  │  ├─ cfuncs.pyi
│  │        │     │  │  ├─ common_rules.py
│  │        │     │  │  ├─ common_rules.pyi
│  │        │     │  │  ├─ crackfortran.py
│  │        │     │  │  ├─ crackfortran.pyi
│  │        │     │  │  ├─ diagnose.py
│  │        │     │  │  ├─ diagnose.pyi
│  │        │     │  │  ├─ f2py2e.py
│  │        │     │  │  ├─ f2py2e.pyi
│  │        │     │  │  ├─ f90mod_rules.py
│  │        │     │  │  ├─ f90mod_rules.pyi
│  │        │     │  │  ├─ func2subr.py
│  │        │     │  │  ├─ func2subr.pyi
│  │        │     │  │  ├─ rules.py
│  │        │     │  │  ├─ rules.pyi
│  │        │     │  │  ├─ setup.cfg
│  │        │     │  │  ├─ src
│  │        │     │  │  │  ├─ fortranobject.c
│  │        │     │  │  │  └─ fortranobject.h
│  │        │     │  │  ├─ symbolic.py
│  │        │     │  │  ├─ symbolic.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ src
│  │        │     │  │  │  │  ├─ abstract_interface
│  │        │     │  │  │  │  │  ├─ foo.f90
│  │        │     │  │  │  │  │  └─ gh18403_mod.f90
│  │        │     │  │  │  │  ├─ array_from_pyobj
│  │        │     │  │  │  │  │  └─ wrapmodule.c
│  │        │     │  │  │  │  ├─ assumed_shape
│  │        │     │  │  │  │  │  ├─ .f2py_f2cmap
│  │        │     │  │  │  │  │  ├─ foo_free.f90
│  │        │     │  │  │  │  │  ├─ foo_mod.f90
│  │        │     │  │  │  │  │  ├─ foo_use.f90
│  │        │     │  │  │  │  │  └─ precision.f90
│  │        │     │  │  │  │  ├─ block_docstring
│  │        │     │  │  │  │  │  └─ foo.f
│  │        │     │  │  │  │  ├─ callback
│  │        │     │  │  │  │  │  ├─ foo.f
│  │        │     │  │  │  │  │  ├─ gh17797.f90
│  │        │     │  │  │  │  │  ├─ gh18335.f90
│  │        │     │  │  │  │  │  ├─ gh25211.f
│  │        │     │  │  │  │  │  ├─ gh25211.pyf
│  │        │     │  │  │  │  │  └─ gh26681.f90
│  │        │     │  │  │  │  ├─ cli
│  │        │     │  │  │  │  │  ├─ gh_22819.pyf
│  │        │     │  │  │  │  │  ├─ hi77.f
│  │        │     │  │  │  │  │  └─ hiworld.f90
│  │        │     │  │  │  │  ├─ common
│  │        │     │  │  │  │  │  ├─ block.f
│  │        │     │  │  │  │  │  └─ gh19161.f90
│  │        │     │  │  │  │  ├─ crackfortran
│  │        │     │  │  │  │  │  ├─ accesstype.f90
│  │        │     │  │  │  │  │  ├─ common_with_division.f
│  │        │     │  │  │  │  │  ├─ data_common.f
│  │        │     │  │  │  │  │  ├─ data_multiplier.f
│  │        │     │  │  │  │  │  ├─ data_stmts.f90
│  │        │     │  │  │  │  │  ├─ data_with_comments.f
│  │        │     │  │  │  │  │  ├─ foo_deps.f90
│  │        │     │  │  │  │  │  ├─ gh15035.f
│  │        │     │  │  │  │  │  ├─ gh17859.f
│  │        │     │  │  │  │  │  ├─ gh22648.pyf
│  │        │     │  │  │  │  │  ├─ gh23533.f
│  │        │     │  │  │  │  │  ├─ gh23598.f90
│  │        │     │  │  │  │  │  ├─ gh23598Warn.f90
│  │        │     │  │  │  │  │  ├─ gh23879.f90
│  │        │     │  │  │  │  │  ├─ gh27697.f90
│  │        │     │  │  │  │  │  ├─ gh2848.f90
│  │        │     │  │  │  │  │  ├─ operators.f90
│  │        │     │  │  │  │  │  ├─ privatemod.f90
│  │        │     │  │  │  │  │  ├─ publicmod.f90
│  │        │     │  │  │  │  │  ├─ pubprivmod.f90
│  │        │     │  │  │  │  │  └─ unicode_comment.f90
│  │        │     │  │  │  │  ├─ f2cmap
│  │        │     │  │  │  │  │  ├─ .f2py_f2cmap
│  │        │     │  │  │  │  │  └─ isoFortranEnvMap.f90
│  │        │     │  │  │  │  ├─ isocintrin
│  │        │     │  │  │  │  │  └─ isoCtests.f90
│  │        │     │  │  │  │  ├─ kind
│  │        │     │  │  │  │  │  └─ foo.f90
│  │        │     │  │  │  │  ├─ mixed
│  │        │     │  │  │  │  │  ├─ foo.f
│  │        │     │  │  │  │  │  ├─ foo_fixed.f90
│  │        │     │  │  │  │  │  └─ foo_free.f90
│  │        │     │  │  │  │  ├─ modules
│  │        │     │  │  │  │  │  ├─ gh25337
│  │        │     │  │  │  │  │  │  ├─ data.f90
│  │        │     │  │  │  │  │  │  └─ use_data.f90
│  │        │     │  │  │  │  │  ├─ gh26920
│  │        │     │  │  │  │  │  │  ├─ two_mods_with_no_public_entities.f90
│  │        │     │  │  │  │  │  │  └─ two_mods_with_one_public_routine.f90
│  │        │     │  │  │  │  │  ├─ module_data_docstring.f90
│  │        │     │  │  │  │  │  └─ use_modules.f90
│  │        │     │  │  │  │  ├─ negative_bounds
│  │        │     │  │  │  │  │  └─ issue_20853.f90
│  │        │     │  │  │  │  ├─ parameter
│  │        │     │  │  │  │  │  ├─ constant_array.f90
│  │        │     │  │  │  │  │  ├─ constant_both.f90
│  │        │     │  │  │  │  │  ├─ constant_compound.f90
│  │        │     │  │  │  │  │  ├─ constant_integer.f90
│  │        │     │  │  │  │  │  ├─ constant_non_compound.f90
│  │        │     │  │  │  │  │  └─ constant_real.f90
│  │        │     │  │  │  │  ├─ quoted_character
│  │        │     │  │  │  │  │  └─ foo.f
│  │        │     │  │  │  │  ├─ regression
│  │        │     │  │  │  │  │  ├─ AB.inc
│  │        │     │  │  │  │  │  ├─ assignOnlyModule.f90
│  │        │     │  │  │  │  │  ├─ datonly.f90
│  │        │     │  │  │  │  │  ├─ f77comments.f
│  │        │     │  │  │  │  │  ├─ f77fixedform.f95
│  │        │     │  │  │  │  │  ├─ f90continuation.f90
│  │        │     │  │  │  │  │  ├─ incfile.f90
│  │        │     │  │  │  │  │  ├─ inout.f90
│  │        │     │  │  │  │  │  ├─ lower_f2py_fortran.f90
│  │        │     │  │  │  │  │  └─ mod_derived_types.f90
│  │        │     │  │  │  │  ├─ return_character
│  │        │     │  │  │  │  │  ├─ foo77.f
│  │        │     │  │  │  │  │  └─ foo90.f90
│  │        │     │  │  │  │  ├─ return_complex
│  │        │     │  │  │  │  │  ├─ foo77.f
│  │        │     │  │  │  │  │  └─ foo90.f90
│  │        │     │  │  │  │  ├─ return_integer
│  │        │     │  │  │  │  │  ├─ foo77.f
│  │        │     │  │  │  │  │  └─ foo90.f90
│  │        │     │  │  │  │  ├─ return_logical
│  │        │     │  │  │  │  │  ├─ foo77.f
│  │        │     │  │  │  │  │  └─ foo90.f90
│  │        │     │  │  │  │  ├─ return_real
│  │        │     │  │  │  │  │  ├─ foo77.f
│  │        │     │  │  │  │  │  └─ foo90.f90
│  │        │     │  │  │  │  ├─ routines
│  │        │     │  │  │  │  │  ├─ funcfortranname.f
│  │        │     │  │  │  │  │  ├─ funcfortranname.pyf
│  │        │     │  │  │  │  │  ├─ subrout.f
│  │        │     │  │  │  │  │  └─ subrout.pyf
│  │        │     │  │  │  │  ├─ size
│  │        │     │  │  │  │  │  └─ foo.f90
│  │        │     │  │  │  │  ├─ string
│  │        │     │  │  │  │  │  ├─ char.f90
│  │        │     │  │  │  │  │  ├─ fixed_string.f90
│  │        │     │  │  │  │  │  ├─ gh24008.f
│  │        │     │  │  │  │  │  ├─ gh24662.f90
│  │        │     │  │  │  │  │  ├─ gh25286.f90
│  │        │     │  │  │  │  │  ├─ gh25286.pyf
│  │        │     │  │  │  │  │  ├─ gh25286_bc.pyf
│  │        │     │  │  │  │  │  ├─ scalar_string.f90
│  │        │     │  │  │  │  │  └─ string.f
│  │        │     │  │  │  │  └─ value_attrspec
│  │        │     │  │  │  │     └─ gh21665.f90
│  │        │     │  │  │  ├─ test_abstract_interface.py
│  │        │     │  │  │  ├─ test_array_from_pyobj.py
│  │        │     │  │  │  ├─ test_assumed_shape.py
│  │        │     │  │  │  ├─ test_block_docstring.py
│  │        │     │  │  │  ├─ test_callback.py
│  │        │     │  │  │  ├─ test_character.py
│  │        │     │  │  │  ├─ test_common.py
│  │        │     │  │  │  ├─ test_crackfortran.py
│  │        │     │  │  │  ├─ test_data.py
│  │        │     │  │  │  ├─ test_docs.py
│  │        │     │  │  │  ├─ test_f2cmap.py
│  │        │     │  │  │  ├─ test_f2py2e.py
│  │        │     │  │  │  ├─ test_isoc.py
│  │        │     │  │  │  ├─ test_kind.py
│  │        │     │  │  │  ├─ test_mixed.py
│  │        │     │  │  │  ├─ test_modules.py
│  │        │     │  │  │  ├─ test_parameter.py
│  │        │     │  │  │  ├─ test_pyf_src.py
│  │        │     │  │  │  ├─ test_quoted_character.py
│  │        │     │  │  │  ├─ test_regression.py
│  │        │     │  │  │  ├─ test_return_character.py
│  │        │     │  │  │  ├─ test_return_complex.py
│  │        │     │  │  │  ├─ test_return_integer.py
│  │        │     │  │  │  ├─ test_return_logical.py
│  │        │     │  │  │  ├─ test_return_real.py
│  │        │     │  │  │  ├─ test_routines.py
│  │        │     │  │  │  ├─ test_semicolon_split.py
│  │        │     │  │  │  ├─ test_size.py
│  │        │     │  │  │  ├─ test_string.py
│  │        │     │  │  │  ├─ test_symbolic.py
│  │        │     │  │  │  ├─ test_value_attrspec.py
│  │        │     │  │  │  ├─ util.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ use_rules.py
│  │        │     │  │  ├─ use_rules.pyi
│  │        │     │  │  ├─ _backends
│  │        │     │  │  │  ├─ meson.build.template
│  │        │     │  │  │  ├─ _backend.py
│  │        │     │  │  │  ├─ _backend.pyi
│  │        │     │  │  │  ├─ _distutils.py
│  │        │     │  │  │  ├─ _distutils.pyi
│  │        │     │  │  │  ├─ _meson.py
│  │        │     │  │  │  ├─ _meson.pyi
│  │        │     │  │  │  ├─ __init__.py
│  │        │     │  │  │  └─ __init__.pyi
│  │        │     │  │  ├─ _isocbind.py
│  │        │     │  │  ├─ _isocbind.pyi
│  │        │     │  │  ├─ _src_pyf.py
│  │        │     │  │  ├─ _src_pyf.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  ├─ __init__.pyi
│  │        │     │  │  ├─ __main__.py
│  │        │     │  │  ├─ __version__.py
│  │        │     │  │  └─ __version__.pyi
│  │        │     │  ├─ fft
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ test_helper.py
│  │        │     │  │  │  ├─ test_pocketfft.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ _helper.py
│  │        │     │  │  ├─ _helper.pyi
│  │        │     │  │  ├─ _pocketfft.py
│  │        │     │  │  ├─ _pocketfft.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ lib
│  │        │     │  │  ├─ array_utils.py
│  │        │     │  │  ├─ array_utils.pyi
│  │        │     │  │  ├─ format.py
│  │        │     │  │  ├─ format.pyi
│  │        │     │  │  ├─ introspect.py
│  │        │     │  │  ├─ introspect.pyi
│  │        │     │  │  ├─ mixins.py
│  │        │     │  │  ├─ mixins.pyi
│  │        │     │  │  ├─ npyio.py
│  │        │     │  │  ├─ npyio.pyi
│  │        │     │  │  ├─ recfunctions.py
│  │        │     │  │  ├─ recfunctions.pyi
│  │        │     │  │  ├─ scimath.py
│  │        │     │  │  ├─ scimath.pyi
│  │        │     │  │  ├─ stride_tricks.py
│  │        │     │  │  ├─ stride_tricks.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ data
│  │        │     │  │  │  │  ├─ py2-np0-objarr.npy
│  │        │     │  │  │  │  ├─ py2-objarr.npy
│  │        │     │  │  │  │  ├─ py2-objarr.npz
│  │        │     │  │  │  │  ├─ py3-objarr.npy
│  │        │     │  │  │  │  ├─ py3-objarr.npz
│  │        │     │  │  │  │  ├─ python3.npy
│  │        │     │  │  │  │  └─ win64python2.npy
│  │        │     │  │  │  ├─ test_arraypad.py
│  │        │     │  │  │  ├─ test_arraysetops.py
│  │        │     │  │  │  ├─ test_arrayterator.py
│  │        │     │  │  │  ├─ test_array_utils.py
│  │        │     │  │  │  ├─ test_format.py
│  │        │     │  │  │  ├─ test_function_base.py
│  │        │     │  │  │  ├─ test_histograms.py
│  │        │     │  │  │  ├─ test_index_tricks.py
│  │        │     │  │  │  ├─ test_io.py
│  │        │     │  │  │  ├─ test_loadtxt.py
│  │        │     │  │  │  ├─ test_mixins.py
│  │        │     │  │  │  ├─ test_nanfunctions.py
│  │        │     │  │  │  ├─ test_packbits.py
│  │        │     │  │  │  ├─ test_polynomial.py
│  │        │     │  │  │  ├─ test_recfunctions.py
│  │        │     │  │  │  ├─ test_regression.py
│  │        │     │  │  │  ├─ test_shape_base.py
│  │        │     │  │  │  ├─ test_stride_tricks.py
│  │        │     │  │  │  ├─ test_twodim_base.py
│  │        │     │  │  │  ├─ test_type_check.py
│  │        │     │  │  │  ├─ test_ufunclike.py
│  │        │     │  │  │  ├─ test_utils.py
│  │        │     │  │  │  ├─ test__datasource.py
│  │        │     │  │  │  ├─ test__iotools.py
│  │        │     │  │  │  ├─ test__version.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ user_array.py
│  │        │     │  │  ├─ user_array.pyi
│  │        │     │  │  ├─ _arraypad_impl.py
│  │        │     │  │  ├─ _arraypad_impl.pyi
│  │        │     │  │  ├─ _arraysetops_impl.py
│  │        │     │  │  ├─ _arraysetops_impl.pyi
│  │        │     │  │  ├─ _arrayterator_impl.py
│  │        │     │  │  ├─ _arrayterator_impl.pyi
│  │        │     │  │  ├─ _array_utils_impl.py
│  │        │     │  │  ├─ _array_utils_impl.pyi
│  │        │     │  │  ├─ _datasource.py
│  │        │     │  │  ├─ _datasource.pyi
│  │        │     │  │  ├─ _format_impl.py
│  │        │     │  │  ├─ _format_impl.pyi
│  │        │     │  │  ├─ _function_base_impl.py
│  │        │     │  │  ├─ _function_base_impl.pyi
│  │        │     │  │  ├─ _histograms_impl.py
│  │        │     │  │  ├─ _histograms_impl.pyi
│  │        │     │  │  ├─ _index_tricks_impl.py
│  │        │     │  │  ├─ _index_tricks_impl.pyi
│  │        │     │  │  ├─ _iotools.py
│  │        │     │  │  ├─ _iotools.pyi
│  │        │     │  │  ├─ _nanfunctions_impl.py
│  │        │     │  │  ├─ _nanfunctions_impl.pyi
│  │        │     │  │  ├─ _npyio_impl.py
│  │        │     │  │  ├─ _npyio_impl.pyi
│  │        │     │  │  ├─ _polynomial_impl.py
│  │        │     │  │  ├─ _polynomial_impl.pyi
│  │        │     │  │  ├─ _scimath_impl.py
│  │        │     │  │  ├─ _scimath_impl.pyi
│  │        │     │  │  ├─ _shape_base_impl.py
│  │        │     │  │  ├─ _shape_base_impl.pyi
│  │        │     │  │  ├─ _stride_tricks_impl.py
│  │        │     │  │  ├─ _stride_tricks_impl.pyi
│  │        │     │  │  ├─ _twodim_base_impl.py
│  │        │     │  │  ├─ _twodim_base_impl.pyi
│  │        │     │  │  ├─ _type_check_impl.py
│  │        │     │  │  ├─ _type_check_impl.pyi
│  │        │     │  │  ├─ _ufunclike_impl.py
│  │        │     │  │  ├─ _ufunclike_impl.pyi
│  │        │     │  │  ├─ _user_array_impl.py
│  │        │     │  │  ├─ _user_array_impl.pyi
│  │        │     │  │  ├─ _utils_impl.py
│  │        │     │  │  ├─ _utils_impl.pyi
│  │        │     │  │  ├─ _version.py
│  │        │     │  │  ├─ _version.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ linalg
│  │        │     │  │  ├─ lapack_lite.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ test_deprecations.py
│  │        │     │  │  │  ├─ test_linalg.py
│  │        │     │  │  │  ├─ test_regression.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ _linalg.py
│  │        │     │  │  ├─ _linalg.pyi
│  │        │     │  │  ├─ _umath_linalg.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ ma
│  │        │     │  │  ├─ API_CHANGES.txt
│  │        │     │  │  ├─ core.py
│  │        │     │  │  ├─ core.pyi
│  │        │     │  │  ├─ extras.py
│  │        │     │  │  ├─ extras.pyi
│  │        │     │  │  ├─ LICENSE
│  │        │     │  │  ├─ mrecords.py
│  │        │     │  │  ├─ mrecords.pyi
│  │        │     │  │  ├─ README.rst
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ test_arrayobject.py
│  │        │     │  │  │  ├─ test_core.py
│  │        │     │  │  │  ├─ test_deprecations.py
│  │        │     │  │  │  ├─ test_extras.py
│  │        │     │  │  │  ├─ test_mrecords.py
│  │        │     │  │  │  ├─ test_old_ma.py
│  │        │     │  │  │  ├─ test_regression.py
│  │        │     │  │  │  ├─ test_subclassing.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ testutils.py
│  │        │     │  │  ├─ testutils.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ matlib.py
│  │        │     │  ├─ matlib.pyi
│  │        │     │  ├─ matrixlib
│  │        │     │  │  ├─ defmatrix.py
│  │        │     │  │  ├─ defmatrix.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ test_defmatrix.py
│  │        │     │  │  │  ├─ test_interaction.py
│  │        │     │  │  │  ├─ test_masked_matrix.py
│  │        │     │  │  │  ├─ test_matrix_linalg.py
│  │        │     │  │  │  ├─ test_multiarray.py
│  │        │     │  │  │  ├─ test_numeric.py
│  │        │     │  │  │  ├─ test_regression.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ polynomial
│  │        │     │  │  ├─ chebyshev.py
│  │        │     │  │  ├─ chebyshev.pyi
│  │        │     │  │  ├─ hermite.py
│  │        │     │  │  ├─ hermite.pyi
│  │        │     │  │  ├─ hermite_e.py
│  │        │     │  │  ├─ hermite_e.pyi
│  │        │     │  │  ├─ laguerre.py
│  │        │     │  │  ├─ laguerre.pyi
│  │        │     │  │  ├─ legendre.py
│  │        │     │  │  ├─ legendre.pyi
│  │        │     │  │  ├─ polynomial.py
│  │        │     │  │  ├─ polynomial.pyi
│  │        │     │  │  ├─ polyutils.py
│  │        │     │  │  ├─ polyutils.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ test_chebyshev.py
│  │        │     │  │  │  ├─ test_classes.py
│  │        │     │  │  │  ├─ test_hermite.py
│  │        │     │  │  │  ├─ test_hermite_e.py
│  │        │     │  │  │  ├─ test_laguerre.py
│  │        │     │  │  │  ├─ test_legendre.py
│  │        │     │  │  │  ├─ test_polynomial.py
│  │        │     │  │  │  ├─ test_polyutils.py
│  │        │     │  │  │  ├─ test_printing.py
│  │        │     │  │  │  ├─ test_symbol.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ _polybase.py
│  │        │     │  │  ├─ _polybase.pyi
│  │        │     │  │  ├─ _polytypes.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ random
│  │        │     │  │  ├─ bit_generator.pxd
│  │        │     │  │  ├─ bit_generator.pyi
│  │        │     │  │  ├─ c_distributions.pxd
│  │        │     │  │  ├─ lib
│  │        │     │  │  │  └─ npyrandom.lib
│  │        │     │  │  ├─ LICENSE.md
│  │        │     │  │  ├─ mtrand.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ data
│  │        │     │  │  │  │  ├─ generator_pcg64_np121.pkl.gz
│  │        │     │  │  │  │  ├─ generator_pcg64_np126.pkl.gz
│  │        │     │  │  │  │  ├─ mt19937-testset-1.csv
│  │        │     │  │  │  │  ├─ mt19937-testset-2.csv
│  │        │     │  │  │  │  ├─ pcg64-testset-1.csv
│  │        │     │  │  │  │  ├─ pcg64-testset-2.csv
│  │        │     │  │  │  │  ├─ pcg64dxsm-testset-1.csv
│  │        │     │  │  │  │  ├─ pcg64dxsm-testset-2.csv
│  │        │     │  │  │  │  ├─ philox-testset-1.csv
│  │        │     │  │  │  │  ├─ philox-testset-2.csv
│  │        │     │  │  │  │  ├─ sfc64-testset-1.csv
│  │        │     │  │  │  │  ├─ sfc64-testset-2.csv
│  │        │     │  │  │  │  ├─ sfc64_np126.pkl.gz
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ test_direct.py
│  │        │     │  │  │  ├─ test_extending.py
│  │        │     │  │  │  ├─ test_generator_mt19937.py
│  │        │     │  │  │  ├─ test_generator_mt19937_regressions.py
│  │        │     │  │  │  ├─ test_random.py
│  │        │     │  │  │  ├─ test_randomstate.py
│  │        │     │  │  │  ├─ test_randomstate_regression.py
│  │        │     │  │  │  ├─ test_regression.py
│  │        │     │  │  │  ├─ test_seed_sequence.py
│  │        │     │  │  │  ├─ test_smoke.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ _bounded_integers.pxd
│  │        │     │  │  ├─ _bounded_integers.pyi
│  │        │     │  │  ├─ _common.pxd
│  │        │     │  │  ├─ _common.pyi
│  │        │     │  │  ├─ _examples
│  │        │     │  │  │  ├─ cffi
│  │        │     │  │  │  │  ├─ extending.py
│  │        │     │  │  │  │  └─ parse.py
│  │        │     │  │  │  ├─ cython
│  │        │     │  │  │  │  ├─ extending.pyx
│  │        │     │  │  │  │  ├─ extending_distributions.pyx
│  │        │     │  │  │  │  └─ meson.build
│  │        │     │  │  │  └─ numba
│  │        │     │  │  │     ├─ extending.py
│  │        │     │  │  │     └─ extending_distributions.py
│  │        │     │  │  ├─ _generator.pyi
│  │        │     │  │  ├─ _mt19937.pyi
│  │        │     │  │  ├─ _pcg64.pyi
│  │        │     │  │  ├─ _philox.pyi
│  │        │     │  │  ├─ _pickle.py
│  │        │     │  │  ├─ _pickle.pyi
│  │        │     │  │  ├─ _sfc64.pyi
│  │        │     │  │  ├─ __init__.pxd
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ rec
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ strings
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ testing
│  │        │     │  │  ├─ overrides.py
│  │        │     │  │  ├─ overrides.pyi
│  │        │     │  │  ├─ print_coercion_tables.py
│  │        │     │  │  ├─ print_coercion_tables.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ test_utils.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ _private
│  │        │     │  │  │  ├─ extbuild.py
│  │        │     │  │  │  ├─ extbuild.pyi
│  │        │     │  │  │  ├─ utils.py
│  │        │     │  │  │  ├─ utils.pyi
│  │        │     │  │  │  ├─ __init__.py
│  │        │     │  │  │  └─ __init__.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ tests
│  │        │     │  │  ├─ test_configtool.py
│  │        │     │  │  ├─ test_ctypeslib.py
│  │        │     │  │  ├─ test_lazyloading.py
│  │        │     │  │  ├─ test_matlib.py
│  │        │     │  │  ├─ test_numpy_config.py
│  │        │     │  │  ├─ test_numpy_version.py
│  │        │     │  │  ├─ test_public_api.py
│  │        │     │  │  ├─ test_reloading.py
│  │        │     │  │  ├─ test_scripts.py
│  │        │     │  │  ├─ test_warnings.py
│  │        │     │  │  ├─ test__all__.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ typing
│  │        │     │  │  ├─ mypy_plugin.py
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ data
│  │        │     │  │  │  │  ├─ fail
│  │        │     │  │  │  │  │  ├─ arithmetic.pyi
│  │        │     │  │  │  │  │  ├─ arrayprint.pyi
│  │        │     │  │  │  │  │  ├─ arrayterator.pyi
│  │        │     │  │  │  │  │  ├─ array_constructors.pyi
│  │        │     │  │  │  │  │  ├─ array_like.pyi
│  │        │     │  │  │  │  │  ├─ array_pad.pyi
│  │        │     │  │  │  │  │  ├─ bitwise_ops.pyi
│  │        │     │  │  │  │  │  ├─ char.pyi
│  │        │     │  │  │  │  │  ├─ chararray.pyi
│  │        │     │  │  │  │  │  ├─ comparisons.pyi
│  │        │     │  │  │  │  │  ├─ constants.pyi
│  │        │     │  │  │  │  │  ├─ datasource.pyi
│  │        │     │  │  │  │  │  ├─ dtype.pyi
│  │        │     │  │  │  │  │  ├─ einsumfunc.pyi
│  │        │     │  │  │  │  │  ├─ flatiter.pyi
│  │        │     │  │  │  │  │  ├─ fromnumeric.pyi
│  │        │     │  │  │  │  │  ├─ histograms.pyi
│  │        │     │  │  │  │  │  ├─ index_tricks.pyi
│  │        │     │  │  │  │  │  ├─ lib_function_base.pyi
│  │        │     │  │  │  │  │  ├─ lib_polynomial.pyi
│  │        │     │  │  │  │  │  ├─ lib_utils.pyi
│  │        │     │  │  │  │  │  ├─ lib_version.pyi
│  │        │     │  │  │  │  │  ├─ linalg.pyi
│  │        │     │  │  │  │  │  ├─ ma.pyi
│  │        │     │  │  │  │  │  ├─ memmap.pyi
│  │        │     │  │  │  │  │  ├─ modules.pyi
│  │        │     │  │  │  │  │  ├─ multiarray.pyi
│  │        │     │  │  │  │  │  ├─ ndarray.pyi
│  │        │     │  │  │  │  │  ├─ ndarray_misc.pyi
│  │        │     │  │  │  │  │  ├─ nditer.pyi
│  │        │     │  │  │  │  │  ├─ nested_sequence.pyi
│  │        │     │  │  │  │  │  ├─ npyio.pyi
│  │        │     │  │  │  │  │  ├─ numerictypes.pyi
│  │        │     │  │  │  │  │  ├─ random.pyi
│  │        │     │  │  │  │  │  ├─ rec.pyi
│  │        │     │  │  │  │  │  ├─ scalars.pyi
│  │        │     │  │  │  │  │  ├─ shape.pyi
│  │        │     │  │  │  │  │  ├─ shape_base.pyi
│  │        │     │  │  │  │  │  ├─ stride_tricks.pyi
│  │        │     │  │  │  │  │  ├─ strings.pyi
│  │        │     │  │  │  │  │  ├─ testing.pyi
│  │        │     │  │  │  │  │  ├─ twodim_base.pyi
│  │        │     │  │  │  │  │  ├─ type_check.pyi
│  │        │     │  │  │  │  │  ├─ ufunclike.pyi
│  │        │     │  │  │  │  │  ├─ ufuncs.pyi
│  │        │     │  │  │  │  │  ├─ ufunc_config.pyi
│  │        │     │  │  │  │  │  └─ warnings_and_errors.pyi
│  │        │     │  │  │  │  ├─ misc
│  │        │     │  │  │  │  │  └─ extended_precision.pyi
│  │        │     │  │  │  │  ├─ mypy.ini
│  │        │     │  │  │  │  ├─ pass
│  │        │     │  │  │  │  │  ├─ arithmetic.py
│  │        │     │  │  │  │  │  ├─ arrayprint.py
│  │        │     │  │  │  │  │  ├─ arrayterator.py
│  │        │     │  │  │  │  │  ├─ array_constructors.py
│  │        │     │  │  │  │  │  ├─ array_like.py
│  │        │     │  │  │  │  │  ├─ bitwise_ops.py
│  │        │     │  │  │  │  │  ├─ comparisons.py
│  │        │     │  │  │  │  │  ├─ dtype.py
│  │        │     │  │  │  │  │  ├─ einsumfunc.py
│  │        │     │  │  │  │  │  ├─ flatiter.py
│  │        │     │  │  │  │  │  ├─ fromnumeric.py
│  │        │     │  │  │  │  │  ├─ index_tricks.py
│  │        │     │  │  │  │  │  ├─ lib_user_array.py
│  │        │     │  │  │  │  │  ├─ lib_utils.py
│  │        │     │  │  │  │  │  ├─ lib_version.py
│  │        │     │  │  │  │  │  ├─ literal.py
│  │        │     │  │  │  │  │  ├─ ma.py
│  │        │     │  │  │  │  │  ├─ mod.py
│  │        │     │  │  │  │  │  ├─ modules.py
│  │        │     │  │  │  │  │  ├─ multiarray.py
│  │        │     │  │  │  │  │  ├─ ndarray_conversion.py
│  │        │     │  │  │  │  │  ├─ ndarray_misc.py
│  │        │     │  │  │  │  │  ├─ ndarray_shape_manipulation.py
│  │        │     │  │  │  │  │  ├─ nditer.py
│  │        │     │  │  │  │  │  ├─ numeric.py
│  │        │     │  │  │  │  │  ├─ numerictypes.py
│  │        │     │  │  │  │  │  ├─ random.py
│  │        │     │  │  │  │  │  ├─ recfunctions.py
│  │        │     │  │  │  │  │  ├─ scalars.py
│  │        │     │  │  │  │  │  ├─ shape.py
│  │        │     │  │  │  │  │  ├─ simple.py
│  │        │     │  │  │  │  │  ├─ ufunclike.py
│  │        │     │  │  │  │  │  ├─ ufuncs.py
│  │        │     │  │  │  │  │  ├─ ufunc_config.py
│  │        │     │  │  │  │  │  └─ warnings_and_errors.py
│  │        │     │  │  │  │  └─ reveal
│  │        │     │  │  │  │     ├─ arithmetic.pyi
│  │        │     │  │  │  │     ├─ arraypad.pyi
│  │        │     │  │  │  │     ├─ arrayprint.pyi
│  │        │     │  │  │  │     ├─ arraysetops.pyi
│  │        │     │  │  │  │     ├─ arrayterator.pyi
│  │        │     │  │  │  │     ├─ array_api_info.pyi
│  │        │     │  │  │  │     ├─ array_constructors.pyi
│  │        │     │  │  │  │     ├─ bitwise_ops.pyi
│  │        │     │  │  │  │     ├─ char.pyi
│  │        │     │  │  │  │     ├─ chararray.pyi
│  │        │     │  │  │  │     ├─ comparisons.pyi
│  │        │     │  │  │  │     ├─ constants.pyi
│  │        │     │  │  │  │     ├─ ctypeslib.pyi
│  │        │     │  │  │  │     ├─ datasource.pyi
│  │        │     │  │  │  │     ├─ dtype.pyi
│  │        │     │  │  │  │     ├─ einsumfunc.pyi
│  │        │     │  │  │  │     ├─ emath.pyi
│  │        │     │  │  │  │     ├─ fft.pyi
│  │        │     │  │  │  │     ├─ flatiter.pyi
│  │        │     │  │  │  │     ├─ fromnumeric.pyi
│  │        │     │  │  │  │     ├─ getlimits.pyi
│  │        │     │  │  │  │     ├─ histograms.pyi
│  │        │     │  │  │  │     ├─ index_tricks.pyi
│  │        │     │  │  │  │     ├─ lib_function_base.pyi
│  │        │     │  │  │  │     ├─ lib_polynomial.pyi
│  │        │     │  │  │  │     ├─ lib_utils.pyi
│  │        │     │  │  │  │     ├─ lib_version.pyi
│  │        │     │  │  │  │     ├─ linalg.pyi
│  │        │     │  │  │  │     ├─ ma.pyi
│  │        │     │  │  │  │     ├─ matrix.pyi
│  │        │     │  │  │  │     ├─ memmap.pyi
│  │        │     │  │  │  │     ├─ mod.pyi
│  │        │     │  │  │  │     ├─ modules.pyi
│  │        │     │  │  │  │     ├─ multiarray.pyi
│  │        │     │  │  │  │     ├─ nbit_base_example.pyi
│  │        │     │  │  │  │     ├─ ndarray_assignability.pyi
│  │        │     │  │  │  │     ├─ ndarray_conversion.pyi
│  │        │     │  │  │  │     ├─ ndarray_misc.pyi
│  │        │     │  │  │  │     ├─ ndarray_shape_manipulation.pyi
│  │        │     │  │  │  │     ├─ nditer.pyi
│  │        │     │  │  │  │     ├─ nested_sequence.pyi
│  │        │     │  │  │  │     ├─ npyio.pyi
│  │        │     │  │  │  │     ├─ numeric.pyi
│  │        │     │  │  │  │     ├─ numerictypes.pyi
│  │        │     │  │  │  │     ├─ polynomial_polybase.pyi
│  │        │     │  │  │  │     ├─ polynomial_polyutils.pyi
│  │        │     │  │  │  │     ├─ polynomial_series.pyi
│  │        │     │  │  │  │     ├─ random.pyi
│  │        │     │  │  │  │     ├─ rec.pyi
│  │        │     │  │  │  │     ├─ scalars.pyi
│  │        │     │  │  │  │     ├─ shape.pyi
│  │        │     │  │  │  │     ├─ shape_base.pyi
│  │        │     │  │  │  │     ├─ stride_tricks.pyi
│  │        │     │  │  │  │     ├─ strings.pyi
│  │        │     │  │  │  │     ├─ testing.pyi
│  │        │     │  │  │  │     ├─ twodim_base.pyi
│  │        │     │  │  │  │     ├─ type_check.pyi
│  │        │     │  │  │  │     ├─ ufunclike.pyi
│  │        │     │  │  │  │     ├─ ufuncs.pyi
│  │        │     │  │  │  │     ├─ ufunc_config.pyi
│  │        │     │  │  │  │     └─ warnings_and_errors.pyi
│  │        │     │  │  │  ├─ test_isfile.py
│  │        │     │  │  │  ├─ test_runtime.py
│  │        │     │  │  │  ├─ test_typing.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ version.py
│  │        │     │  ├─ version.pyi
│  │        │     │  ├─ _array_api_info.py
│  │        │     │  ├─ _array_api_info.pyi
│  │        │     │  ├─ _configtool.py
│  │        │     │  ├─ _configtool.pyi
│  │        │     │  ├─ _core
│  │        │     │  │  ├─ arrayprint.py
│  │        │     │  │  ├─ arrayprint.pyi
│  │        │     │  │  ├─ cversions.py
│  │        │     │  │  ├─ defchararray.py
│  │        │     │  │  ├─ defchararray.pyi
│  │        │     │  │  ├─ einsumfunc.py
│  │        │     │  │  ├─ einsumfunc.pyi
│  │        │     │  │  ├─ fromnumeric.py
│  │        │     │  │  ├─ fromnumeric.pyi
│  │        │     │  │  ├─ function_base.py
│  │        │     │  │  ├─ function_base.pyi
│  │        │     │  │  ├─ getlimits.py
│  │        │     │  │  ├─ getlimits.pyi
│  │        │     │  │  ├─ include
│  │        │     │  │  │  └─ numpy
│  │        │     │  │  │     ├─ arrayobject.h
│  │        │     │  │  │     ├─ arrayscalars.h
│  │        │     │  │  │     ├─ dtype_api.h
│  │        │     │  │  │     ├─ halffloat.h
│  │        │     │  │  │     ├─ ndarrayobject.h
│  │        │     │  │  │     ├─ ndarraytypes.h
│  │        │     │  │  │     ├─ npy_2_compat.h
│  │        │     │  │  │     ├─ npy_2_complexcompat.h
│  │        │     │  │  │     ├─ npy_3kcompat.h
│  │        │     │  │  │     ├─ npy_common.h
│  │        │     │  │  │     ├─ npy_cpu.h
│  │        │     │  │  │     ├─ npy_endian.h
│  │        │     │  │  │     ├─ npy_math.h
│  │        │     │  │  │     ├─ npy_no_deprecated_api.h
│  │        │     │  │  │     ├─ npy_os.h
│  │        │     │  │  │     ├─ numpyconfig.h
│  │        │     │  │  │     ├─ random
│  │        │     │  │  │     │  ├─ bitgen.h
│  │        │     │  │  │     │  ├─ distributions.h
│  │        │     │  │  │     │  ├─ libdivide.h
│  │        │     │  │  │     │  └─ LICENSE.txt
│  │        │     │  │  │     ├─ ufuncobject.h
│  │        │     │  │  │     ├─ utils.h
│  │        │     │  │  │     ├─ _neighborhood_iterator_imp.h
│  │        │     │  │  │     ├─ _numpyconfig.h
│  │        │     │  │  │     ├─ _public_dtype_api_table.h
│  │        │     │  │  │     ├─ __multiarray_api.c
│  │        │     │  │  │     ├─ __multiarray_api.h
│  │        │     │  │  │     ├─ __ufunc_api.c
│  │        │     │  │  │     └─ __ufunc_api.h
│  │        │     │  │  ├─ lib
│  │        │     │  │  │  ├─ npy-pkg-config
│  │        │     │  │  │  │  ├─ mlib.ini
│  │        │     │  │  │  │  └─ npymath.ini
│  │        │     │  │  │  ├─ npymath.lib
│  │        │     │  │  │  └─ pkgconfig
│  │        │     │  │  │     └─ numpy.pc
│  │        │     │  │  ├─ memmap.py
│  │        │     │  │  ├─ memmap.pyi
│  │        │     │  │  ├─ multiarray.py
│  │        │     │  │  ├─ multiarray.pyi
│  │        │     │  │  ├─ numeric.py
│  │        │     │  │  ├─ numeric.pyi
│  │        │     │  │  ├─ numerictypes.py
│  │        │     │  │  ├─ numerictypes.pyi
│  │        │     │  │  ├─ overrides.py
│  │        │     │  │  ├─ overrides.pyi
│  │        │     │  │  ├─ printoptions.py
│  │        │     │  │  ├─ printoptions.pyi
│  │        │     │  │  ├─ records.py
│  │        │     │  │  ├─ records.pyi
│  │        │     │  │  ├─ shape_base.py
│  │        │     │  │  ├─ shape_base.pyi
│  │        │     │  │  ├─ strings.py
│  │        │     │  │  ├─ strings.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ data
│  │        │     │  │  │  │  ├─ astype_copy.pkl
│  │        │     │  │  │  │  ├─ generate_umath_validation_data.cpp
│  │        │     │  │  │  │  ├─ recarray_from_file.fits
│  │        │     │  │  │  │  ├─ umath-validation-set-arccos.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-arccosh.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-arcsin.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-arcsinh.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-arctan.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-arctanh.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-cbrt.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-cos.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-cosh.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-exp.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-exp2.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-expm1.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-log.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-log10.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-log1p.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-log2.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-README.txt
│  │        │     │  │  │  │  ├─ umath-validation-set-sin.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-sinh.csv
│  │        │     │  │  │  │  ├─ umath-validation-set-tan.csv
│  │        │     │  │  │  │  └─ umath-validation-set-tanh.csv
│  │        │     │  │  │  ├─ examples
│  │        │     │  │  │  │  ├─ cython
│  │        │     │  │  │  │  │  ├─ checks.pyx
│  │        │     │  │  │  │  │  ├─ meson.build
│  │        │     │  │  │  │  │  └─ setup.py
│  │        │     │  │  │  │  └─ limited_api
│  │        │     │  │  │  │     ├─ limited_api1.c
│  │        │     │  │  │  │     ├─ limited_api2.pyx
│  │        │     │  │  │  │     ├─ limited_api_latest.c
│  │        │     │  │  │  │     ├─ meson.build
│  │        │     │  │  │  │     └─ setup.py
│  │        │     │  │  │  ├─ test_abc.py
│  │        │     │  │  │  ├─ test_api.py
│  │        │     │  │  │  ├─ test_argparse.py
│  │        │     │  │  │  ├─ test_arraymethod.py
│  │        │     │  │  │  ├─ test_arrayobject.py
│  │        │     │  │  │  ├─ test_arrayprint.py
│  │        │     │  │  │  ├─ test_array_api_info.py
│  │        │     │  │  │  ├─ test_array_coercion.py
│  │        │     │  │  │  ├─ test_array_interface.py
│  │        │     │  │  │  ├─ test_casting_floatingpoint_errors.py
│  │        │     │  │  │  ├─ test_casting_unittests.py
│  │        │     │  │  │  ├─ test_conversion_utils.py
│  │        │     │  │  │  ├─ test_cpu_dispatcher.py
│  │        │     │  │  │  ├─ test_cpu_features.py
│  │        │     │  │  │  ├─ test_custom_dtypes.py
│  │        │     │  │  │  ├─ test_cython.py
│  │        │     │  │  │  ├─ test_datetime.py
│  │        │     │  │  │  ├─ test_defchararray.py
│  │        │     │  │  │  ├─ test_deprecations.py
│  │        │     │  │  │  ├─ test_dlpack.py
│  │        │     │  │  │  ├─ test_dtype.py
│  │        │     │  │  │  ├─ test_einsum.py
│  │        │     │  │  │  ├─ test_errstate.py
│  │        │     │  │  │  ├─ test_extint128.py
│  │        │     │  │  │  ├─ test_finfo.py
│  │        │     │  │  │  ├─ test_function_base.py
│  │        │     │  │  │  ├─ test_getlimits.py
│  │        │     │  │  │  ├─ test_half.py
│  │        │     │  │  │  ├─ test_hashtable.py
│  │        │     │  │  │  ├─ test_indexerrors.py
│  │        │     │  │  │  ├─ test_indexing.py
│  │        │     │  │  │  ├─ test_item_selection.py
│  │        │     │  │  │  ├─ test_limited_api.py
│  │        │     │  │  │  ├─ test_longdouble.py
│  │        │     │  │  │  ├─ test_memmap.py
│  │        │     │  │  │  ├─ test_mem_overlap.py
│  │        │     │  │  │  ├─ test_mem_policy.py
│  │        │     │  │  │  ├─ test_multiarray.py
│  │        │     │  │  │  ├─ test_multiprocessing.py
│  │        │     │  │  │  ├─ test_multithreading.py
│  │        │     │  │  │  ├─ test_nditer.py
│  │        │     │  │  │  ├─ test_nep50_promotions.py
│  │        │     │  │  │  ├─ test_numeric.py
│  │        │     │  │  │  ├─ test_numerictypes.py
│  │        │     │  │  │  ├─ test_overrides.py
│  │        │     │  │  │  ├─ test_print.py
│  │        │     │  │  │  ├─ test_protocols.py
│  │        │     │  │  │  ├─ test_records.py
│  │        │     │  │  │  ├─ test_regression.py
│  │        │     │  │  │  ├─ test_scalarbuffer.py
│  │        │     │  │  │  ├─ test_scalarinherit.py
│  │        │     │  │  │  ├─ test_scalarmath.py
│  │        │     │  │  │  ├─ test_scalarprint.py
│  │        │     │  │  │  ├─ test_scalar_ctors.py
│  │        │     │  │  │  ├─ test_scalar_methods.py
│  │        │     │  │  │  ├─ test_shape_base.py
│  │        │     │  │  │  ├─ test_simd.py
│  │        │     │  │  │  ├─ test_simd_module.py
│  │        │     │  │  │  ├─ test_stringdtype.py
│  │        │     │  │  │  ├─ test_strings.py
│  │        │     │  │  │  ├─ test_ufunc.py
│  │        │     │  │  │  ├─ test_umath.py
│  │        │     │  │  │  ├─ test_umath_accuracy.py
│  │        │     │  │  │  ├─ test_umath_complex.py
│  │        │     │  │  │  ├─ test_unicode.py
│  │        │     │  │  │  ├─ test__exceptions.py
│  │        │     │  │  │  ├─ _locales.py
│  │        │     │  │  │  └─ _natype.py
│  │        │     │  │  ├─ umath.py
│  │        │     │  │  ├─ umath.pyi
│  │        │     │  │  ├─ _add_newdocs.py
│  │        │     │  │  ├─ _add_newdocs.pyi
│  │        │     │  │  ├─ _add_newdocs_scalars.py
│  │        │     │  │  ├─ _add_newdocs_scalars.pyi
│  │        │     │  │  ├─ _asarray.py
│  │        │     │  │  ├─ _asarray.pyi
│  │        │     │  │  ├─ _dtype.py
│  │        │     │  │  ├─ _dtype.pyi
│  │        │     │  │  ├─ _dtype_ctypes.py
│  │        │     │  │  ├─ _dtype_ctypes.pyi
│  │        │     │  │  ├─ _exceptions.py
│  │        │     │  │  ├─ _exceptions.pyi
│  │        │     │  │  ├─ _internal.py
│  │        │     │  │  ├─ _internal.pyi
│  │        │     │  │  ├─ _methods.py
│  │        │     │  │  ├─ _methods.pyi
│  │        │     │  │  ├─ _simd.pyi
│  │        │     │  │  ├─ _string_helpers.py
│  │        │     │  │  ├─ _string_helpers.pyi
│  │        │     │  │  ├─ _type_aliases.py
│  │        │     │  │  ├─ _type_aliases.pyi
│  │        │     │  │  ├─ _ufunc_config.py
│  │        │     │  │  ├─ _ufunc_config.pyi
│  │        │     │  │  ├─ _umath_tests.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ _distributor_init.py
│  │        │     │  ├─ _distributor_init.pyi
│  │        │     │  ├─ _expired_attrs_2_0.py
│  │        │     │  ├─ _expired_attrs_2_0.pyi
│  │        │     │  ├─ _globals.py
│  │        │     │  ├─ _globals.pyi
│  │        │     │  ├─ _pyinstaller
│  │        │     │  │  ├─ hook-numpy.py
│  │        │     │  │  ├─ hook-numpy.pyi
│  │        │     │  │  ├─ tests
│  │        │     │  │  │  ├─ pyinstaller-smoke.py
│  │        │     │  │  │  ├─ test_pyinstaller.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ _pytesttester.py
│  │        │     │  ├─ _pytesttester.pyi
│  │        │     │  ├─ _typing
│  │        │     │  │  ├─ _add_docstring.py
│  │        │     │  │  ├─ _array_like.py
│  │        │     │  │  ├─ _char_codes.py
│  │        │     │  │  ├─ _dtype_like.py
│  │        │     │  │  ├─ _extended_precision.py
│  │        │     │  │  ├─ _nbit.py
│  │        │     │  │  ├─ _nbit_base.py
│  │        │     │  │  ├─ _nbit_base.pyi
│  │        │     │  │  ├─ _nested_sequence.py
│  │        │     │  │  ├─ _scalars.py
│  │        │     │  │  ├─ _shape.py
│  │        │     │  │  ├─ _ufunc.py
│  │        │     │  │  ├─ _ufunc.pyi
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ _utils
│  │        │     │  │  ├─ _convertions.py
│  │        │     │  │  ├─ _convertions.pyi
│  │        │     │  │  ├─ _inspect.py
│  │        │     │  │  ├─ _inspect.pyi
│  │        │     │  │  ├─ _pep440.py
│  │        │     │  │  ├─ _pep440.pyi
│  │        │     │  │  ├─ __init__.py
│  │        │     │  │  └─ __init__.pyi
│  │        │     │  ├─ __config__.py
│  │        │     │  ├─ __config__.pyi
│  │        │     │  ├─ __init__.cython-30.pxd
│  │        │     │  ├─ __init__.pxd
│  │        │     │  ├─ __init__.py
│  │        │     │  └─ __init__.pyi
│  │        │     ├─ numpy-2.4.2.dist-info
│  │        │     │  ├─ DELVEWHEEL
│  │        │     │  ├─ entry_points.txt
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  ├─ LICENSE.txt
│  │        │     │  │  └─ numpy
│  │        │     │  │     ├─ fft
│  │        │     │  │     │  └─ pocketfft
│  │        │     │  │     │     └─ LICENSE.md
│  │        │     │  │     ├─ linalg
│  │        │     │  │     │  └─ lapack_lite
│  │        │     │  │     │     └─ LICENSE.txt
│  │        │     │  │     ├─ ma
│  │        │     │  │     │  └─ LICENSE
│  │        │     │  │     ├─ random
│  │        │     │  │     │  ├─ LICENSE.md
│  │        │     │  │     │  └─ src
│  │        │     │  │     │     ├─ distributions
│  │        │     │  │     │     │  └─ LICENSE.md
│  │        │     │  │     │     ├─ mt19937
│  │        │     │  │     │     │  └─ LICENSE.md
│  │        │     │  │     │     ├─ pcg64
│  │        │     │  │     │     │  └─ LICENSE.md
│  │        │     │  │     │     ├─ philox
│  │        │     │  │     │     │  └─ LICENSE.md
│  │        │     │  │     │     ├─ sfc64
│  │        │     │  │     │     │  └─ LICENSE.md
│  │        │     │  │     │     └─ splitmix64
│  │        │     │  │     │        └─ LICENSE.md
│  │        │     │  │     └─ _core
│  │        │     │  │        ├─ include
│  │        │     │  │        │  └─ numpy
│  │        │     │  │        │     └─ libdivide
│  │        │     │  │        │        └─ LICENSE.txt
│  │        │     │  │        └─ src
│  │        │     │  │           ├─ common
│  │        │     │  │           │  └─ pythoncapi-compat
│  │        │     │  │           │     └─ COPYING
│  │        │     │  │           ├─ highway
│  │        │     │  │           │  └─ LICENSE
│  │        │     │  │           ├─ multiarray
│  │        │     │  │           │  └─ dragon4_LICENSE.txt
│  │        │     │  │           ├─ npysort
│  │        │     │  │           │  └─ x86-simd-sort
│  │        │     │  │           │     └─ LICENSE.md
│  │        │     │  │           └─ umath
│  │        │     │  │              └─ svml
│  │        │     │  │                 └─ LICENSE
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  ├─ REQUESTED
│  │        │     │  └─ WHEEL
│  │        │     ├─ numpy.libs
│  │        │     │  ├─ libscipy_openblas64_-74a408729250596b0973e69fdd954eea.dll
│  │        │     │  └─ msvcp140-a4c2229bdc2a2a630acdc095b4d86008.dll
│  │        │     ├─ pip
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ _internal
│  │        │     │  │  ├─ build_env.py
│  │        │     │  │  ├─ cache.py
│  │        │     │  │  ├─ cli
│  │        │     │  │  │  ├─ autocompletion.py
│  │        │     │  │  │  ├─ base_command.py
│  │        │     │  │  │  ├─ cmdoptions.py
│  │        │     │  │  │  ├─ command_context.py
│  │        │     │  │  │  ├─ main.py
│  │        │     │  │  │  ├─ main_parser.py
│  │        │     │  │  │  ├─ parser.py
│  │        │     │  │  │  ├─ progress_bars.py
│  │        │     │  │  │  ├─ req_command.py
│  │        │     │  │  │  ├─ spinners.py
│  │        │     │  │  │  ├─ status_codes.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ commands
│  │        │     │  │  │  ├─ cache.py
│  │        │     │  │  │  ├─ check.py
│  │        │     │  │  │  ├─ completion.py
│  │        │     │  │  │  ├─ configuration.py
│  │        │     │  │  │  ├─ debug.py
│  │        │     │  │  │  ├─ download.py
│  │        │     │  │  │  ├─ freeze.py
│  │        │     │  │  │  ├─ hash.py
│  │        │     │  │  │  ├─ help.py
│  │        │     │  │  │  ├─ index.py
│  │        │     │  │  │  ├─ inspect.py
│  │        │     │  │  │  ├─ install.py
│  │        │     │  │  │  ├─ list.py
│  │        │     │  │  │  ├─ search.py
│  │        │     │  │  │  ├─ show.py
│  │        │     │  │  │  ├─ uninstall.py
│  │        │     │  │  │  ├─ wheel.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ configuration.py
│  │        │     │  │  ├─ distributions
│  │        │     │  │  │  ├─ base.py
│  │        │     │  │  │  ├─ installed.py
│  │        │     │  │  │  ├─ sdist.py
│  │        │     │  │  │  ├─ wheel.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ exceptions.py
│  │        │     │  │  ├─ index
│  │        │     │  │  │  ├─ collector.py
│  │        │     │  │  │  ├─ package_finder.py
│  │        │     │  │  │  ├─ sources.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ locations
│  │        │     │  │  │  ├─ base.py
│  │        │     │  │  │  ├─ _distutils.py
│  │        │     │  │  │  ├─ _sysconfig.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ main.py
│  │        │     │  │  ├─ metadata
│  │        │     │  │  │  ├─ base.py
│  │        │     │  │  │  ├─ importlib
│  │        │     │  │  │  │  ├─ _compat.py
│  │        │     │  │  │  │  ├─ _dists.py
│  │        │     │  │  │  │  ├─ _envs.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ pkg_resources.py
│  │        │     │  │  │  ├─ _json.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ models
│  │        │     │  │  │  ├─ candidate.py
│  │        │     │  │  │  ├─ direct_url.py
│  │        │     │  │  │  ├─ format_control.py
│  │        │     │  │  │  ├─ index.py
│  │        │     │  │  │  ├─ installation_report.py
│  │        │     │  │  │  ├─ link.py
│  │        │     │  │  │  ├─ scheme.py
│  │        │     │  │  │  ├─ search_scope.py
│  │        │     │  │  │  ├─ selection_prefs.py
│  │        │     │  │  │  ├─ target_python.py
│  │        │     │  │  │  ├─ wheel.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ network
│  │        │     │  │  │  ├─ auth.py
│  │        │     │  │  │  ├─ cache.py
│  │        │     │  │  │  ├─ download.py
│  │        │     │  │  │  ├─ lazy_wheel.py
│  │        │     │  │  │  ├─ session.py
│  │        │     │  │  │  ├─ utils.py
│  │        │     │  │  │  ├─ xmlrpc.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ operations
│  │        │     │  │  │  ├─ build
│  │        │     │  │  │  │  ├─ build_tracker.py
│  │        │     │  │  │  │  ├─ metadata.py
│  │        │     │  │  │  │  ├─ metadata_editable.py
│  │        │     │  │  │  │  ├─ metadata_legacy.py
│  │        │     │  │  │  │  ├─ wheel.py
│  │        │     │  │  │  │  ├─ wheel_editable.py
│  │        │     │  │  │  │  ├─ wheel_legacy.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ check.py
│  │        │     │  │  │  ├─ freeze.py
│  │        │     │  │  │  ├─ install
│  │        │     │  │  │  │  ├─ editable_legacy.py
│  │        │     │  │  │  │  ├─ wheel.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ prepare.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ pyproject.py
│  │        │     │  │  ├─ req
│  │        │     │  │  │  ├─ constructors.py
│  │        │     │  │  │  ├─ req_file.py
│  │        │     │  │  │  ├─ req_install.py
│  │        │     │  │  │  ├─ req_set.py
│  │        │     │  │  │  ├─ req_uninstall.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ resolution
│  │        │     │  │  │  ├─ base.py
│  │        │     │  │  │  ├─ legacy
│  │        │     │  │  │  │  ├─ resolver.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ resolvelib
│  │        │     │  │  │  │  ├─ base.py
│  │        │     │  │  │  │  ├─ candidates.py
│  │        │     │  │  │  │  ├─ factory.py
│  │        │     │  │  │  │  ├─ found_candidates.py
│  │        │     │  │  │  │  ├─ provider.py
│  │        │     │  │  │  │  ├─ reporter.py
│  │        │     │  │  │  │  ├─ requirements.py
│  │        │     │  │  │  │  ├─ resolver.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ self_outdated_check.py
│  │        │     │  │  ├─ utils
│  │        │     │  │  │  ├─ appdirs.py
│  │        │     │  │  │  ├─ compat.py
│  │        │     │  │  │  ├─ compatibility_tags.py
│  │        │     │  │  │  ├─ datetime.py
│  │        │     │  │  │  ├─ deprecation.py
│  │        │     │  │  │  ├─ direct_url_helpers.py
│  │        │     │  │  │  ├─ egg_link.py
│  │        │     │  │  │  ├─ encoding.py
│  │        │     │  │  │  ├─ entrypoints.py
│  │        │     │  │  │  ├─ filesystem.py
│  │        │     │  │  │  ├─ filetypes.py
│  │        │     │  │  │  ├─ glibc.py
│  │        │     │  │  │  ├─ hashes.py
│  │        │     │  │  │  ├─ logging.py
│  │        │     │  │  │  ├─ misc.py
│  │        │     │  │  │  ├─ packaging.py
│  │        │     │  │  │  ├─ setuptools_build.py
│  │        │     │  │  │  ├─ subprocess.py
│  │        │     │  │  │  ├─ temp_dir.py
│  │        │     │  │  │  ├─ unpacking.py
│  │        │     │  │  │  ├─ urls.py
│  │        │     │  │  │  ├─ virtualenv.py
│  │        │     │  │  │  ├─ wheel.py
│  │        │     │  │  │  ├─ _jaraco_text.py
│  │        │     │  │  │  ├─ _log.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ vcs
│  │        │     │  │  │  ├─ bazaar.py
│  │        │     │  │  │  ├─ git.py
│  │        │     │  │  │  ├─ mercurial.py
│  │        │     │  │  │  ├─ subversion.py
│  │        │     │  │  │  ├─ versioncontrol.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ wheel_builder.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ _vendor
│  │        │     │  │  ├─ cachecontrol
│  │        │     │  │  │  ├─ adapter.py
│  │        │     │  │  │  ├─ cache.py
│  │        │     │  │  │  ├─ caches
│  │        │     │  │  │  │  ├─ file_cache.py
│  │        │     │  │  │  │  ├─ redis_cache.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ controller.py
│  │        │     │  │  │  ├─ filewrapper.py
│  │        │     │  │  │  ├─ heuristics.py
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ serialize.py
│  │        │     │  │  │  ├─ wrapper.py
│  │        │     │  │  │  ├─ _cmd.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ certifi
│  │        │     │  │  │  ├─ cacert.pem
│  │        │     │  │  │  ├─ core.py
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ __init__.py
│  │        │     │  │  │  └─ __main__.py
│  │        │     │  │  ├─ distlib
│  │        │     │  │  │  ├─ compat.py
│  │        │     │  │  │  ├─ database.py
│  │        │     │  │  │  ├─ index.py
│  │        │     │  │  │  ├─ locators.py
│  │        │     │  │  │  ├─ manifest.py
│  │        │     │  │  │  ├─ markers.py
│  │        │     │  │  │  ├─ metadata.py
│  │        │     │  │  │  ├─ resources.py
│  │        │     │  │  │  ├─ scripts.py
│  │        │     │  │  │  ├─ t32.exe
│  │        │     │  │  │  ├─ t64-arm.exe
│  │        │     │  │  │  ├─ t64.exe
│  │        │     │  │  │  ├─ util.py
│  │        │     │  │  │  ├─ version.py
│  │        │     │  │  │  ├─ w32.exe
│  │        │     │  │  │  ├─ w64-arm.exe
│  │        │     │  │  │  ├─ w64.exe
│  │        │     │  │  │  ├─ wheel.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ distro
│  │        │     │  │  │  ├─ distro.py
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ __init__.py
│  │        │     │  │  │  └─ __main__.py
│  │        │     │  │  ├─ idna
│  │        │     │  │  │  ├─ codec.py
│  │        │     │  │  │  ├─ compat.py
│  │        │     │  │  │  ├─ core.py
│  │        │     │  │  │  ├─ idnadata.py
│  │        │     │  │  │  ├─ intranges.py
│  │        │     │  │  │  ├─ package_data.py
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ uts46data.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ msgpack
│  │        │     │  │  │  ├─ exceptions.py
│  │        │     │  │  │  ├─ ext.py
│  │        │     │  │  │  ├─ fallback.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ packaging
│  │        │     │  │  │  ├─ markers.py
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ requirements.py
│  │        │     │  │  │  ├─ specifiers.py
│  │        │     │  │  │  ├─ tags.py
│  │        │     │  │  │  ├─ utils.py
│  │        │     │  │  │  ├─ version.py
│  │        │     │  │  │  ├─ _manylinux.py
│  │        │     │  │  │  ├─ _musllinux.py
│  │        │     │  │  │  ├─ _structures.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ pkg_resources
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ platformdirs
│  │        │     │  │  │  ├─ android.py
│  │        │     │  │  │  ├─ api.py
│  │        │     │  │  │  ├─ macos.py
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ unix.py
│  │        │     │  │  │  ├─ version.py
│  │        │     │  │  │  ├─ windows.py
│  │        │     │  │  │  ├─ __init__.py
│  │        │     │  │  │  └─ __main__.py
│  │        │     │  │  ├─ pygments
│  │        │     │  │  │  ├─ cmdline.py
│  │        │     │  │  │  ├─ console.py
│  │        │     │  │  │  ├─ filter.py
│  │        │     │  │  │  ├─ filters
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ formatter.py
│  │        │     │  │  │  ├─ formatters
│  │        │     │  │  │  │  ├─ bbcode.py
│  │        │     │  │  │  │  ├─ groff.py
│  │        │     │  │  │  │  ├─ html.py
│  │        │     │  │  │  │  ├─ img.py
│  │        │     │  │  │  │  ├─ irc.py
│  │        │     │  │  │  │  ├─ latex.py
│  │        │     │  │  │  │  ├─ other.py
│  │        │     │  │  │  │  ├─ pangomarkup.py
│  │        │     │  │  │  │  ├─ rtf.py
│  │        │     │  │  │  │  ├─ svg.py
│  │        │     │  │  │  │  ├─ terminal.py
│  │        │     │  │  │  │  ├─ terminal256.py
│  │        │     │  │  │  │  ├─ _mapping.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ lexer.py
│  │        │     │  │  │  ├─ lexers
│  │        │     │  │  │  │  ├─ python.py
│  │        │     │  │  │  │  ├─ _mapping.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ modeline.py
│  │        │     │  │  │  ├─ plugin.py
│  │        │     │  │  │  ├─ regexopt.py
│  │        │     │  │  │  ├─ scanner.py
│  │        │     │  │  │  ├─ sphinxext.py
│  │        │     │  │  │  ├─ style.py
│  │        │     │  │  │  ├─ styles
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ token.py
│  │        │     │  │  │  ├─ unistring.py
│  │        │     │  │  │  ├─ util.py
│  │        │     │  │  │  ├─ __init__.py
│  │        │     │  │  │  └─ __main__.py
│  │        │     │  │  ├─ pyproject_hooks
│  │        │     │  │  │  ├─ _compat.py
│  │        │     │  │  │  ├─ _impl.py
│  │        │     │  │  │  ├─ _in_process
│  │        │     │  │  │  │  ├─ _in_process.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ requests
│  │        │     │  │  │  ├─ adapters.py
│  │        │     │  │  │  ├─ api.py
│  │        │     │  │  │  ├─ auth.py
│  │        │     │  │  │  ├─ certs.py
│  │        │     │  │  │  ├─ compat.py
│  │        │     │  │  │  ├─ cookies.py
│  │        │     │  │  │  ├─ exceptions.py
│  │        │     │  │  │  ├─ help.py
│  │        │     │  │  │  ├─ hooks.py
│  │        │     │  │  │  ├─ models.py
│  │        │     │  │  │  ├─ packages.py
│  │        │     │  │  │  ├─ sessions.py
│  │        │     │  │  │  ├─ status_codes.py
│  │        │     │  │  │  ├─ structures.py
│  │        │     │  │  │  ├─ utils.py
│  │        │     │  │  │  ├─ _internal_utils.py
│  │        │     │  │  │  ├─ __init__.py
│  │        │     │  │  │  └─ __version__.py
│  │        │     │  │  ├─ resolvelib
│  │        │     │  │  │  ├─ compat
│  │        │     │  │  │  │  ├─ collections_abc.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ providers.py
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ reporters.py
│  │        │     │  │  │  ├─ resolvers.py
│  │        │     │  │  │  ├─ structs.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ rich
│  │        │     │  │  │  ├─ abc.py
│  │        │     │  │  │  ├─ align.py
│  │        │     │  │  │  ├─ ansi.py
│  │        │     │  │  │  ├─ bar.py
│  │        │     │  │  │  ├─ box.py
│  │        │     │  │  │  ├─ cells.py
│  │        │     │  │  │  ├─ color.py
│  │        │     │  │  │  ├─ color_triplet.py
│  │        │     │  │  │  ├─ columns.py
│  │        │     │  │  │  ├─ console.py
│  │        │     │  │  │  ├─ constrain.py
│  │        │     │  │  │  ├─ containers.py
│  │        │     │  │  │  ├─ control.py
│  │        │     │  │  │  ├─ default_styles.py
│  │        │     │  │  │  ├─ diagnose.py
│  │        │     │  │  │  ├─ emoji.py
│  │        │     │  │  │  ├─ errors.py
│  │        │     │  │  │  ├─ filesize.py
│  │        │     │  │  │  ├─ file_proxy.py
│  │        │     │  │  │  ├─ highlighter.py
│  │        │     │  │  │  ├─ json.py
│  │        │     │  │  │  ├─ jupyter.py
│  │        │     │  │  │  ├─ layout.py
│  │        │     │  │  │  ├─ live.py
│  │        │     │  │  │  ├─ live_render.py
│  │        │     │  │  │  ├─ logging.py
│  │        │     │  │  │  ├─ markup.py
│  │        │     │  │  │  ├─ measure.py
│  │        │     │  │  │  ├─ padding.py
│  │        │     │  │  │  ├─ pager.py
│  │        │     │  │  │  ├─ palette.py
│  │        │     │  │  │  ├─ panel.py
│  │        │     │  │  │  ├─ pretty.py
│  │        │     │  │  │  ├─ progress.py
│  │        │     │  │  │  ├─ progress_bar.py
│  │        │     │  │  │  ├─ prompt.py
│  │        │     │  │  │  ├─ protocol.py
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ region.py
│  │        │     │  │  │  ├─ repr.py
│  │        │     │  │  │  ├─ rule.py
│  │        │     │  │  │  ├─ scope.py
│  │        │     │  │  │  ├─ screen.py
│  │        │     │  │  │  ├─ segment.py
│  │        │     │  │  │  ├─ spinner.py
│  │        │     │  │  │  ├─ status.py
│  │        │     │  │  │  ├─ style.py
│  │        │     │  │  │  ├─ styled.py
│  │        │     │  │  │  ├─ syntax.py
│  │        │     │  │  │  ├─ table.py
│  │        │     │  │  │  ├─ terminal_theme.py
│  │        │     │  │  │  ├─ text.py
│  │        │     │  │  │  ├─ theme.py
│  │        │     │  │  │  ├─ themes.py
│  │        │     │  │  │  ├─ traceback.py
│  │        │     │  │  │  ├─ tree.py
│  │        │     │  │  │  ├─ _cell_widths.py
│  │        │     │  │  │  ├─ _emoji_codes.py
│  │        │     │  │  │  ├─ _emoji_replace.py
│  │        │     │  │  │  ├─ _export_format.py
│  │        │     │  │  │  ├─ _extension.py
│  │        │     │  │  │  ├─ _fileno.py
│  │        │     │  │  │  ├─ _inspect.py
│  │        │     │  │  │  ├─ _log_render.py
│  │        │     │  │  │  ├─ _loop.py
│  │        │     │  │  │  ├─ _null_file.py
│  │        │     │  │  │  ├─ _palettes.py
│  │        │     │  │  │  ├─ _pick.py
│  │        │     │  │  │  ├─ _ratio.py
│  │        │     │  │  │  ├─ _spinners.py
│  │        │     │  │  │  ├─ _stack.py
│  │        │     │  │  │  ├─ _timer.py
│  │        │     │  │  │  ├─ _win32_console.py
│  │        │     │  │  │  ├─ _windows.py
│  │        │     │  │  │  ├─ _windows_renderer.py
│  │        │     │  │  │  ├─ _wrap.py
│  │        │     │  │  │  ├─ __init__.py
│  │        │     │  │  │  └─ __main__.py
│  │        │     │  │  ├─ tomli
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ _parser.py
│  │        │     │  │  │  ├─ _re.py
│  │        │     │  │  │  ├─ _types.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ truststore
│  │        │     │  │  │  ├─ py.typed
│  │        │     │  │  │  ├─ _api.py
│  │        │     │  │  │  ├─ _macos.py
│  │        │     │  │  │  ├─ _openssl.py
│  │        │     │  │  │  ├─ _ssl_constants.py
│  │        │     │  │  │  ├─ _windows.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ typing_extensions.py
│  │        │     │  │  ├─ urllib3
│  │        │     │  │  │  ├─ connection.py
│  │        │     │  │  │  ├─ connectionpool.py
│  │        │     │  │  │  ├─ contrib
│  │        │     │  │  │  │  ├─ appengine.py
│  │        │     │  │  │  │  ├─ ntlmpool.py
│  │        │     │  │  │  │  ├─ pyopenssl.py
│  │        │     │  │  │  │  ├─ securetransport.py
│  │        │     │  │  │  │  ├─ socks.py
│  │        │     │  │  │  │  ├─ _appengine_environ.py
│  │        │     │  │  │  │  ├─ _securetransport
│  │        │     │  │  │  │  │  ├─ bindings.py
│  │        │     │  │  │  │  │  ├─ low_level.py
│  │        │     │  │  │  │  │  └─ __init__.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ exceptions.py
│  │        │     │  │  │  ├─ fields.py
│  │        │     │  │  │  ├─ filepost.py
│  │        │     │  │  │  ├─ packages
│  │        │     │  │  │  │  ├─ backports
│  │        │     │  │  │  │  │  ├─ makefile.py
│  │        │     │  │  │  │  │  ├─ weakref_finalize.py
│  │        │     │  │  │  │  │  └─ __init__.py
│  │        │     │  │  │  │  ├─ six.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ poolmanager.py
│  │        │     │  │  │  ├─ request.py
│  │        │     │  │  │  ├─ response.py
│  │        │     │  │  │  ├─ util
│  │        │     │  │  │  │  ├─ connection.py
│  │        │     │  │  │  │  ├─ proxy.py
│  │        │     │  │  │  │  ├─ queue.py
│  │        │     │  │  │  │  ├─ request.py
│  │        │     │  │  │  │  ├─ response.py
│  │        │     │  │  │  │  ├─ retry.py
│  │        │     │  │  │  │  ├─ ssltransport.py
│  │        │     │  │  │  │  ├─ ssl_.py
│  │        │     │  │  │  │  ├─ ssl_match_hostname.py
│  │        │     │  │  │  │  ├─ timeout.py
│  │        │     │  │  │  │  ├─ url.py
│  │        │     │  │  │  │  ├─ wait.py
│  │        │     │  │  │  │  └─ __init__.py
│  │        │     │  │  │  ├─ _collections.py
│  │        │     │  │  │  ├─ _version.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ vendor.txt
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ __init__.py
│  │        │     │  ├─ __main__.py
│  │        │     │  └─ __pip-runner__.py
│  │        │     ├─ pydantic
│  │        │     │  ├─ aliases.py
│  │        │     │  ├─ alias_generators.py
│  │        │     │  ├─ annotated_handlers.py
│  │        │     │  ├─ class_validators.py
│  │        │     │  ├─ color.py
│  │        │     │  ├─ config.py
│  │        │     │  ├─ dataclasses.py
│  │        │     │  ├─ datetime_parse.py
│  │        │     │  ├─ decorator.py
│  │        │     │  ├─ deprecated
│  │        │     │  │  ├─ class_validators.py
│  │        │     │  │  ├─ config.py
│  │        │     │  │  ├─ copy_internals.py
│  │        │     │  │  ├─ decorator.py
│  │        │     │  │  ├─ json.py
│  │        │     │  │  ├─ parse.py
│  │        │     │  │  ├─ tools.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ env_settings.py
│  │        │     │  ├─ errors.py
│  │        │     │  ├─ error_wrappers.py
│  │        │     │  ├─ experimental
│  │        │     │  │  ├─ arguments_schema.py
│  │        │     │  │  ├─ missing_sentinel.py
│  │        │     │  │  ├─ pipeline.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ fields.py
│  │        │     │  ├─ functional_serializers.py
│  │        │     │  ├─ functional_validators.py
│  │        │     │  ├─ generics.py
│  │        │     │  ├─ json.py
│  │        │     │  ├─ json_schema.py
│  │        │     │  ├─ main.py
│  │        │     │  ├─ mypy.py
│  │        │     │  ├─ networks.py
│  │        │     │  ├─ parse.py
│  │        │     │  ├─ plugin
│  │        │     │  │  ├─ _loader.py
│  │        │     │  │  ├─ _schema_validator.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ root_model.py
│  │        │     │  ├─ schema.py
│  │        │     │  ├─ tools.py
│  │        │     │  ├─ types.py
│  │        │     │  ├─ type_adapter.py
│  │        │     │  ├─ typing.py
│  │        │     │  ├─ utils.py
│  │        │     │  ├─ v1
│  │        │     │  │  ├─ annotated_types.py
│  │        │     │  │  ├─ class_validators.py
│  │        │     │  │  ├─ color.py
│  │        │     │  │  ├─ config.py
│  │        │     │  │  ├─ dataclasses.py
│  │        │     │  │  ├─ datetime_parse.py
│  │        │     │  │  ├─ decorator.py
│  │        │     │  │  ├─ env_settings.py
│  │        │     │  │  ├─ errors.py
│  │        │     │  │  ├─ error_wrappers.py
│  │        │     │  │  ├─ fields.py
│  │        │     │  │  ├─ generics.py
│  │        │     │  │  ├─ json.py
│  │        │     │  │  ├─ main.py
│  │        │     │  │  ├─ mypy.py
│  │        │     │  │  ├─ networks.py
│  │        │     │  │  ├─ parse.py
│  │        │     │  │  ├─ py.typed
│  │        │     │  │  ├─ schema.py
│  │        │     │  │  ├─ tools.py
│  │        │     │  │  ├─ types.py
│  │        │     │  │  ├─ typing.py
│  │        │     │  │  ├─ utils.py
│  │        │     │  │  ├─ validators.py
│  │        │     │  │  ├─ version.py
│  │        │     │  │  ├─ _hypothesis_plugin.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ validate_call_decorator.py
│  │        │     │  ├─ validators.py
│  │        │     │  ├─ version.py
│  │        │     │  ├─ warnings.py
│  │        │     │  ├─ _internal
│  │        │     │  │  ├─ _config.py
│  │        │     │  │  ├─ _core_metadata.py
│  │        │     │  │  ├─ _core_utils.py
│  │        │     │  │  ├─ _dataclasses.py
│  │        │     │  │  ├─ _decorators.py
│  │        │     │  │  ├─ _decorators_v1.py
│  │        │     │  │  ├─ _discriminated_union.py
│  │        │     │  │  ├─ _docs_extraction.py
│  │        │     │  │  ├─ _fields.py
│  │        │     │  │  ├─ _forward_ref.py
│  │        │     │  │  ├─ _generate_schema.py
│  │        │     │  │  ├─ _generics.py
│  │        │     │  │  ├─ _git.py
│  │        │     │  │  ├─ _import_utils.py
│  │        │     │  │  ├─ _internal_dataclass.py
│  │        │     │  │  ├─ _known_annotated_metadata.py
│  │        │     │  │  ├─ _mock_val_ser.py
│  │        │     │  │  ├─ _model_construction.py
│  │        │     │  │  ├─ _namespace_utils.py
│  │        │     │  │  ├─ _repr.py
│  │        │     │  │  ├─ _schema_gather.py
│  │        │     │  │  ├─ _schema_generation_shared.py
│  │        │     │  │  ├─ _serializers.py
│  │        │     │  │  ├─ _signature.py
│  │        │     │  │  ├─ _typing_extra.py
│  │        │     │  │  ├─ _utils.py
│  │        │     │  │  ├─ _validate_call.py
│  │        │     │  │  ├─ _validators.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ _migration.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ pydantic-2.12.5.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ pydantic_core
│  │        │     │  ├─ core_schema.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ _pydantic_core.pyi
│  │        │     │  └─ __init__.py
│  │        │     ├─ pydantic_core-2.41.5.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ python_multipart
│  │        │     │  ├─ decoders.py
│  │        │     │  ├─ exceptions.py
│  │        │     │  ├─ multipart.py
│  │        │     │  ├─ py.typed
│  │        │     │  └─ __init__.py
│  │        │     ├─ python_multipart-0.0.22.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE.txt
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  ├─ REQUESTED
│  │        │     │  └─ WHEEL
│  │        │     ├─ starlette
│  │        │     │  ├─ applications.py
│  │        │     │  ├─ authentication.py
│  │        │     │  ├─ background.py
│  │        │     │  ├─ concurrency.py
│  │        │     │  ├─ config.py
│  │        │     │  ├─ convertors.py
│  │        │     │  ├─ datastructures.py
│  │        │     │  ├─ endpoints.py
│  │        │     │  ├─ exceptions.py
│  │        │     │  ├─ formparsers.py
│  │        │     │  ├─ middleware
│  │        │     │  │  ├─ authentication.py
│  │        │     │  │  ├─ base.py
│  │        │     │  │  ├─ cors.py
│  │        │     │  │  ├─ errors.py
│  │        │     │  │  ├─ exceptions.py
│  │        │     │  │  ├─ gzip.py
│  │        │     │  │  ├─ httpsredirect.py
│  │        │     │  │  ├─ sessions.py
│  │        │     │  │  ├─ trustedhost.py
│  │        │     │  │  ├─ wsgi.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ requests.py
│  │        │     │  ├─ responses.py
│  │        │     │  ├─ routing.py
│  │        │     │  ├─ schemas.py
│  │        │     │  ├─ staticfiles.py
│  │        │     │  ├─ status.py
│  │        │     │  ├─ templating.py
│  │        │     │  ├─ testclient.py
│  │        │     │  ├─ types.py
│  │        │     │  ├─ websockets.py
│  │        │     │  ├─ _exception_handler.py
│  │        │     │  ├─ _utils.py
│  │        │     │  └─ __init__.py
│  │        │     ├─ starlette-0.52.1.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE.md
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ typing_extensions-4.15.0.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ typing_extensions.py
│  │        │     ├─ typing_inspection
│  │        │     │  ├─ introspection.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ typing_objects.py
│  │        │     │  ├─ typing_objects.pyi
│  │        │     │  └─ __init__.py
│  │        │     ├─ typing_inspection-0.4.2.dist-info
│  │        │     │  ├─ INSTALLER
│  │        │     │  ├─ licenses
│  │        │     │  │  └─ LICENSE
│  │        │     │  ├─ METADATA
│  │        │     │  ├─ RECORD
│  │        │     │  └─ WHEEL
│  │        │     ├─ uvicorn
│  │        │     │  ├─ config.py
│  │        │     │  ├─ importer.py
│  │        │     │  ├─ lifespan
│  │        │     │  │  ├─ off.py
│  │        │     │  │  ├─ on.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ logging.py
│  │        │     │  ├─ loops
│  │        │     │  │  ├─ asyncio.py
│  │        │     │  │  ├─ auto.py
│  │        │     │  │  ├─ uvloop.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ main.py
│  │        │     │  ├─ middleware
│  │        │     │  │  ├─ asgi2.py
│  │        │     │  │  ├─ message_logger.py
│  │        │     │  │  ├─ proxy_headers.py
│  │        │     │  │  ├─ wsgi.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ protocols
│  │        │     │  │  ├─ http
│  │        │     │  │  │  ├─ auto.py
│  │        │     │  │  │  ├─ flow_control.py
│  │        │     │  │  │  ├─ h11_impl.py
│  │        │     │  │  │  ├─ httptools_impl.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  ├─ utils.py
│  │        │     │  │  ├─ websockets
│  │        │     │  │  │  ├─ auto.py
│  │        │     │  │  │  ├─ websockets_impl.py
│  │        │     │  │  │  ├─ websockets_sansio_impl.py
│  │        │     │  │  │  ├─ wsproto_impl.py
│  │        │     │  │  │  └─ __init__.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ py.typed
│  │        │     │  ├─ server.py
│  │        │     │  ├─ supervisors
│  │        │     │  │  ├─ basereload.py
│  │        │     │  │  ├─ multiprocess.py
│  │        │     │  │  ├─ statreload.py
│  │        │     │  │  ├─ watchfilesreload.py
│  │        │     │  │  └─ __init__.py
│  │        │     │  ├─ workers.py
│  │        │     │  ├─ _compat.py
│  │        │     │  ├─ _subprocess.py
│  │        │     │  ├─ _types.py
│  │        │     │  ├─ __init__.py
│  │        │     │  └─ __main__.py
│  │        │     └─ uvicorn-0.41.0.dist-info
│  │        │        ├─ entry_points.txt
│  │        │        ├─ INSTALLER
│  │        │        ├─ licenses
│  │        │        │  └─ LICENSE.md
│  │        │        ├─ METADATA
│  │        │        ├─ RECORD
│  │        │        ├─ REQUESTED
│  │        │        └─ WHEEL
│  │        ├─ pyvenv.cfg
│  │        └─ Scripts
│  │           ├─ activate
│  │           ├─ activate.bat
│  │           ├─ Activate.ps1
│  │           ├─ deactivate.bat
│  │           ├─ f2py.exe
│  │           ├─ fastapi.exe
│  │           ├─ numpy-config.exe
│  │           ├─ pip.exe
│  │           ├─ pip3.exe
│  │           ├─ python.exe
│  │           ├─ pythonw.exe
│  │           └─ uvicorn.exe
│  ├─ package.json
│  └─ python
│     ├─ model.py
│     └─ preprocessing.py
└─ README.md

```