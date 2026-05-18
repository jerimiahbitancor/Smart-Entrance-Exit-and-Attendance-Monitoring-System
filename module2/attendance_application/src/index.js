import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

// Polyfill for TextEncoder/TextDecoder (required for TensorFlow/face-api)
if (!global.TextEncoder) {
  try {
    const { TextEncoder, TextDecoder } = require('util');
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
    window.TextEncoder = TextEncoder;
    window.TextDecoder = TextDecoder;
  } catch (e) {
    console.warn('Could not inject util polyfills:', e);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);