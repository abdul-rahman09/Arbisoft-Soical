import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  GET_REQ,
  GET_REQ_SUCCESS,
  CREATE_REQ_RESET,
  CREATE_REQ,
  CREATE_REQ_SUCCESS,
  APP_LOADING,
  APP_SUCCESS,
} from "store/types";
import { IPostInterface, EDIT_STATUS, IUserInterface } from "components/models";
import { POSTS_DATA } from "store/actions/dummyData";

export const getPosts = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: GET_REQ });
    setTimeout(() => {
      dispatch({ type: GET_REQ_SUCCESS });
    }, 2000);
  };
};
export const CreatePost = (
  data: string,
  location: string,
  title: string,
  user: IUserInterface
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: APP_LOADING });

    const item = {
      id: POSTS_DATA.length + 1,
      text: data,
      showEdit: EDIT_STATUS.No,
      location: location,
      title: title,
      userId: user,
      comments: [],
    };
    dispatch({ type: CREATE_REQ });
    setTimeout(async () => {
      POSTS_DATA.push(item);
      dispatch({ type: CREATE_REQ_SUCCESS, payload: data });
      dispatch(getPosts()).then(() => {
        dispatch({ type: CREATE_REQ_RESET });
        dispatch({ type: APP_SUCCESS });
      });
    }, 1000);
  };
};
export const showEditItem = (
  data: IPostInterface
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    for (let i = 0; i < POSTS_DATA.length; i++) {
      if (POSTS_DATA[i].id == data.id) {
        POSTS_DATA[i].showEdit = EDIT_STATUS.Yes;
      } else {
        POSTS_DATA[i].showEdit = EDIT_STATUS.No;
      }
    }
    dispatch(getPosts());
  };
};

export const saveEditItem = (
  data: IPostInterface
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    for (let i = 0; i < POSTS_DATA.length; i++) {
      if (POSTS_DATA[i].showEdit == EDIT_STATUS.Yes) {
        POSTS_DATA[i]["text"] = data.text;
        POSTS_DATA[i]["location"] = data.location;
        POSTS_DATA[i]["title"] = data.title;
        POSTS_DATA[i].showEdit = EDIT_STATUS.No;
      }
    }
    dispatch(getPosts());
  };
};
export const closePressed = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    for (let i = 0; i < POSTS_DATA.length; i++) {
      POSTS_DATA[i].showEdit = EDIT_STATUS.No;
    }
    dispatch(getPosts());
  };
};
