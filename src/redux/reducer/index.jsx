import {
  ADD_USERS,
  CLEAN,
  GET_USERS,
  GET_USER_BY_ID,
  GET_SERVICES,
  GET_SERVICES_DETAILS,
  GET_SERVICES_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_SERVICES,
  ORDER_BY_RATINGS,
  ORDER_BY_CATEGORY,
  ADD_SERVICES,
  FILTER_BY_SERVICES,
  DELETE_USER,
  DELETE_SERVICE,

  RESET_ESTADO,

  ADD_TO_CART,

} from "../actions/components";

const initialState = {
  services: [],
  allServices: [],
  users: [],
  cart: [],
  details: {},
  categoriasFiltradas: [],
  limpiador: [],
  conCategorias: {},
  empleosConCategorias: '',
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

    case GET_USER_BY_ID:
      return {
        ...state,
        users: action.payload
      }

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

    case ORDER_BY_RATINGS:
      if(action.payload === "highest") {
        return {
          ...state,
          services: [...state.services].sort((a, b) => {
            if(a.rating > b.rating) return -1;
            if(a.rating > b.rating) return 1;
            return 0;
          })
        }
      }
      if (action.payload === "lowest") {
        return {
          ...state,
          services: [...state.services].sort((a, b) => {
            if(a.rating > b.rating) return 1;
            if(a.rating > b.rating) return -1;
            return 0;
          })
        }
      }

      case ORDER_BY_CATEGORY:
        state.allServices = state.services
        state.categoriasFiltradas = state.limpiador
        state.conCategorias = {}
        state.empleosConCategorias = ""
        state.empleosConCategorias = state.services.filter(idx => idx.name.includes(action.payload))
        
      return{
          ...state,
          services: state.empleosConCategorias
      }

      case "RESET_ESTADO":
                    return {
                    ...state,
                    services: state.services
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
