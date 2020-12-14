import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ICommentInterface } from "components/models";
import { POSTS_DATA, getPosts } from "store/actions/postActions";

export const comment1: ICommentInterface = {
  id: 1,
  text: "My First Comment",
};

export const comment2: ICommentInterface = {
  id: 2,
  text: "My Second Comment",
};
export const comment3: ICommentInterface = {
  id: 3,
  text: "My Third Comment",
};
export const comment4: ICommentInterface = {
  id: 4,
  text: "My Fourth Comment",
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
      id: max + 1,
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
