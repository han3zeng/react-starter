import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderPage = () => {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('root')
  );
};

renderPage();

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
if (module.hot || process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App.jsx', renderPage);
}
