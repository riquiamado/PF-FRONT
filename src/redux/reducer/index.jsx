import {
  ADD_USERS,
  CLEAN,
  GET_USERS,
  GET_USERS_BY_NAME,
  GET_SERVICES,
  GET_SERVICES_DETAILS,
  GET_SERVICES_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_SERVICES,
  ADD_SERVICES,
  FILTER_BY_SERVICES,
  DELETE_USER,
  DELETE_SERVICE,
  ADD_TO_CART,
} from "../actions/components";

const initialState = {
  services: [],
  allServices: [],
  users: [],
  cart: [],
  details: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        allServices: action.payload
      };
    case GET_SERVICES_BY_NAME:
      return {
        ...state,
        services: action.payload,
       
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_SERVICES_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case ADD_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ADD_SERVICES:
      return {
        ...state,
      };
      
      case ADD_TO_CART:
        return {
          ...state,
          cart: action.payload,
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
    
    case DELETE_USER:
      return { ...state };

    case DELETE_SERVICE:
      return { ...state };
      
    case CLEAN:
      return {
        ...state,
        details: {},
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
