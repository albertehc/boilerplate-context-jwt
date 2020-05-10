import {
  USER_RESPONSE,
  USER_RESPONSE_ERROR
} from "./../../constants/";

export const initialState = {
  logged: false,
  id: null,
  username: null,
  email: null,
  msg: null,
  loading: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case USER_RESPONSE:
      return {
        ...state,
        logged: true,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        msg: null,
        loading: false,
      };
    case USER_RESPONSE_ERROR:
      return {
        ...state,
        logged: false,
        id: null,
        username: null,
        email: null,
        msg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
