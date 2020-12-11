import { combineReducers } from "redux";
import PostReducer from "store/reducer/PostsReducer";

const rootReducer = combineReducers({
  posts: PostReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
