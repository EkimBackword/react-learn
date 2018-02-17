import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/angular-material.layouts.min.css'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
