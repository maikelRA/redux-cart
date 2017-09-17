import initialState from "./initialState";

export default function user(state = initialState.user, action) {
  switch (action.type) {
    case "SIGN_IN":
      return action.user;
    case "SIGN_OUT":
      //If we want to reset, return the initialstate!
      return initialState.user;
    default:
      return state;
  }
}
