var React = require('react');
//var Tabs = require('Tabs');
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
import Recent from 'material-ui/svg-icons/notification/folder-special';

import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import {Tabs, Tab} from 'material-ui/Tabs';

import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import TextField from 'material-ui/TextField';




const iconStyles = {
  margin: 10,
};

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  floatStyle: {
    color: '#000',
  }
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs>
      <Tab label="Qutation Entry" >
      </Tab>
    <Tab label="Invoice" >
    </Tab>
    <Tab
      label="Product"
      data-route="/login"
      onActive={handleActive}
    >
    </Tab>
    <Tab label="Sales" >
    </Tab>

  </Tabs>
);


function Prompt (props) {
  return (
    <div className="col-sm-12 padding-nil">
      <div className="col-sm-2 padding-nil right-div">
        <div className="col-sm-12 padding-nil layout-logo">
          <p className="logo">e<span className="logo-r">R</span>p</p>
        </div>
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
      </div>
      <div className="col-sm-10 padding-nil">
          <div className="col-sm-12 padding-nil top-menu">
            <div className="col-sm-10 padding-nil">
              <MuiThemeProvider>
                <IconButton tooltip="Back" tooltipPosition="left">
                  <ArrowBack style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Forward" tooltipPosition="left">
                  <ArrowForward style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Refresh" tooltipPosition="left-center">
                  <Refresh style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Recent" tooltipPosition="left">
                  <Recent style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Favorite" tooltipPosition="left">
                  <Favorite style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Home" tooltipPosition="left">
                  <ActionHome style={iconStyles} className="icon-style"/>
                </IconButton>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <IconButton tooltip="Close" tooltipPosition="left">
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
          <div className="col-sm-12 padding-nil top-navbar">
            <MuiThemeProvider>
               <TabsExampleSimple />
            </MuiThemeProvider>
          </div>
          <div className="col-sm-12 padding-nil main-div">
            <div className="col-sm-12 padding-nil data-container">
              <div className="col-sm-12 padding-nil sub-heading">
                  Qutation Entry
              </div>
              <div className="col-sm-12 padding-nil quatation-top">
                <MuiThemeProvider>
                  <div>
                    <TextField
                        hintText="Quotation No"
                        floatingLabelText="Quotation No"
                        floatingLabelFixed={true}
                        floatingLabelStyle={style.floatStyle}
                        />
                    <TextField
                        hintText="Customer No"
                        floatingLabelText="Customer No"
                        floatingLabelFixed={true}
                        floatingLabelStyle={style.floatStyle}
                        />
                    <TextField
                        hintText="Customer Name"
                        floatingLabelText="Customer Name"
                        floatingLabelFixed={true}
                        floatingLabelStyle={style.floatStyle}
                        />
                  </div>
                </MuiThemeProvider>
              </div>
            </div>
            <Draggable defaultPosition={{x: 0, y: 0}}  bounds="parent">
            <div className="col-sm-1 padding-nil side-icons">
                <MuiThemeProvider>
                  <IconButton tooltip="Search" tooltipPosition="top-center">
                    <Search style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Populate" tooltipPosition="top-center">
                    <Refresh style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Add" tooltipPosition="top-center">
                    <AddBox style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Duplicate" tooltipPosition="top-center">
                    <ContentCopy style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Delete" tooltipPosition="top-center">
                    <Delete style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Zoom" tooltipPosition="top-center">
                    <ZoomIn style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Chat" tooltipPosition="top-center">
                    <Chat style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Attachments" tooltipPosition="top-center">
                    <Attachment style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Output" tooltipPosition="top-center">
                    <FileDownload style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Sys Info" tooltipPosition="top-center">
                    <Laptop style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
                <MuiThemeProvider>
                  <IconButton tooltip="Help" tooltipPosition="top-center">
                    <Help style={iconStyles} className="icon-style"/>
                  </IconButton>
                </MuiThemeProvider>
            </div>
          </Draggable>
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