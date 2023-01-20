import axios from "axios";
import {
  ADD_COMMENT,
  ADD_COMMENT_FAIL,
  ADD_COMMENT_SUCCESS,
  CREATE_POST,
  CREATE_POST_FAIL,
  CREATE_POST_SUCCESS,
  DELETE_COMMENT,
  DELETE_COMMENT_FAIL,
  DELETE_COMMENT_SUCCESS,
  DELETE_POST,
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
  GET_ONE_POST,
  GET_ONE_POST_FAIL,
  GET_ONE_POST_SUCCESS,
  GET_POSTS,
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_FAIL,
  UPDATE_POST_SUCCESS,
} from "../actionTypes";

export const getPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POSTS,
  });
  try {
    const res = await axios.get("/api/post");
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      payload: error.response.data,
    });
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const res = await axios.get(`/api/post/profile/${id}`);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
export const getOnePost = (id) => async (dispatch) => {
  dispatch({
    type: GET_ONE_POST,
  });
  try {
    const res = await axios.get(`/api/post/${id}`);
    dispatch({
      type: GET_ONE_POST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const createPost = (newPost) => async (dispatch) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: CREATE_POST,
  });
  try {
    const res = await axios.post(`/api/post`, newPost, config);
    dispatch({
      type: CREATE_POST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const deletePost = (id, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  dispatch({
    type: DELETE_POST,
  });
  try {
    await axios.delete(`/api/post/${id}`, config);
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const updatePost = (updatedPost, id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: UPDATE_POST,
  });
  try {
    const res = await axios.put(`/api/post/${id}`, updatedPost, config);
    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: {
        id,
        data: res.data,
      },
    });
  } catch (error) {
    dispatch({
      type: UPDATE_POST_FAIL,
      payload: error.response.data,
    });
  }
};

export const addComment = (postId, newComment) => async (dispatch) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: ADD_COMMENT,
  });
  try {
    const res = await axios.post(
      `/api/post/comment/${postId}`,
      newComment,
      config
    );

    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: DELETE_COMMENT,
  });
  try {
    await axios.delete(`/api/post/comment/${postId}/${commentId}`, config);
    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: commentId,
    });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: DELETE_COMMENT_FAIL,
      payload: error.response.data,
    });
  }
};
