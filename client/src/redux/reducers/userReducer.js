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
  VERIFY_LOGIN,
  VERIFY_LOGIN_SUCCESS,
} from "../actionTypes";

const initialState = {
  user: null,
  visitedUser: null,
  token: null,
  loading: false,
  errors: null,
  isAuth: false,
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case GET_VISITED_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        errors: null,
      };
    case REGISTER_FAIL:
    case GET_VISITED_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        loading: false,
        errors: null,
      };
    case VERIFY_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case VERIFY_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        loading: false,
        errors: null,
      };
    // visited profile
    case GET_VISITED_PROFILE_SUCCESS:
      return {
        ...state,
        visitedUser: payload,
        loading: false,
        errors: null,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};
export default userReducer;
