import { EDIT_POST, EDIT_RESET, GET_REQ_SUCCESS } from "store/types";
import { IPostInterface } from "components/models";
const initialState = {
  data: Array<IPostInterface>(),
  current_edit: -1,
};

const reducer = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_REQ_SUCCESS:
      newState.data = action.payload;
      break;
    case EDIT_POST:
      newState.current_edit = action.payload;
      break;
    case EDIT_RESET:
      newState.current_edit = -1;
      break;
  }
  return newState;
};

export default reducer;
