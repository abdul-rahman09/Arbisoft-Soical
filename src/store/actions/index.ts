import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  GET_REQ,
  GET_REQ_SUCCESS,
  CREATE_REQ_RESET,
  CREATE_REQ,
  CREATE_REQ_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "store/types";
import {
  IPostInterface,
  EDIT_STATUS,
  IUserInterface,
  ICommentInterface,
} from "components/models";
let user1: IUserInterface = {
  id: 1,
  name: "Abdul Rahman",
  username: "abdul",
};
let user2: IUserInterface = {
  id: 2,
  name: "Huzaifah",
  username: "huz",
};
let comment1: ICommentInterface = {
  id: 1,
  text: "My First Comment",
};

let comment2: ICommentInterface = {
  id: 2,
  text: "My Second Comment",
};
let comment3: ICommentInterface = {
  id: 3,
  text: "My Third Comment",
};

let comment4: ICommentInterface = {
  id: 4,
  text: "My Fourth Comment",
};
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
  data: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const item = {
      id: POSTS_DATA.length + 1,
      text: data,
      showEdit: EDIT_STATUS.No,
      location: "Lahore",
      title: "My Title",
      userId: user2,
      comments: [],
    };
    dispatch({ type: CREATE_REQ });
    setTimeout(() => {
      POSTS_DATA.push(item);
      dispatch({ type: CREATE_REQ_SUCCESS, payload: data });
      dispatch(getPosts());
      dispatch({ type: CREATE_REQ_RESET });
    }, 100);
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
  data: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    for (let i = 0; i < POSTS_DATA.length; i++) {
      if (POSTS_DATA[i].showEdit == EDIT_STATUS.Yes) {
        POSTS_DATA[i]["text"] = data;
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
      if (POSTS_DATA[i].showEdit == EDIT_STATUS.Yes) {
        POSTS_DATA[i].showEdit = EDIT_STATUS.No;
      }
    }
    dispatch(getPosts());
  };
};
export const AddComment = (
  postId,
  text
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    let max = 1;
    for (let i = 0; i < POSTS_DATA.length; i++) {
      for (let j = 0; j < POSTS_DATA[i].comments.length; j++) {
        max = Math.max(max, POSTS_DATA[i].comments[j].id);
      }
    }
    let comment: ICommentInterface = {
      id: max,
      text: text,
    };
    for (let i = 0; i < POSTS_DATA.length; i++) {
      if (POSTS_DATA[i].id == postId) {
        POSTS_DATA[i].comments.push(comment);
      }
    }
    dispatch(getPosts());
  };
};
export const UserUpdate = (
  user
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: LOGIN_SUCCESS, payload: { user: user } });
  };
};
export const UserAuthenticate = (
  username,
  password
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    console.log("Username", username, "password", password);
    if (password == 123 && username == user1.username) {
      dispatch({ type: LOGIN_SUCCESS, payload: { user: user1 } });
      return;
    }
    if (password == 123 || username == user2.username) {
      dispatch({ type: LOGIN_SUCCESS, payload: { user: user2 } });
      return;
    }
    console.log("Fail");
    dispatch({ type: LOGIN_FAIL });
  };
};
