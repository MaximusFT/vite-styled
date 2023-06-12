import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import OneTheme from './theme-one';
import TwoTheme from './theme-two';
import './index.css';

const themeBySiteName = {
  one: OneTheme,
  two: TwoTheme,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeBySiteName[import.meta.env.VITE_JSS_SITE_NAME?.toLowerCase()]}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
