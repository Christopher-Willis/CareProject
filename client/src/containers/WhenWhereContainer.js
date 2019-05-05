import WhenWhere from "../components/FormStepper/WhenWhere"
import { connect } from 'react-redux';
import {addDays,addStartDate,addEndDate,addLocation,addRecurrence} from "../actions"



const mapDispatchToProps = {
  addDays:addDays,
  addStartDate:addStartDate,
  addEndDate:addEndDate,
  addLocation:addLocation,
  addRecurrence:addRecurrence
}

function mapStateToProps(state){
  return {
    days:state.days,
    startDate:state.startDate,
    endDate:state.endDate,
    location:state.location,
    recurrence:state.recurrence
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(WhenWhere);