import User from "../components/FormStepper/UserInfo"
import { connect } from 'react-redux';
import {addFirstName,addLastName,addEmail,addPhone} from "../actions"



const mapDispatchToProps = {
  addFirstName:addFirstName,
  addLastName:addLastName,
  addEmail:addEmail,
  addPhone:addPhone,
}

function mapStateToProps(state){
  return {
    firstName:state.firstName,
    lastName:state.lastName,
    email:state.email,
    phone:state.phone,
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(User);