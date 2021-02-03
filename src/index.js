import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import { ProfileProvider } from './components/Context/ProfileContext/ProfileContext';
import { ClientProvider } from './components/Context/ClientContext/ClientContex';

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
