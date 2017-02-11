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
  handleBack: function(e){
    window.history.back();
  },
  handleForward: function(e){
    window.history.forward();
  },
  handleRefresh: function(e){
    location.reload();
  },
  handleClose: function(e){
    var win = window.open("about:blank", "_self");
    win.close();
  },
  render: function () {
    return (
      <TopMenu backButtonClick={this.handleBack} 
      forwardButtonClick={this.handleForward}
      refreshButtonClick={this.handleRefresh}
      closeButtonClicked={this.handleClose}/>
    )
  }
});

module.exports = TopMenuContainer;