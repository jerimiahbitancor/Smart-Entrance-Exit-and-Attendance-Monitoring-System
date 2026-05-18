const { app, BrowserWindow, session } = require("electron");
const path = require("path");

// Fix permission errors
const customCache = path.join(__dirname, "electron-cache");
app.setPath('userData', customCache);
app.setPath('cache', customCache);
app.commandLine.appendSwitch('disable-gpu-cache');
app.commandLine.appendSwitch('disable-http-cache');

// Add these to fix Node.js module issues
app.commandLine.appendSwitch('enable-features=SharedArrayBuffer');
app.commandLine.appendSwitch('disable-features=OutOfBlinkCors');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      media: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
    },
  });

  win.setMenuBarVisibility(false);
  win.loadURL("http://localhost:5173");
  win.maximize();
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === "media") {
      callback(true);
    } else {
      callback(false);
    }
  });

  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});