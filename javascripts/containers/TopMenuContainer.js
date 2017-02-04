var React = require('react');
var TopMenu = require('../components/TopMenu');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EXpandMore from 'material-ui/svg-icons/navigation/expand-more';
var TopMenuContainer = React.createClass({
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
      <TopMenu />
    )
  }
});

module.exports = TopMenuContainer;