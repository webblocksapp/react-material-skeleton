import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from '@themes';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '@store';
import { ThemeProvider } from '@mui/material';
import App from './App';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
