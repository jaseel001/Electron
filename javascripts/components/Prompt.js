var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import EXpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Close from 'material-ui/svg-icons/navigation/close';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Delete from 'material-ui/svg-icons/action/delete';
import Help from 'material-ui/svg-icons/action/help';
import Search from 'material-ui/svg-icons/action/search';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import AddBox from 'material-ui/svg-icons/content/add-box';
import Attachment from 'material-ui/svg-icons/file/attachment';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import Laptop from 'material-ui/svg-icons/hardware/laptop';
import Chat from 'material-ui/svg-icons/communication/chat';

import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const iconStyles = {
  margin: 10,
};


function Prompt (props) {
  return (
    <div className="col-sm-12 padding-nil">
      <div className="col-sm-2 padding-nil right-div">
        <div className="col-sm-12 padding-nil shortcut-menu">
          <div className="col-sm-12 padding-nil menu-head">
              Shortcuts
              <MuiThemeProvider>
                <EXpandMore className="pull-right"/>
              </MuiThemeProvider>
          </div>
          <div className="col-sm-12 padding-nil menu-icons">
            <MuiThemeProvider>
              <ActionHome style={iconStyles} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <ActionFlightTakeoff style={iconStyles} color={red500} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <FileCloudDownload style={iconStyles} color={yellow500} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <HardwareVideogameAsset style={iconStyles} color={blue500} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <ActionHome style={iconStyles} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <ActionFlightTakeoff style={iconStyles} color={red500} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <FileCloudDownload style={iconStyles} color={yellow500} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <HardwareVideogameAsset style={iconStyles} color={blue500} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <ActionHome style={iconStyles} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <ActionFlightTakeoff style={iconStyles} color={red500} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <FileCloudDownload style={iconStyles} color={yellow500} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <HardwareVideogameAsset style={iconStyles} color={blue500} />
            </MuiThemeProvider>
          </div>
        </div>
        <div className="col-sm-12 padding-nil module-list">
          <div className="col-sm-12 padding-nil module-head">
            Module List
            <MuiThemeProvider>
                <EXpandMore className="pull-right"/>
            </MuiThemeProvider>
          </div>
          <div className="col-sm-12 padding-nil module-details">
          </div>
        </div>
        <div className="col-sm-12 padding-nil user-details">
          <MuiThemeProvider>
            <List>
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
      <div className="col-sm-10 padding-nil">
          <div className="col-sm-12 padding-nil top-menu">
            <MuiThemeProvider>
              <ArrowBack style={iconStyles} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <ArrowForward style={iconStyles} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <Refresh style={iconStyles} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <Favorite style={iconStyles} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <ActionHome style={iconStyles} />
            </MuiThemeProvider>
            <MuiThemeProvider>
              <Close style={iconStyles} />
            </MuiThemeProvider>
          </div>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

module.exports = Prompt