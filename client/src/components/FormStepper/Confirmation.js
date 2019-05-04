import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 20
  },
  boxes: {
    padding: 20
  }
});

function ConfirmPage(props) {
  const { classes } = props;
  return (
    <div className={this.state.boxes}>
      <div className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Confirm Your Information!
        </Typography>
        <Typography component="p">
            <List>
                <ListItem>
                   First Name: {props.firstName}
                </ListItem>
                <ListItem>
                    Last Name: {props.lastName}
                </ListItem>
                <ListItem>
                    Email: {props.email}
                </ListItem>
                <ListItem>
                    Phone:{props.phone}
                </ListItem>
                <ListItem>
                    Category: {props.category}
                </ListItem>
                <ListItem>
                    Description: {props.description}
                </ListItem>
                <ListItem>
                    Days: {props.days}
                </ListItem>
                <ListItem>
                    Time: {props.startDate} - {props.endDate}
                </ListItem>
                <ListItem>
                    Location: {props.location}
                </ListItem>
            </List>
        </Typography>
      </div>
    </div>
  );
}

ConfirmPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmPage);