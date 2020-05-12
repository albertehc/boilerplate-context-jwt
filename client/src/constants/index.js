//Routes
const HOME = "/";
const LOGIN = "/login";
const SIGNUP = "/signup";
const EDIT = "/edit";
export const Routes = { HOME, LOGIN, SIGNUP, EDIT };

//Auth Reducers

export const USER_RESPONSE = "USER_RESPONSE";
export const USER_RESPONSE_ERROR = "USER_RESPONSE_ERROR";
export const LOADING = "LOADING";

//Languages

export const languages = [
  {
    id: 1,
    value: "en-EN",
    text: "English",
  },
  {
    id: 2,
    value: "es-ES",
    text: "Spanish",
  },
];

export const themes = [
  {
    id: 1,
    value: "dark",
    text: "Dark",
  },
  {
    id: 2,
    value: "light",
    text: "Light",
  },
];
