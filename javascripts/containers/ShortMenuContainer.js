var React = require('react');
var ShortMenu = require('../components/ShortMenu');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EXpandMore from 'material-ui/svg-icons/navigation/expand-more';
var ShortMenuContainer = React.createClass({
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
      <div className="col-sm-12 padding-nil shortcut-menu">
        <div className="col-sm-12 padding-nil menu-head">
            Shortcuts
            <MuiThemeProvider>
              <EXpandMore className="pull-right"/>
            </MuiThemeProvider>
        </div>
        <ShortMenu />
      </div>
    )
  }
});

module.exports = ShortMenuContainer;