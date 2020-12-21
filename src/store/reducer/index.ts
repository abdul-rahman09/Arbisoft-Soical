import { combineReducers } from "redux";
import PostReducer from "store/reducer/PostsReducer";
import LoginReducer from "store/reducer/LoginReducer";
import AppReducer from "store/reducer/AppReducer";

const rootReducer = combineReducers({
  posts: PostReducer,
  login: LoginReducer,
  app: AppReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
