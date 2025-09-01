// src/main.tsx (or src/index.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

async function prepare() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser');
    await worker.start();
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
