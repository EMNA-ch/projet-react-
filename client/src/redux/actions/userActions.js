import {
  GET_VISITED_PROFILE,
  GET_VISITED_PROFILE_FAIL,
  GET_VISITED_PROFILE_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
} from "../actionTypes";
import axios from "axios";

export const register = (user) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    const res = await axios.post("/api/register", user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const res = await axios.post("/api/login", user);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("email", res.data.user.email);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: res.data.user,
        token: res.data.token,
      },
    });
    return res.data.user;
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  dispatch({ type: LOGOUT });
};

// visited user

export const getVisitedUser = (id) => async (dispatch) => {
  dispatch({
    type: GET_VISITED_PROFILE,
  });
  try {
    const { data } = await axios.get(`/api/visitUser/${id}`);
    dispatch({
      type: GET_VISITED_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_VISITED_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const updateProfile = (updatedProfile, id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: UPDATE_PROFILE,
  });
  try {
    const res = await axios.put(
      `/api/userProfile/${id}`,
      updatedProfile,
      config
    );
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
