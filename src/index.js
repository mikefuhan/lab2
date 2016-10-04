/* jshint esversion:6 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


//ReactDom.render(<App />, document.querySelector('#app'));
ReactDom.render(<Router history={browserHistory} routes={routes} />, document.querySelector('#app'));
