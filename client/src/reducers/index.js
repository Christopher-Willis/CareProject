import { combineReducers } from 'redux'

function category(state="", action){
  if(action.type === "ADD_CATEGORY"){
    return action.value
  }
  return state;
}   

function description(state="", action){
  if(action.type === "ADD_DESCRIPTION"){
    return action.value
  }
  return state;
}   

function firstName(state="", action){
  if(action.type === "ADD_FIRSTNAME"){
    return action.value
  }
  return state;
}   

function lastName(state="", action){
  if(action.type === "ADD_LASTNAME"){
    return action.value
  }
  return state;
}   

function email(state="", action){
  if(action.type === "ADD_EMAIL"){
    return action.value
  }
  return state;
}   
function phone(state="", action){
  if(action.type === "ADD_PHONE"){
    return action.value
  }
  return state;
}   

function days(state={}, action){
  if(action.type === "ADD_DAYS"){
    return action.value
  }
  return state;
}   

function startDate(state="", action){
  if(action.type === "ADD_STARTDATE"){
    return action.value
  }
  return state;
} 

function endDate(state="", action){
  if(action.type === "ADD_ENDDATE"){
    return action.value
  }
  return state;
} 

function location(state="", action){
  if(action.type === "ADD_LOCATION"){
    return action.value
  }
  return state;
} 

function recurrence(state="", action){
  if(action.type === "ADD_RECURRENCE"){
    return action.value
  }
  return state;
} 

const reducers = combineReducers({
  category,description,firstName,lastName,email,
  phone,days,startDate,endDate,location,recurrence
})

export default reducers;