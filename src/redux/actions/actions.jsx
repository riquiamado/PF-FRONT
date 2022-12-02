import axios from "axios"
import { GET_PROVIDER } from "./components"




export default function getProviders(){
    return async function(dispatch){
        const info = await axios.get(`http://localhost:3001/providers`)
        console.log(info)
        dispatch({type:GET_PROVIDER ,payload: info.data})
    }
}