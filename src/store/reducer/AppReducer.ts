import { APP_FAIL, APP_RESET, APP_SUCCESS, APP_LOADING } from "store/types";
const initialState = {
  loading: false,
  success: false,
  error: false,
};

const reducer = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case APP_LOADING:
      newState.loading = true;
      break;
    case APP_SUCCESS:
      newState.loading = false;
      newState.success = true;
      break;
    case APP_FAIL:
      newState.loading = false;
      newState.error = true;
      break;
    case APP_RESET:
      return initialState;
  }
  return newState;
};

export default reducer;
