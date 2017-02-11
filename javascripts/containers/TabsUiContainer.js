var React = require('react');
var TabsUi = require('../components/TabsUi');
var TabsUiContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      tablist: [{name:"Qutation Entry",route:"/user/quotation"},
      {name:"Invoice",route:"/user/invoice"},
      {name:"Product",route:"/user/product"},
      {name:"Sales",route:"user/sales"}]
    }
  },
  componentDidMount: function () {
  
  },
  handleUserApproval: function(id) {
    
  },
  handleTabs: function(params){
    this.context.router.push({
      pathname: params,
      query: {
        //data: user
      }
    })
  },
  render: function () {
    return (
      <TabsUi items={this.state.tablist}
      onClickTabs={this.handleTabs} />
    )
  }
});

module.exports = TabsUiContainer;