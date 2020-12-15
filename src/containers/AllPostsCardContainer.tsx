import { connect } from "react-redux";
import { getPosts, CreatePost, closePressed } from "store/actions/postActions";
import { RootState } from "store/reducer/index";
import Card from "components/Card";
const stateToProps = (state: RootState) => {
  return {
    title: "Posts",
    posts: state.posts.data,
    app: state.app,
    login: state.login,
  };
};
const mapDispatchToProps = {
  getData: getPosts,
  postData: CreatePost,
  closePressed: closePressed,
};
export default connect(stateToProps, mapDispatchToProps)(Card);
