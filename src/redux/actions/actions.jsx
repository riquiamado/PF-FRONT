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
  LOGIN,
  LOGOUT,

  RESET_ESTADO,

  ADD_TO_CART,
  GET_USER_BY_EMAIL

} from "./components";


//-----------------------------------User---------------------------------------------
export function logout(){
  return function (dispatch) {
    dispatch({ type: LOGOUT });
  }
}

export function login(user){
  return async function (dispatch) {
    let info = await axios.post("http://localhost:3001/login", user);
    console.log(info)
    dispatch({ type: LOGIN, payload: info.data });
  }
}

export function getUsers() {
  return async function (dispatch) {
    const info = await axios.get(`http://localhost:3001/users/`);
    console.log(info.data);
    dispatch({ type: GET_USERS, payload: info.data });
  };
}

export const getUserById = id => {
  return async function(dispatch) {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    dispatch({ type: GET_USER_BY_ID, payload: res.data });
  }
}

export const getUserByEmail = email => {
  return async function(dispatch) {
    const res = await axios.get(`http://localhost:3001/userEmail?email=${email}`);
    dispatch({ type: GET_USER_BY_EMAIL, payload: res.data });
  }
}

export function addUsers(payload) {
  return async function (dispatch) {
    let info = await axios.post("https://pf-back-production-b443.up.railway.app/users", payload);
    dispatch({ type: ADD_USERS, payload: info.data });
  };
}

export function deleteUser(email) {
  return async function(dispatch) {
    let res = await axios.delete("https://pf-back-production-b443.up.railway.app/users/" + email);
    dispatch({ type: DELETE_USER, payload: res.data });
  };
}

export const updateUser = (id, payload) => {
  return async function(dispatch) {
    let res = await axios.put(`http://localhost:3001/users/${id}`, payload);
    dispatch({ type: UPDATE_USER, payload: res.data });
  }
}

//-----------------------------------Service---------------------------------------------
export function getServices() {
  return async function (dispatch) {
    const info = await axios.get(`https://pf-back-production-b443.up.railway.app/services`);
    dispatch({ type: GET_SERVICES, payload: info.data });
  };
}

export function getServicesByName(name) {
  return async function (dispatch) {
    const info = await axios.get(`https://pf-back-production-b443.up.railway.app/services?name=${name}`);

    dispatch({ type: GET_SERVICES_BY_NAME, payload: info.data });
  };
}

export function getServicesDetails(_id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`https://pf-back-production-b443.up.railway.app/services/${_id}`);

      dispatch({ type: GET_SERVICES_DETAILS, payload: json.data });
    } catch (error) {
      console.error(error);
    }
  };
}

export const addServices = (formData) => {
  return async function (dispatch) {
    let info = await axios({
      url: "https://pf-back-production-b443.up.railway.app/services",
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

export function deleteService(id) {
  return async function(dispatch) {
    let res = await axios.delete("https://pf-back-production-b443.up.railway.app/services/" + id);
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

export function orderByCategory(payload) {
  return {
    type: ORDER_BY_CATEGORY,
    payload: payload,
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
	type: "RESET_ESTADO"
	}
}

//-----------------------------------Cart---------------------------------------------
export function addToCart(payload){
  console.log(payload);
  return async function(dispatch){
    const info = await axios.post(`https://pf-back-production-b443.up.railway.app/cart`,payload)
    dispatch({
      type:ADD_TO_CART,
      payload: info.data
    });
  }
}

//-----------------------------------Other---------------------------------------------
export function clean() {
  return function (dispatch) {
    dispatch({
      type: CLEAN,
    });
  };
}


