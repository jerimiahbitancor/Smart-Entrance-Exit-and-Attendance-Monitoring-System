const { app, BrowserWindow, session } = require('electron');
const path = require('path');

// Set custom user data
app.setPath('userData', path.join(__dirname, 'electron-data'));

// Critical: Enable Node.js integration fully
app.commandLine.appendSwitch('enable-features=SharedArrayBuffer');
app.commandLine.appendSwitch('disable-features=OutOfBlinkCors');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      allowRunningInsecureContent: true,
    },
  });

  // Inject polyfill BEFORE page loads
  win.webContents.on('did-start-loading', async () => {
    await win.webContents.executeJavaScript(`
      // Direct require from Electron
      const { TextEncoder, TextDecoder } = require('util');
      global.TextEncoder = TextEncoder;
      global.TextDecoder = TextDecoder;
      window.TextEncoder = TextEncoder;
      window.TextDecoder = TextDecoder;
      console.log('Polyfills injected!');
    `);
  });

  win.loadURL('http://localhost:3000');
  win.webContents.openDevTools();
  win.maximize();
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    callback(permission === 'media');
  });
  createWindow();
});