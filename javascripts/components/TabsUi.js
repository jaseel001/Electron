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
            <Tab label="Qutation Entry" >
            </Tab>
          <Tab label="Invoice" >
          </Tab>
          <Tab
            label="Product"
            data-route="/login"
            /*onActive={}*/
          >
          </Tab>
          <Tab label="Sales" >
          </Tab>

        </Tabs>
       </MuiThemeProvider>
  )
}

module.exports = TabsUi;