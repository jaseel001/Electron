var React = require('react');
var ModuleList = require('../components/ModuleList');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EXpandMore from 'material-ui/svg-icons/navigation/expand-more';
import { connect } from 'react-redux';
import store from '../store';
import { moduleListChange } from '../actions/main-layout-actions';
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
  handleModuleList: function(){
    store.dispatch(moduleListChange(!this.props.moduleListState));
  },
  render: function () {
    return (
        <ModuleList moduleListOption={this.handleModuleList} 
        moduleListState={this.props.moduleListState}/>
    )
  }
});

const mapStateToProps = function(store) {
  return {
    moduleListState: store.mainLayoutState.moduleListState
  };
};

module.exports = connect(mapStateToProps)(ModuleListContainer);