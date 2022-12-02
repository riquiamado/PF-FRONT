import { GET_PROVIDER } from "../actions/components"

const initialState ={
    provider:[],
}

export default function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_PROVIDER:
            return {
                ...state,
                provider: action.payload
            }
        default: 
        return {...state}
    }
}