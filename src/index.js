import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </React.StrictMode>
);

