import { ADD_USERS, CLEAN, GET_PROVIDER,GET_PROVIDER_BYNAME, GET_PROVIDER_DETAILS, GET_SERVICES, GET_SERVICES_DETAILS, GET_SERVICES_BY_NAME, ORDER_BY_NAME} from "../actions/components"

const initialState ={
     allServices:[],
     services:[],
     details:{}
}

  function rootReducer(state=initialState,action){
    switch(action.type){
        case GET_SERVICES:
            return {
                ...state,
                services: action.payload,
                allServices:action.payload
            }
            case GET_SERVICES_BY_NAME:
                return{
                    ...state,
                    provider: action.payload
                }

                case GET_SERVICES_DETAILS:
                    return {
                        ...state,
                       details:action.payload
                    }

                case ADD_USERS:
                    return{
                        ...state,
                        provider:[...state.provider,action.payload]
                    }  

                case ORDER_BY_NAME:
                    return{
                        ...state,
                        provider
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