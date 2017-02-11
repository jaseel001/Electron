var React = require('react');
var PropTypes = React.PropTypes;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

const iconStyles = {
  margin: 10,
};

function TabsUi (props) {
       var TabsUi = props.items.map(function(tab) {
          return (
            <Tab key={tab.name} label={tab.name} 
                 onClick={props.onClickTabs.bind(this,tab.route)}>
            </Tab>
          );
       });
       return (
         <MuiThemeProvider>
            <Tabs>
              {TabsUi}

          </Tabs>
         </MuiThemeProvider>
      )
}

TabsUi.propTypes = {
  onClickTabs: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}

module.exports = TabsUi;