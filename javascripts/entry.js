require('../less/main.less');

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

/*var Entry = React.createClass({
  render: function(){
    return (
      <div className="myDiv">
        Hello Electron!
      </div>
    )
  }
});

ReactDOM.render(<Entry />, document.getElementById('content'));*/
ReactDOM.render(routes, document.getElementById('content'));
