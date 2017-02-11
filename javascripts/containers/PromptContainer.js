var React = require('react');
var ShortMenuContainer = require('./ShortMenuContainer');
var ModuleListContainer = require('./ModuleListContainer');
var TopMenuContainer = require('./TopMenuContainer');
var TabsUiContainer = require('./TabsUiContainer');
var QuotationContainer = require('./QuotationContainer');
var RightMenuContainer = require('./RightMenuContainer');
var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log(this.props);
    return {
      username: ''
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
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

module.exports = PromptContainer;