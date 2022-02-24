import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const loginInitiate = (username, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    axios
      .post("https://dummyjson.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        const decodedUser = jwtDecode(token);
        console.log("decoded", decodedUser);
        const user = response.data;
        if (user.id === decodedUser.id) {
          dispatch(loginSuccess(user));
          localStorage.setItem("user", JSON.stringify(user));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFail(error.message));
      });
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logout());
    localStorage.removeItem("user")
  };
};
