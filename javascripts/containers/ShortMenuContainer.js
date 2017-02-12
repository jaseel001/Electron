var React = require('react');
var ShortMenu = require('../components/ShortMenu');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EXpandMore from 'material-ui/svg-icons/navigation/expand-more';
import { connect } from 'react-redux';
import store from '../store';
import { shortMenuChange } from '../actions/main-layout-actions';
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
  handleShortMenu: function(){
    store.dispatch(shortMenuChange(!this.props.shortMenuState));
  },
  render: function () {
    return (
        <ShortMenu shortMenuOption={this.handleShortMenu} 
        shortMenuState={this.props.shortMenuState}/>
    )
  }
});

const mapStateToProps = function(store) {
  return {
    shortMenuState: store.mainLayoutState.shortMenuState
  };
};


module.exports = connect(mapStateToProps)(ShortMenuContainer);;