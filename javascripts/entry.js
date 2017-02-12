require('../less/main.less');
import store from './store';
import { Provider } from 'react-redux';

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

//ReactDOM.render(routes, document.getElementById('content'));

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('content')
);
