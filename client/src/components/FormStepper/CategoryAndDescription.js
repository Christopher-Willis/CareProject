import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class CategoryAndDescription extends React.Component{
  constructor(props){
    super(props);
    this.classes = props.classes;
    this.state = {
      category:'',
      description: ''
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
              id="category"
              name="category"
              label="Type of Service: ex: plumber or electrician"
              fullWidth
              autoComplete="category"
              onChange={e => {
                if(this.props.category){
                  this.props.category(e.target.value)
              }}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              label="Description of Service or Specialty"
              fullWidth
              autoComplete="description"
              onChange={e => {
                if(this.props.description){
                  this.props.description(e.target.value)
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

export default CategoryAndDescription;