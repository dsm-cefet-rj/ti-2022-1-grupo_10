import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
*@module index
*/

/**
* componente de onde é feito a renderização do componente App
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

