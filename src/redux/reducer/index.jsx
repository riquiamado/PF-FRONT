import { ADD_USERS, CLEAN, GET_USERS,GET_USERS_BY_NAME,  GET_SERVICES, GET_SERVICES_DETAILS, GET_SERVICES_BY_NAME, ORDER_BY_NAME, ORDER_BY_SERVICES, ADD_SERVICES, FILTER_BY_SERVICES} from "../actions/components"

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
                    services: action.payload
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

                    case ADD_SERVICES:
                        return{
                            ...state,
                            services:[...state.services,action.payload]
                        }  

                case ORDER_BY_SERVICES:
                    if (action.payload === "asc") {
                        return {
                          ...state,
                          services: [...state.services].sort(function (a, b) {
                            if (a.name > b.name) {
                              return 1;
                            }
                            if (b.name > a.name) {
                              return -1;
                            }
                            return 0;
                          }),
                        };
                      }
                      if (action.payload === "desc") {
                        return {
                          ...state,
                          services: [...state.services].sort(function (a, b) {
                            if (a.name > b.name) {
                              return -1;
                            }
                            if (b.name > a.name) {
                              return 1;
                            }
                            return 0;
                          }),
                        };
                      }
                      if (action.payload === "All") {
                        return {
                          ...state,
                          services: state.services,
                        };
                      } else {
                        return {
                          ...state,
                          services: state.allServices,
                        };
                      }
                
                case FILTER_BY_SERVICES:
               
                return {
                    ...state,
                    services: state.services.filter(el => el.name === action.payload)
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