import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import { FormGroup, FormControl } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css"


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    root: {
        display: 'flex',
      },
    formControl: {
        margin: theme.spacing.unit * 3,
      },
    inline: {
      display: 'inline-block',
    }
  });



class TradeAndTimeForm extends React.Component{
    constructor(props){
      super(props);
      this.classes = props.classes;
      this.state = {
        m: false,
        t: false,
        w: false,
        th: false,
        f: false,
        name:'',
        email:'',
        phone:'',
        category:'',
        location:'',
        days: [],
        rotation: 0,
        rotationDay: '',
        labelWidth: 0,
        startDate: new Date(),
        endDate: new Date(),
        description:''
      };
      this.handleChangeTime = this.handleChangeTime.bind(this);
      this.handleChangeTimeEnd = this.handleChangeTimeEnd.bind(this);
      this.findDays = this.findDays.bind(this);


      this.handleCheckbox = name => event => {
        this.setState({ [name]: event.target.checked });
      };

      this.handleChanges = event => {
      this.setState({ [event.target.name]: event.target.value });
      };
    }
  
    handleChangeTime(date) {
      this.setState({
        startDate: date
      });
    }

    handleChangeTimeEnd(date) {
      this.setState({
        endDate: date
      });
    }

    componentDidMount() {
      this.setState({
        labelWidth: 30,
      });
    }
    
    findDays(){
      let days = []
      if(this.state.m === true){
        days.push('m')
      }
      if(this.state.t === true){
        days.push('t')
      }
      if(this.state.w === true){
        days.push('w')
      }
      if(this.state.th === true){
        days.push('h')
      }
      if(this.state.f === true){
        days.push('f')
      }
      return days.join('')
    }

    // body object is for tradeAndTime model
    handleSubmit(e) {
      e.preventDefault();
      let data = {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name:this.state.name,
          email:this.state.email,
          phone:this.state.phone,
          category:this.state.category,
          location:this.state.location,
          days:this.findDays(),
          startTime:this.state.startDate,
          endTime:this.state.endDate,
          description:this.state.description,
        })
      }
  
      fetch("localhost:3001", data).then((res)=>{
        return res.json();
      //   fetch('/api/schedule/add', {
      //     method: 'POST',
      //     headers: {
      //       "Content-Type": "application/json" 
      //     },
      //     body: JSON.stringify(data)
      //   }).then((response) => {
      //     this.props.getSchedule()
      //   })
      })
    }

    render(props){
      return (
        <div>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Donate Time
          </Typography>
          <Grid container spacing={24}>
          <FormGroup className={this.classes.boxes}>
        <FormLabel>
          First Name </FormLabel>
          <FormControl
            required={true}
            className={this.classes.boxSize}
            type="firstName"
            name="firstName"
            onChange={e => {
              if(this.props.firstName){
                this.props.firstName(e.target.value)
              }
            }}
            placeholder=" Enter First Name"
          />
        </FormGroup>

          <FormGroup className={this.classes.boxes}>
           <FormLabel>Last Name </FormLabel>
          <FormControl
            required={true}
            className={this.classes.boxSize}
            type="lastName"
            name="lastName"
            onChange={e => {
              if(this.props.lastName){
                this.props.lastName(e.target.value)
              }
            }}
            placeholder=" Enter Last Name"
            // value={this.state.lastName}
          />
           </FormGroup>

          <FormGroup className={this.classes.boxes}>
           <FormLabel>Email </FormLabel>
          <FormControl
            required={true}
            className={this.classes.boxSize}
            type="email"
            name="email"
            onChange={e => {
              if(this.props.email){
                this.props.email(e.target.value)
              }
            }}
            placeholder=" Enter Email Address"
            // value={this.state.email}
          />
        </FormGroup>
        <FormGroup className={this.classes.boxes}>
           <FormLabel>location </FormLabel>
          <FormControl
            required={true}
            className={this.classes.boxSize}
            type="location"
            name="location"
            onChange={e => {
              if(this.props.location){
                this.props.location(e.target.value)
              }
            }}
            placeholder=" Enter location Address"
            // value={this.state.location}
          />
        </FormGroup>
            <Grid item xs={12}>
              {/* <FormLabel>Option 1 </FormLabel> */}
              <div>
                {this.state.days.map((day, i) => {
                  return <div key={i} className={this.classes.inline}>
                  <div className={this.classes.inline}>{day}</div>
                  <Checkbox 
                  className={this.classes.inline}
                  checked={this.state.day}
                  onChange={this.handleCheckbox(day)}
                  value={this.state.day}
                  color="primary"
                />
                </div>
                })}
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Start Time </FormLabel>
              <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChangeTime}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={1}
                  dateFormat="h:mm aa"
                  timeCaption="Time"
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>End Time </FormLabel>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChangeTimeEnd}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={1}
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                />
            </Grid>
            {/* <FormLabel>Option 2 </FormLabel> */}
            <Grid item xs={12}>
            <div>
              <InputLabel htmlFor="age-simple">How often?</InputLabel>
              <Select
                value={this.state.rotation}
                onChange={this.handleChanges}
                inputProps={{
                  name: 'rotation',
                  id: 'rotation',
                }}
                  >
                <MenuItem value={1}>Every Week.</MenuItem>
                <MenuItem value={2}>Bi-Weekly</MenuItem>
                <MenuItem value={3}>Monthly</MenuItem>
              </Select> 
          </div>         
            </Grid>
            <Button
            variant="contained"
            color="primary"
            onClick={(e) => this.handleSubmit(e)}
            // className={classes.button}
            >
            Add To Our Schedule
            </Button>
          </Grid>
        </React.Fragment>
        </div>
      );
    }
}
export default withStyles(styles)(TradeAndTimeForm);