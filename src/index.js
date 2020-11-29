import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
