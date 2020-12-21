import { connect } from "react-redux";
import { getPosts, CreatePost } from "store/actions/postActions";
import { RootState } from "store/reducer/index";
import Card from "components/Card";
const stateToProps = (state: RootState) => {
  return {
    title: "Posts",
    posts: state.posts,
    app: state.app,
    login: state.login,
  };
};
const mapDispatchToProps = {
  getData: getPosts,
  postData: CreatePost,
};
export default connect(stateToProps, mapDispatchToProps)(Card);
