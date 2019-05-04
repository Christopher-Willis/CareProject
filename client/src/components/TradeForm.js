import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class AddressForm extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {
      firstName:'',
      lastName: '',
      email:'',
      phone:'',
    };
  }

    render(props){
      return ( 
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
              onChange={e => {
                if(this.state.firstName){
                  this.setState({firstName:e.target.value})
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
              onChange={e => {
                if(this.state.lastName){
                  this.setState({lastName:e.target.value})
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="Email"
              
              onChange={e => {
                if(this.state.email){
                  this.setState({email:e.target.value})
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              maxLength="10"
              required
              id="tel"
              name="tel"
              label="Phone Number"
              fullWidth
              autoComplete="telephone"
              onChange={e => {
                if(this.state.phone){
                  this.setState({phone:e.target.value})
                }
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AddressForm;