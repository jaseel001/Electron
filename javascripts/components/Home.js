var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);

function Home (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg.transparentBg}>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className='form-control'
              onChange={props.onUpdateUsername}
              placeholder='Username'
              type='text'
              value={props.username} />
            <input
              className='form-control'
              onChange={props.onUpdatePassword}
              placeholder='Password'
              type='password'
              value={props.password} style={transparentBg.topmargin}/>
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success btn-login"
              type="submit">
                Login
            </button>
          </div>
        </form>
      </div>
      <div className="col-sm-12">
        <Link to='/register'>
          <p>if you have no account register here</p>
          <MuiThemeProvider>
            <MyAwesomeReactComponent />
          </MuiThemeProvider>
        </Link>
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