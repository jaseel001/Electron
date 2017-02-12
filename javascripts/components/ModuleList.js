var React = require('react');
var React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EXpandMore from 'material-ui/svg-icons/navigation/expand-more';
import EXpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';

const iconStyles = {
  margin: 10,
};

function ModuleList (props) {
  if(props.moduleListState == true){
    return (
      <div className="col-sm-12 padding-nil module-list">
        <div className="col-sm-12 padding-nil module-head">
          Module List
          <MuiThemeProvider>
            <EXpandLess className="pull-right pointer-icon"
            onClick={props.moduleListOption}/>
            </MuiThemeProvider>
            </div>
            <div className="col-sm-12 padding-nil module-details">
            </div>
      </div>
    )
  }
  else{
    return(
      <div className="col-sm-12 padding-nil module-list">
        <div className="col-sm-12 padding-nil module-head">
          Module List
          <MuiThemeProvider>
            <EXpandMore className="pull-right pointer-icon"
            onClick={props.moduleListOption}/>
            </MuiThemeProvider>
            </div>
      </div>
    )
  }
}

module.exports = ModuleList;