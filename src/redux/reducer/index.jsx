import { GET_PROVIDER,GET_PROVIDER_BYNAME} from "../actions/components"

const initialState ={
    provider:[],
    // allProviders:[]
}

  function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_PROVIDER:
            return {
                ...state,
                provider: action.payload,
                // allProviders:action.payload
            }
            case GET_PROVIDER_BYNAME:
                return{
                    ...state,
                   provider:action.payload
                }
        default: 
        return {...state}
    }
}

export default rootReducer;