var React = require('react');
var ModuleList = require('../components/ModuleList');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EXpandMore from 'material-ui/svg-icons/navigation/expand-more';
var ModuleListContainer = React.createClass({
  getInitialState: function () {
    return {
      null
    }
  },
  componentDidMount: function () {
  
  },
  handleUserApproval: function(id) {
    
  },
  handleMenu: function(){
    
  },
  render: function () {
    return (
        <ModuleList />
    )
  }
});

module.exports = ModuleListContainer;