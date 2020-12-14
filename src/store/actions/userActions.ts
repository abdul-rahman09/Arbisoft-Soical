import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_RESET,
} from "store/types";
import { IUserInterface } from "components/models";
export const user1: IUserInterface = {
  id: 1,
  name: "Abdul Rahman",
  username: "abdul",
};
export const user2: IUserInterface = {
  id: 2,
  name: "Huzaifah",
  username: "huz",
};

export const UserUpdate = (
  user
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: { user: user } });
    } else {
      dispatch({ type: LOGIN_FAIL });
    }
  };
};
export const UserAuthenticate = (
  username,
  password
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: LOGIN_LOADING });

    setTimeout(() => {
      if (password == 123 && username == user1.username) {
        dispatch({ type: LOGIN_SUCCESS, payload: { user: user1 } });
        return;
      }
      if (password == 123 || username == user2.username) {
        dispatch({ type: LOGIN_SUCCESS, payload: { user: user2 } });
        return;
      }
      dispatch({ type: LOGIN_FAIL });
      setTimeout(() => {
        dispatch({ type: LOGIN_RESET });
      }, 2000);
    }, 2000);
  };
};
