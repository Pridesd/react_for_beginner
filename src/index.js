import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './Button';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button text = "Click" />
  </React.StrictMode>,
  document.getElementById('root')
);