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
  UPDATE_COMMENT,
  UPDATE_COMMENT_FAIL,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_FAIL,
  UPDATE_POST_SUCCESS,
} from "../actionTypes";
const initialState = {
  posts: [],
  post: null,
  loading: false,
  errors: [],
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
    case CREATE_POST:
    case UPDATE_POST:
    case ADD_COMMENT:
    case UPDATE_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        post: { ...state.post, comments: { usercomments: payload } },
        loading: false,
      };
    case UPDATE_COMMENT_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((el) =>
          el._id === payload.id ? payload.data : el
        ),
        loading: false,
      };
    case GET_POSTS_FAIL:
    case UPDATE_POST_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case GET_ONE_POST:
      return {
        ...state,
        loading: true,
      };
    case GET_ONE_POST_SUCCESS:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case GET_ONE_POST_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case DELETE_POST:
    case DELETE_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };
    case DELETE_POST_FAIL:
    case CREATE_POST_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, payload],
        loading: false,
        errors: [],
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        post: state.post.comments.usercomments.map((el) =>
          el._id === el.payload ? payload.data : el
        ),
        errors: null,
        loading: false,
      };
    case ADD_COMMENT_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        post: {
          ...state.post,
          comments: {
            usercomments: state.post.comments.usercomments.filter(
              (el) => el._id !== payload
            ),
          },
        },
        loading: false,
      };
    case DELETE_COMMENT_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default postReducer;
