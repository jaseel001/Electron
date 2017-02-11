var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


function Home (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg.transparentBg}>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser} className="col-sm-12">
          <p className="logo">e<span className="logo-r">R</span>p</p>
          <div className="form-group col-sm-12">
            <MuiThemeProvider>
              <TextField
                  hintText="Username"
                  onChange={props.onUpdateUsername}
                  value={props.username}
              />
            </MuiThemeProvider>
            <br />
            <MuiThemeProvider>
              <TextField
                  hintText="Password"
                  onChange={props.onUpdatePassword}
                  type='password'
                  value={props.password}
              />
            </MuiThemeProvider>
          </div>
          <br />
          <div className="form-group col-sm-12">
            <MuiThemeProvider>
              <RaisedButton label="Login"
                            type="submit" />
            </MuiThemeProvider>
          </div>
        </form>
      </div>
    </div>
  )
}

Home.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUsername: PropTypes.func.isRequired,
  onUpdatePassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

module.exports = Home