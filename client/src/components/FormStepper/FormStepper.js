import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";

import CategoryAndDescription from "../../containers/CategoryAndDescriptionContainer";
import UserInfo from "../../containers/UserInfoContainer";
import WhenWhere from "../../containers/WhenWhereContainer";
import Confirmation from "../../containers/ConfirmationContainer"


const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginRight: theme.spacing.unit,
    margin: 10,
    paddingBottom: 10
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

function getSteps() {
  return ['Personal Info', 'Service', 'Time & Location', 'Confirm'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UserInfo/>;
    case 1:
      return <CategoryAndDescription/>;
    case 2:
      return <WhenWhere/>
    case 3:
    return <Confirmation/>  
    default:
      return 'Unknown step';
  }
}

class FormStepper extends React.Component {
  state = {
    activeStep: 0,
    completed: {},
    warning: true,
    madePost: false
  };

  totalSteps = () => getSteps().length;

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    });
  };

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      'createdDate':new Date(),
      'firstName':this.props.firstName,
      'lastName':this.props.lastName,
      'email':this.props.email,
      'phone':this.props.phone,
      'category':this.props.category,
      'location':this.props.location,
      'startDate':this.props.startDate,
      'endDate':this.props.endDate,
      'description':this.props.description
    }
    console.log(data)

    let notValid = Object.values(data).filter(x => x === '').length > 0
    if(notValid){
      return alert('you are missing a field')
    }
    fetch('http://localhost:3001/things', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(data)
    }).then(()=>{
      this.setState({
        madePost: true
      })
    });
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps(); 
    const { activeStep } = this.state;
    if(this.state.madePost){
      return <Redirect to='/'/>
    }
    return (
        <main className={classes.layout}>
    <Card className={classes.root}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const props = {};
                    const labelProps = {};
                    return (
                    <Step key={label} {...props}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                    );
                })}
            </Stepper>
    <div>
        {activeStep === steps.length ? (
    <div>
    <span>All steps completed - you&apos;re finished</span>
    <Button
        onClick={this.handleReset}
        className={classes.button}
        style={{backgroundColor: "#F63",
            color: 'white'}}
        >
    Reset
    </Button>
    </div>
    ) : (
    <div className={classes.stepMenu}>
    <span>{getStepContent(activeStep)}</span>
    <div
    className={classes.buttonMenu}
    style={{ display: 'flex' }}
    >
    <Button
        variant="outlined"
        disabled={activeStep === 0}
        onClick={this.handleBack}
        className={classes.button}
        >
    Back
    </Button>
    {activeStep !== steps.length - 1 ? (
    <Button
        variant="contained"
        style={{backgroundColor: "#F63",
            color: 'white'}}
        onClick={this.handleNext}
        className={classes.button}
        disabled={this.state.value === -1 ? true : false}
        >
    Next
    </Button>
    ) : (
    this.state.warning && (
        <Button
        variant="contained"
        style={{backgroundColor: "#F63",
            color: 'white'}}
        onClick={(e) => this.handleSubmit(e)}
        className={classes.button}
        disabled={this.state.value === -1 ? true : false}
        >
        Confirm
        </Button>
    )
    )}
    </div>
    </div>
    )}
    </div>
    </Card>
    </main>
    
    );
    }
}

FormStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(FormStepper);