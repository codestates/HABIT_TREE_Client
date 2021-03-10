import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SampleProvider } from './Components/LoginToggleContext';
ReactDOM.render(
  <BrowserRouter>
    <SampleProvider>
      <App />
    </SampleProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
