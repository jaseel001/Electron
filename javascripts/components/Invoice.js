var React = require('react');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

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

function Invoice (props) {
  return (
       <div className="col-sm-12 padding-nil data-container">
              <div className="col-sm-12 padding-nil sub-heading">
                  Invoice Entry
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
  )
}

module.exports = Invoice;