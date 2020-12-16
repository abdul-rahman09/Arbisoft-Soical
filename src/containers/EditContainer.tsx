import { connect } from "react-redux";
import { showEditItem } from "store/actions/postActions";
import { RootState } from "store/reducer/index";
import EditComponent from "components/EditComponent";

const stateToProps = (state: RootState, props: any) => {
  return {
    post: { ...props.post },
    login: state.login,
  };
};
const mapDispatchToProps = {
  editPost: showEditItem,
};
export default connect(stateToProps, mapDispatchToProps)(EditComponent);
