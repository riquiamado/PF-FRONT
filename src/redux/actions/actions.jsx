import axios from "axios"
import { CLEAN, GET_PROVIDER, GET_PROVIDER_BYNAME, GET_PROVIDER_DETAILS } from "./components"




export   function getProviders (){
    return async function(dispatch){
        const info = await axios.get(`http://localhost:3001/providers`)
        
        dispatch({type:GET_PROVIDER ,payload: info.data})
    }
}

export  function getProviderByName(name){
    return async function(dispatch){
        const info = await axios.get(`http://localhost:3001/provider?name=${name}`)
        console.log(info.data)
        dispatch({type:GET_PROVIDER_BYNAME ,payload:info.data})
    }
}

export function getProvidersDetails(_id) {
    return async function (dispatch) {
      try {
        const json = await axios.get(`http://localhost:3001/provider/${_id}`);
        console.log(json)
       dispatch({ type: GET_PROVIDER_DETAILS, payload: json.data });
      } catch (error) {
        console.error(error);
      }
      
    };
  }

export function clean(){
    return function(dispatch){
        dispatch({
            type:CLEAN
        })
    }
}