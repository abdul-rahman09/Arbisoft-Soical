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
import { IPostInterface, EDIT_STATUS } from "components/models";
import { user1, user2 } from "store/actions/userActions";

import {
  comment1,
  comment2,
  comment3,
  comment4,
} from "store/actions/commentActions";

let item1: IPostInterface = {
  id: 1,
  title: "My Title",
  userId: user1,
  comments: [comment1, comment2, comment3, comment4],
  text: `By 2020, digital videos will drive 82% of web traffic. That means you’re leaving reach and engagement on the table if you aren’t sharing video content on your channels. And there’s so many options to choose from:
    Stories (Facebook and Instagram)
    Snapchat
    IGTV
    YouTube
    Live video (LinkedIn, Facebook, Instagram)
    Tik Tok
    In-feed videos (Facebook, Instagram, LinkedIn, Twitter, Pinterest)`,
  showEdit: EDIT_STATUS.No,
  location: "Lahore",
};
let item3: IPostInterface = {
  id: 2,
  text: `By 2020, digital videos will drive 82% of web traffic. That means you’re leaving reach and engagement on the table if you aren’t sharing video content on your channels. And there’s so many options to choose from:
    Stories (Facebook and Instagram)
    Snapchat
    IGTV
    YouTube
    Live video (LinkedIn, Facebook, Instagram)
    Tik Tok
    In-feed videos (Facebook, Instagram, LinkedIn, Twitter, Pinterest)`,
  title: "My Title",
  location: "Lahore",
  userId: user2,
  comments: [],
  showEdit: EDIT_STATUS.No,
};
export const POSTS_DATA: Array<IPostInterface> = [item1, item3];
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
  title: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: APP_LOADING });

    const item = {
      id: POSTS_DATA.length + 1,
      text: data,
      showEdit: EDIT_STATUS.No,
      location: location,
      title: title,
      userId: user2,
      comments: [],
    };
    dispatch({ type: CREATE_REQ });
    setTimeout(() => {
      POSTS_DATA.push(item);
      dispatch({ type: CREATE_REQ_SUCCESS, payload: data });
      dispatch(getPosts());
      dispatch({ type: CREATE_REQ_RESET });
      dispatch({ type: APP_SUCCESS });
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
