import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Note: .tsx extension is implied by Vite/TypeScript
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Keep this for global styles if needed
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Code-bear/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);