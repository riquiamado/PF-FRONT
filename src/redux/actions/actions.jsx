import axios from "axios"
import { ADD_USERS, CLEAN, GET_USERS, GET_USERS_BY_NAME, GET_SERVICES_DETAILS, GET_SERVICES, GET_SERVICES_BY_NAME, ORDER_BY_NAME, ORDER_BY_RATINGS, ORDER_BY_SERVICES, ADD_SERVICES, FILTER_BY_SERVICES } from "./components"




export   function getServices (){
    return async function(dispatch){
        const info = await axios.get(`http://localhost:3001/services`)
        
        dispatch({type:GET_SERVICES ,payload: info.data})
    }
}

export  function getServicesByName(name){
    return async function(dispatch){

        const info = await axios.get(`http://localhost:3001/services?name=${name}`)
        
        dispatch({type:GET_SERVICES_BY_NAME ,payload:info.data})

    }
}

export function getServicesDetails(_id) {
    return async function (dispatch) {
      try {
        const json = await axios.get(`http://localhost:3001/services/${_id}`);
        console.log(json);
       dispatch({ type: GET_SERVICES_DETAILS, payload: json.data });
      } catch (error) {
        console.error(error);
      }
      
    };
  }
  
export function orderByRatings(payload){
    return {
      type:ORDER_BY_RATINGS,
      payload: payload
    }
  }

  export function orderByServices(payload){
    return {
      type:ORDER_BY_SERVICES,
      payload: payload
    }
  }

export function clean(){
    return function(dispatch){
        dispatch({
            type:CLEAN
        })
    }
}

export function addUsers(payload){
    return async function(dispatch){
     let info = await axios.post("http://localhost:3001/users",payload)
     dispatch({type:ADD_USERS,payload: info.data})
    }
}

export function addServices(payload){
    return async function(dispatch){
     let info = await axios.post("http://localhost:3001/services",payload)
     dispatch({type:ADD_SERVICES,payload: info.data})
    }
}

export function filterServices(payload){
    return{
        type:FILTER_BY_SERVICES,
        payload: payload
    }
}