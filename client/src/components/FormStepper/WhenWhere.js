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
import "react-datepicker/dist/react-datepicker.css"


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 150,
    },
    root: {
        display: 'flex',
      },
    TextField: {
        margin: theme.spacing.unit * 3,
      },
    inline: {
      display: 'inline-block',
      fontSize: 16,
    },
    boxes:{
      padding: 20
    },
  });



class WhenWhere extends React.Component{
    constructor(props){
      super(props);
      this.classes = props.classes;
      this.state = {
        days: {
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
        },
        startDate: new Date(),
        endDate: new Date(),
        location: '',
        organization: '',
        daysMap: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        recurrence: '',
    };
      this.handleChangeTime = this.handleChangeTime.bind(this);
      this.handleChangeTimeEnd = this.handleChangeTimeEnd.bind(this);

      this.handleCheckbox = name => event => {
        this.props.addDays[name](event.target.checked);
      };

      this.handleChanges = event => {
        this.props[event.target.name](event.target.value);
      };
    }
    hours12(date) { 
      return (date.getHours() + 24) % 12 || 12; 
    }
    formatTime(d) {
      let date = new Date(d)
      let minutes = ('0'+ date.getMinutes()).slice(-2)
      if (date.getHours() > 11) {
        return this.hours12(date) + ':' + minutes + 'PM'
      }  else {
        return this.hours12(date) + ':' + minutes + 'AM'
      }
    }
    handleChangeTime(date) {
      let formattedTime = this.formatTime(date)
      this.props.startDate(formattedTime)
    }

    handleChangeTimeEnd(date) {
      let formattedTime = this.formatTime(date)
      this.props.endDate(formattedTime)
    }

    render(props){
      return (
        <div className={this.classes.boxes}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Donate Time
          </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="location"
                        type="location"
                        name="addLocation"
                        label="Location"
                        onChange={e => {
                            this.props.addLocation(e.target.value)
                        }}
                        placeholder="City"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="organization"
                        type="organization"
                        name="organization"
                        label="Church"
                        onChange={e => {
                        if(this.state.organization){
                            this.state.organization(e.target.value)
                        }
                        }}
                        placeholder="City"
                    />
                </Grid>
            <Grid item xs={12}>
              <div>
                {this.state.daysMap.map((day, i) => {
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
            <div>
              <InputLabel htmlFor="recurrence">How Often?</InputLabel>
              <Select
                value={this.state.recurrence}
                onChange={this.handleChanges}
                inputProps={{
                  name:'addRecurrence',
                  id:'recurrence',
                }}
                  >
                <MenuItem value={1}> Every Week.</MenuItem>
                <MenuItem value={2}> Bi-Weekly</MenuItem>
                <MenuItem value={3}> Monthly</MenuItem>
              </Select> 
          </div>         
            </Grid>
          </Grid>
        </React.Fragment>
        </div>
      );
    }
}
export default withStyles(styles)(WhenWhere);