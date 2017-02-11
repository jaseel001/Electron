var React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

const iconStyles = {
  margin: 10,
};

function TabsUi (props) {
  return (
       <MuiThemeProvider>
          <Tabs>
            <Tab label="Qutation Entry" data-route="/user/quotation">
            </Tab>
          <Tab label="Invoice" data-route="/user/invoice">
          </Tab>
          <Tab
            label="Product"
            data-route="/user/product"
            /*onActive={}*/
          >
          </Tab>
          <Tab label="Sales" data-route="/user/sales">
          </Tab>

        </Tabs>
       </MuiThemeProvider>
  )
}

module.exports = TabsUi;