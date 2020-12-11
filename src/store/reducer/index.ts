import { combineReducers } from "redux";
import PostReducer from "store/reducer/PostsReducer";
import LoginReducer from "store/reducer/LoginReducer";

const rootReducer = combineReducers({
  posts: PostReducer,
  login: LoginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
