import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { CovidProvider } from './contexts/CovidContext.js';

ReactDOM.render(
  <CovidProvider>
    <App />
  </CovidProvider>,
  document.getElementById('root'),
);
