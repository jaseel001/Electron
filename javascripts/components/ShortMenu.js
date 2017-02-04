var React = require('react');
var React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EXpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';

const iconStyles = {
  margin: 10,
};

function ShortMenu (props) {
  return (
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
  )
}

module.exports = ShortMenu;