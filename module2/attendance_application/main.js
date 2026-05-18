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

  // Inject polyfills BEFORE page loads
  win.webContents.session.webRequest.onBeforeRequest({urls: ['*']}, (details, callback) => {
    callback({});
  });

  win.webContents.on('did-start-loading', async () => {
    try {
      await win.webContents.executeJavaScript(`
        // Direct require from Electron
        const { TextEncoder, TextDecoder } = require('util');
        
        // Set globally BEFORE any modules load
        if (!global.TextEncoder) {
          global.TextEncoder = TextEncoder;
          global.TextDecoder = TextDecoder;
        }
        if (!window.TextEncoder) {
          window.TextEncoder = TextEncoder;
          window.TextDecoder = TextDecoder;
        }
        
        // Also make util.TextEncoder work for TensorFlow
        if (typeof require !== 'undefined') {
          const util = require('util');
          util.TextEncoder = TextEncoder;
          util.TextDecoder = TextDecoder;
        }
        
        console.log('Polyfills injected successfully!', {
          hasGlobalEncoder: !!global.TextEncoder,
          hasWindowEncoder: !!window.TextEncoder
        });
      `);
    } catch (e) {
      console.error('Failed to inject polyfills:', e);
    }
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