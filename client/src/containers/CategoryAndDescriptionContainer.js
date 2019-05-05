import Description from "../components/FormStepper/CategoryAndDescription"
import { connect } from 'react-redux';
import {addCategory,addDescription} from "../actions"



const mapDispatchToProps = {
  addCategory:addCategory,
  addDescription:addDescription
}

function mapStateToProps(state){
  return {
    category:state.category,
    description:state.description,
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Description);

