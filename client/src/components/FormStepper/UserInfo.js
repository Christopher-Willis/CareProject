import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class UserInfo extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
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
                  this.props.addFirstName(e.target.value)
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
                  this.props.addLastName(e.target.value)
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
                  this.props.addEmail(e.target.value)
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
                  this.props.addPhone(e.target.value)
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