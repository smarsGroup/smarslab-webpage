import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const container = document.getElementById('root');

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, <StrictApp />);
} else{
  const root = ReactDOM.createRoot(container);
  root.render(<StrictApp />);
}
