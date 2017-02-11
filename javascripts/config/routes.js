var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var HomeContainer = require("../containers/HomeContainer");
var PromptContainer = require('../containers/PromptContainer');
var QuotationContainer = require("../containers/QuotationContainer");
var InvoiceContainer = require("../containers/InvoiceContainer");
var ProductContainer = require("../containers/ProductContainer");
var SalesContainer = require("../containers/SalesContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='login' component={HomeContainer} />
      <Route path='user/' component={PromptContainer}>
          <IndexRoute component={QuotationContainer} />
          <Route path='Quotation' component={QuotationContainer} />
          <Route path='invoice' component={InvoiceContainer} />
          <Route path='product' component={ProductContainer} />
          <Route path='sales' component={SalesContainer} />
      </Route>
    </Route>
  </Router>
);

module.exports = routes;