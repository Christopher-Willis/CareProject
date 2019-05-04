import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              required
              id="category"
              name="category"
              label="Category"
              fullWidth
              autoComplete="category"
              onChange={e => {
                if(this.state.category){
                  this.setState({category:e.target.value})
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              fullWidth
              autoComplete="description"
              onChange={e => {
                if(this.state.description){
                  this.setState({description:e.target.value})
                }
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default CategoryAndDescription;