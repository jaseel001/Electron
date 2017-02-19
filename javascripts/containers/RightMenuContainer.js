var React = require('react');
var RightMenu = require('../components/RightMenu');
import { connect } from 'react-redux';

var RightMenuContainer = React.createClass({
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
      <RightMenu sideMenuState={this.props.sideMenuState}/>
    )
  }
});

const mapStateToProps = function(store) {
  return {
    sideMenuState: store.mainLayoutState.sideMenuState
  };
};

module.exports = connect(mapStateToProps)(RightMenuContainer);