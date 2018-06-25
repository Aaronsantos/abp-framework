import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Framework from './Framework/Framework'
import './assets/css/reset.css'
import './assets/css/framework.css'
import './assets/fontawesome-free-5.1.0-web/css/all.css'
import './assets/animate/animate.css'

ReactDOM.render(<Framework />, document.getElementById('root'));
registerServiceWorker();
