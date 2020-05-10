import {
  USER_RESPONSE,
  USER_RESPONSE_ERROR,
  USER_RESPONSE_EDIT_ERROR,
} from "../../constants";

export const setUserAction = (data) => ({
  type: USER_RESPONSE,
  payload: data,
});
export const setUserActionError = (data) => ({
  type: USER_RESPONSE_ERROR,
  payload: data,
});
export const setEditActionError = (data) => ({
  type: USER_RESPONSE_EDIT_ERROR,
  payload: data,
});
