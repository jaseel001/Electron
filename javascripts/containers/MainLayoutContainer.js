var React = require('react');
var ShortMenuContainer = require('./ShortMenuContainer');
var ModuleListContainer = require('./ModuleListContainer');
var TopMenuContainer = require('./TopMenuContainer');
var TabsUiContainer = require('./TabsUiContainer');
var QuotationContainer = require('./QuotationContainer');
var RightMenuContainer = require('./RightMenuContainer');
var MainLayoutContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
    <div className="col-sm-12 padding-nil">
      <div className="col-sm-2 padding-nil right-div">
        <div className="col-sm-12 padding-nil layout-logo">
          <p className="logo">e<span className="logo-r">R</span>p</p>
        </div>
        <ShortMenuContainer />
        <ModuleListContainer />
      </div>
      <div className="col-sm-10 padding-nil">
          <TopMenuContainer />
          <div className="col-sm-12 padding-nil top-navbar">
              <TabsUiContainer />
          </div>
          <div className="col-sm-12 padding-nil main-div">
              {this.props.children}
              <RightMenuContainer />
          </div>
      </div>
    </div>
    )
  }
});

module.exports = MainLayoutContainer;