import { LOGIN_FAIL, LOGIN_SUCCESS, GET_REQ_ERR } from "store/types";
import { POSTS_DATA } from "store/actions/index";
import { IUserInterface } from "components/models";
const initialState = {
  loading: false,
  success: false,
  error: false,
  user: null,
};

const reducer = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case LOGIN_SUCCESS:
      newState.loading = false;
      newState.success = true;
      break;
    case LOGIN_SUCCESS:
      newState.loading = !state.loading;
      newState.error = true;
      newState.user = action.payload.user;
  }
  return newState;
};

export default reducer;
