import axios from "axios";
import {
  ADD_USERS,
  GET_USERS,
  GET_USER_BY_ID,
  GET_SERVICES_DETAILS,
  GET_SERVICES,
  GET_SERVICES_BY_NAME,
  ORDER_BY_RATINGS,
  ORDER_BY_SERVICES,
  ADD_SERVICES,
  DELETE_USER,
  DELETE_SERVICE,
  UPDATE_USER,
  LOGIN,
  ADD_TO_CART,
  GET_COMPONENTS,
  DELETE_TO_CART,
  GET_USER_BY_EMAIL,
  GET_CATEGORIES,
  CLEAN,
} from "./components";

const url = "http://localhost:3001";
// const url = "https://pf-back-production-b443.up.railway.app"

//-----------------------------------User-----------------------------------------

export function logout() {
  return function (dispatch) {
    dispatch({ type: LOGOUT });
  };
}

export function login(payload) {
  return function (dispatch) {
    dispatch({ type: LOGIN, payload});
  };
}

export function getUsers() {
  return async function (dispatch) {
    const info = await axios.get(`${url}/users`);
    dispatch({ type: GET_USERS, payload: info.data });
  };
}

export const getUserById = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`${url}/users/${id}`);
    dispatch({ type: GET_USER_BY_ID, payload: res.data });
  };
};

export const getUserByEmail = (email) => {
  return async function (dispatch) {
    const res = await axios.get(`${url}/userEmail?email=${email}`);
    dispatch({ type: GET_USER_BY_EMAIL, payload: res.data });
  };
};

export function addUsers(payload) {
  return async function (dispatch) {
    let info = await axios.post(`${url}/users`, payload);
    dispatch({ type: ADD_USERS, payload: info.data });
  };
}

export function deleteUser(email) {
  return async function (dispatch) {
    let res = await axios.delete(`${url}/users/` + email);
    dispatch({ type: DELETE_USER, payload: res.data });
  };
}

export const updateUser = (id, payload) => {
  return async function (dispatch) {
    let res = await axios.put(`${url}/users/${id}`, payload);
     console.log(res.data)
    dispatch({ type: UPDATE_USER, payload: res.data });
  };
};

//-----------------------------------Service---------------------------------------------
export function getServices() {
  return async function (dispatch) {
    const info = await axios.get(`${url}/services`);
    dispatch({ type: GET_SERVICES, payload: info.data });
  };
}

export function getServicesByName(name) {
  return async function (dispatch) {
    const info = await axios.get(`${url}/services?name=${name}`);
    dispatch({ type: GET_SERVICES_BY_NAME, payload: info.data });
  };
}

export function getServicesDetails(_id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`${url}/services/${_id}`);
      dispatch({ type: GET_SERVICES_DETAILS, payload: json.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export const addServices = (formData) => {
  return async function (dispatch) {
    console.log(formData);
    let info = await axios({
      url: ` ${url}/services`,
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    console.log(info);
    dispatch({ type: ADD_SERVICES, payload: info.data });
  };
};

export function deleteService(id) {
  return async function (dispatch) {
    let res = await axios.delete(`${url}/services/` + id);
    dispatch({ type: DELETE_SERVICE, payload: res.data });
  };
}

//-----------------------------------Filter/Order---------------------------------------------
export function orderByRatings(payload) {
  return {
    type: ORDER_BY_RATINGS,
    payload: payload,
  };
}

export function getCategories(payload) {
  return async function (dispatch) {
    const res = await axios.get(`${url}/categories`, payload);
    dispatch({ type: GET_CATEGORIES, payload: res.data });
  };
}

export function orderByServices(payload) {
  return {
    type: ORDER_BY_SERVICES,
    payload: payload,
  };
}

export function resetAllServices() {
  return {
    type: "RESET_ESTADO",
  };
}

//-----------------------------------Cart---------------------------------------------
//export function addToCart(payload){
//  console.log(payload);
//  return async function(dispatch){
//    const info = await axios.post(`https://pf-back-production-b443.up.railway.app/cart`,payload)
//    dispatch({
//      type:ADD_TO_CART,
//      payload: info.data
//    });
//  }
//}

// Solamente pasamos el servicio a reducer
export function addToCart(payload) {
  console.log(payload);
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
}

// Solamente pasamos el _id al reducer
export function deleteToCart(payload) {
  //console.log(payload);
  return {
    type: DELETE_TO_CART,
    payload: payload,
  };
}

//-----------------------------------Other---------------------------------------------
export const getComponents = (payload) => {
  return {
    type: GET_COMPONENTS,
    payload: payload,
  };
};

export function clean() {
  return function (dispatch) {
    dispatch({
      type: CLEAN,
    });
  };
}
