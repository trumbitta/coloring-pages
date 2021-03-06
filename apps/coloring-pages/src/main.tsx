import React from 'react';
import ReactDOM from 'react-dom';

// Third Parties
import { Normalize } from 'styled-normalize';

// Components
import { App } from './app/app.component';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
