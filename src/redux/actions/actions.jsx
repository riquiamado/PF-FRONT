import axios from "axios"
import { GET_PROVIDER, GET_PROVIDER_BYNAME } from "./components"




export   function getProviders (){
    return async function(dispatch){
        const info = await axios.get(`http://localhost:3001/providers`)
        console.log(info)
        dispatch({type:GET_PROVIDER ,payload: info.data})
    }
}

export  function getProviderByName(name){
    return async function(dispatch){
        const info = await axios.get(`http://localhost:3001/providers?name=${name}`)
        console.log(info)
        dispatch({type:GET_PROVIDER_BYNAME ,payload:info.data})
    }
}

 