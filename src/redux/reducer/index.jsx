import { CLEAN, GET_PROVIDER,GET_PROVIDER_BYNAME, GET_PROVIDER_DETAILS} from "../actions/components"

const initialState ={
    provider:[],
     allProviders:[],
     details:{}
}

  function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_PROVIDER:
            return {
                ...state,
                provider: action.payload,
                 allProviders:action.payload
            }
            case GET_PROVIDER_BYNAME:
                return{
                    ...state,
                    provider: [action.payload]
                }

                case GET_PROVIDER_DETAILS:
                    return {
                        ...state,
                       details:action.payload
                    }

                case CLEAN:
                    return {
                        ...state,
                        details:{}
                    }
        default: 
        return {...state}
    }
}

export default rootReducer;