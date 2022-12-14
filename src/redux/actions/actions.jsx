import axios from "axios";
import {
  ADD_USERS,
  CLEAN,
  GET_USERS,
  GET_USER_BY_ID,
  GET_SERVICES_DETAILS,
  GET_SERVICES,
  GET_SERVICES_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_RATINGS,
  ORDER_BY_CATEGORY,
  ORDER_BY_SERVICES,
  ADD_SERVICES,
  FILTER_BY_SERVICES,
  DELETE_USER,
  DELETE_SERVICE,
  UPDATE_USER,

  RESET_ESTADO,

  ADD_TO_CART

} from "./components";

export function getServices() {
  return async function (dispatch) {
    const info = await axios.get(`http://localhost:3001/services`);
    dispatch({ type: GET_SERVICES, payload: info.data });
  };
}

export function getUsers() {
  return async function (dispatch) {
    const info = await axios.get(`http://localhost:3001/users`);
    console.log(info.data);
    dispatch({ type: GET_USERS, payload: info.data });
  };
}

export const getUserById = id => {
  return async function(dispatch) {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    dispatch({ type: GET_USER_BY_ID, payload: res.data })
  }
}

export function getServicesByName(name) {
  return async function (dispatch) {
    const info = await axios.get(`http://localhost:3001/services?name=${name}`);

    dispatch({ type: GET_SERVICES_BY_NAME, payload: info.data });
  };
}

export function getServicesDetails(_id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/services/${_id}`);

      dispatch({ type: GET_SERVICES_DETAILS, payload: json.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function orderByRatings(payload) {
  return {
    type: ORDER_BY_RATINGS,
    payload: payload,
  };
}

export function orderByCategory(payload) {
  return {
    type: ORDER_BY_CATEGORY,
    payload: payload,
  };
}

export function resetAllServices() {
	return {
	type: "RESET_ESTADO"
	}
}

export function orderByServices(payload) {
  return {
    type: ORDER_BY_SERVICES,
    payload: payload,
  };
}

export function clean() {
  return function (dispatch) {
    dispatch({
      type: CLEAN,
    });
  };
}

export function addUsers(payload) {
  return async function (dispatch) {
    let info = await axios.post("http://localhost:3001/users", payload);
    dispatch({ type: ADD_USERS, payload: info.data });
  };
}

export const addServices = (formData) => {
  return async function (dispatch) {
    let info = await axios({
      url: "http://localhost:3001/services",
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }) 
    dispatch({ type: ADD_SERVICES, payload: info.data })
  };
}

export function deleteUser(email) {
  return async function(dispatch) {
    let res = await axios.delete("http://localhost:3001/users/" + email);
    dispatch({ type: DELETE_USER, payload: res.data });
  };
}

export function deleteService(id) {
  return async function(dispatch) {
    let res = await axios.delete("http://localhost:3001/services/" + id);
    dispatch({ type: DELETE_SERVICE, payload: res.data });
  };
}

export const updateUser = (id) => {
  return async function(dispatch) {
    let res = await axios.put("http://localhost:3001/users/" + id);
    dispatch({ type: UPDATE_USER, payload: res.data });
  }
}

export function addToCart(payload){
  console.log(payload);
  return async function(dispatch){
    const info = await axios.post(`http://localhost:3001/cart`,payload)
    dispatch({
      type:ADD_TO_CART,
      payload: info.data
    });
  }
}