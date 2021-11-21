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

if (module.hot) {
  module.hot.accept('./App.jsx', renderPage);
}
