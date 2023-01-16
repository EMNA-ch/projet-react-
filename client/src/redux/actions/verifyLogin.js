import axios from "axios";
import { LOGIN_FAIL, VERIFY_LOGIN, VERIFY_LOGIN_SUCCESS } from "../actionTypes";

export const VerifyLogin = (token) => async (dispatch) => {
  if (token) {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    dispatch({
      type: VERIFY_LOGIN,
    });
    try {
      const res = await axios.get("/api/verifylogin", config);

      dispatch({
        type: VERIFY_LOGIN_SUCCESS,
        payload: {
          user: res.data.user,
          token: res.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  }
};
