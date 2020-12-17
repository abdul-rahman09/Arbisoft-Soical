import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  APP_SUCCESS,
  APP_FAIL,
  APP_LOADING,
  APP_RESET,
  LOGIN_SUCCESS,
} from "store/types";
import { user1, user2 } from "store/actions/dummyData";

export const UserUpdate = (
  user
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
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
    console.log("authenticate", username, password);

    setTimeout(() => {
      if (password == 123 && username == user1.username) {
        localStorage.setItem("user", JSON.stringify(user1));
        dispatch({ type: APP_SUCCESS });
        dispatch({ type: LOGIN_SUCCESS, payload: { user: user1 } });
        return;
      }
      if (password == 123 || username == user2.username) {
        localStorage.setItem("user", JSON.stringify(user2));
        dispatch({ type: APP_SUCCESS });
        dispatch({ type: LOGIN_SUCCESS, payload: { user: user2 } });
        return;
      }
      dispatch({ type: APP_FAIL });
      setTimeout(() => {
        dispatch({ type: APP_RESET });
      }, 2000);
    }, 2000);
  };
};

export const logout = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    localStorage.clear();
    const win: any = window;
    win.location.reload();
  };
};
