var React = require('react');
var PropTypes = React.PropTypes;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Close from 'material-ui/svg-icons/navigation/close';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Recent from 'material-ui/svg-icons/notification/folder-special';
import ActionHome from 'material-ui/svg-icons/action/home';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const iconStyles = {
  margin: 10,
};

function TopMenu (props) {
  return (
      <div className="col-sm-12 padding-nil top-menu">
            <div className="col-sm-10 padding-nil">
              <MuiThemeProvider>
                <IconButton tooltip="Back" tooltipPosition="bottom-center" onClick={props.backButtonClick}>
                  <ArrowBack style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Forward" tooltipPosition="bottom-center" onClick={props.forwardButtonClick}>
                  <ArrowForward style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Refresh" tooltipPosition="bottom-center" onClick={props.refreshButtonClick}>
                  <Refresh style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Recent" tooltipPosition="bottom-center">
                  <Recent style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Favorite" tooltipPosition="bottom-center">
                  <Favorite style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Home" tooltipPosition="bottom-center">
                  <ActionHome style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Close" tooltipPosition="bottom-center" onClick={props.closeButtonClicked}>
                  <Close style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
            </div>
            <div className="col-sm-2 padding-nil user-details pull-right">
              <MuiThemeProvider>
                <List className="padding-0">
                  <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar src="images/uxceo-128.jpg" />
                    }
                  >
                  Username
                  </ListItem>
                </List>
              </MuiThemeProvider>
            </div>
          </div>
  )
}

TopMenu.PropTypes = {
  backButtonClick: PropTypes.func.isRequired,
  forwardButtonClick: PropTypes.func.isRequired,
  refreshButtonClick: PropTypes.func.isRequired,
  closeButtonClicked: PropTypes.func.isRequired,

}

module.exports = TopMenu;