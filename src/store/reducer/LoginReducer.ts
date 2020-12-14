import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_RESET,
} from "store/types";
const initialState = {
  loading: false,
  success: false,
  error: false,
  user: null,
};

const reducer = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case LOGIN_LOADING:
      newState.loading = true;
      break;
    case LOGIN_SUCCESS:
      newState.loading = false;
      newState.success = true;
      newState.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(newState.user));
      break;
    case LOGIN_FAIL:
      newState.loading = false;
      newState.error = true;
      break;
    case LOGIN_RESET:
      return initialState;
  }
  return newState;
};

export default reducer;
