import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  APP_SUCCESS,
  APP_FAIL,
  APP_LOADING,
  APP_RESET,
  LOGIN_SUCCESS,
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
      dispatch({ type: APP_SUCCESS, payload: { user: user } });
      dispatch({ type: LOGIN_SUCCESS, payload: { user: user } });
    } else {
      dispatch({ type: APP_FAIL });
    }
  };
};
export const UserAuthenticate = (
  username,
  password
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch({ type: APP_LOADING });

    setTimeout(() => {
      if (password == 123 && username == user1.username) {
        dispatch({ type: APP_SUCCESS, payload: { user: user1 } });
        return;
      }
      if (password == 123 || username == user2.username) {
        dispatch({ type: APP_SUCCESS, payload: { user: user2 } });
        return;
      }
      dispatch({ type: APP_FAIL });
      setTimeout(() => {
        dispatch({ type: APP_RESET });
      }, 2000);
    }, 2000);
  };
};
