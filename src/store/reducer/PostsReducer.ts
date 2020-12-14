import { GET_REQ, GET_REQ_SUCCESS, GET_REQ_ERR } from "store/types";
import { POSTS_DATA } from "store/actions/postActions";
import { IPostInterface } from "components/models";
const initialState = {
  data: Array<IPostInterface>(),
};

const reducer = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_REQ_SUCCESS:
      newState.data = [...POSTS_DATA].sort((a, b) => b.id - a.id);
      break;
  }
  return newState;
};

export default reducer;
