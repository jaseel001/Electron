var React = require('react');
import Draggable from 'react-draggable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import AddBox from 'material-ui/svg-icons/content/add-box';
import Attachment from 'material-ui/svg-icons/file/attachment';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import Laptop from 'material-ui/svg-icons/hardware/laptop';
import Chat from 'material-ui/svg-icons/communication/chat';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Delete from 'material-ui/svg-icons/action/delete';
import Help from 'material-ui/svg-icons/action/help';

const iconStyles = {
  margin: 10,
};

function RightMenu (props) {
  if(props.sideMenuState == true){
      return (
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
        )
  }else{
    return(
      null
    )
  }
  
}

module.exports = RightMenu;