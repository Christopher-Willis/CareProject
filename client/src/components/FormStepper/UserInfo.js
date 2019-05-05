import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class UserInfo extends React.Component{
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
        <div style={{padding: 20}}>
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
                if(this.props.firstName){
                  this.props.firstName(e.target.value)
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
                if(this.props.lastName){
                  this.props.lastName(e.target.value)
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="Email"
              
              onChange={e => {
                if(this.props.email){
                  this.props.email(e.target.value)
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
                if(this.props.phone){
                  this.props.phone(e.target.value)
                }
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
      </div>
    );
  }
}

export default UserInfo;