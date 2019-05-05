import FormStepper from "../components/FormStepper/FormStepper"
import { connect } from 'react-redux';

function mapStateToProps(state){
  return {
    category:state.category,
    description:state.description,
    firstName:state.firstName,
    lastName:state.lastName,
    email:state.email,
    phone:state.phone,
    days:state.days,
    startDate:state.startDate,
    endDate:state.endDate,
    location:state.location,
    recurrence:state.recurrence
  }
}


export default connect(mapStateToProps)(FormStepper);

