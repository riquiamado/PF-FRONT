import {
  ADD_USERS,
  GET_USERS,
  GET_USER_BY_ID,
  GET_USER_BY_EMAIL,
  DELETE_USER,
  UPDATE_USER,
  LOGIN,
  LOGOUT,
  LOGIN_GOOGLE,
  GET_SERVICES,
  GET_SERVICES_DETAILS,
  GET_SERVICES_BY_NAME,
  ADD_SERVICES,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  ORDER_BY_NAME,
  ORDER_BY_SERVICES,
  ORDER_BY_RATINGS,
  ORDER_BY_CATEGORY,
  FILTER_BY_SERVICES,
  ADD_TO_CART,
  DELETE_TO_CART,
  GET_COMPONENTS,
  RESET_ESTADO,
  CLEAN,
  GET_CATEGORIES,
  GET_ORDERS,
  CLEAN_CART
} from "../actions/components";

const initialState = {
  services: [],
  allServices: [],
  users: [],
  servicesDL:[],
  session: "",
  cart: [],
  components: [],
  details: {},
  categories: [],
  limpiador: [],
  conCategorias: {},
  empleosConCategorias: "",
  orders: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    //---------------------User------------------------------
    case LOGIN_GOOGLE:
      return {
        ...state,
        userSession: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        userSession: {},
      };
    case LOGIN:
      return {
        ...state,
        session: action.payload,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER_BY_ID:
      return {
        ...state,
        users: action.payload,
      };

    case GET_USER_BY_EMAIL:
      return {
        ...state,
        users: action.payload,
      };

    case ADD_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case DELETE_USER:
      return { ...state };

    case DELETE_SERVICE:
      return { ...state };

    case UPDATE_USER:
      return { ...state };

    //---------------------Service------------------------------
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload.filter((e)=> e.deleteLogic !== true),
        allServices: action.payload.filter((e)=> e.deleteLogic !== true),
        servicesDL: action.payload
      };

    case GET_SERVICES_BY_NAME:
      return {
        ...state,
        services: action.payload,
      };

    case GET_SERVICES_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case ADD_SERVICES:
      return { ...state };

    case UPDATE_SERVICE:
      return { ...state };

    //---------------------Filter/Order------------------------------
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

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case ORDER_BY_RATINGS:
      if (action.payload === "highest") {
        return {
          ...state,
          services: [...state.services].sort((a, b) => {
            if (a.rating > b.rating) return -1;
            if (a.rating > b.rating) return 1;
            return 0;
          }),
        };
      }
      if (action.payload === "lowest") {
        return {
          ...state,
          services: [...state.services].sort((a, b) => {
            if (a.rating > b.rating) return 1;
            if (a.rating > b.rating) return -1;
            return 0;
          }),
        };
      }

    // case ORDER_BY_CATEGORY:

    //   state.allServices = state.services
    //   state.categoriasFiltradas = state.limpiador
    //   state.conCategorias = {}
    //   state.empleosConCategorias = ""
    //   state.empleosConCategorias = state.services.filter(idx => idx.name.includes(action.payload))
    //   return{
    //       ...state,
    //       services: state.empleosConCategorias
    //   }

    //---------------------Cart------------------------------
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case DELETE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((idx) => !idx._id.includes(action.payload)),
      };

    //---------------------Others------------------------------
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    //---------------------Others------------------------------
    case GET_COMPONENTS:
      return {
        ...state,
        components: action.payload,
      };

    case "RESET_ESTADO":
      return {
        ...state,
        services: state.services,
      };

    case CLEAN:
      return {
        ...state,
        details: {},
        components: [],
      };

    case CLEAN_CART:
      return{
        ...state,
        cart:[]
      }

    default:
      return { ...state };
  }
}

export default rootReducer;
