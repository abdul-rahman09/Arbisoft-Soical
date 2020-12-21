import { LOGIN_SUCCESS } from "store/types";
const initialState = {
  user: null,
};

const reducer = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case LOGIN_SUCCESS:
      newState.user = action.payload.user;
      break;
  }
  return newState;
};

export default reducer;
