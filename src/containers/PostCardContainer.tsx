import { connect } from "react-redux";
import { showEditItem, saveEditItem } from "store/actions/postActions";
import { AddComment } from "store/actions/commentActions";
import { RootState } from "store/reducer/index";
import PostComponent from "components/PostComponent";

const stateToProps = (state: RootState, props: any) => {
  return {
    item: { ...props.item },
    setData: props.setData,
    login: state.login,
  };
};
const mapDispatchToProps = {
  addComment: AddComment,
  editItem: showEditItem,
  saveEditItem: saveEditItem,
};
export default connect(stateToProps, mapDispatchToProps)(PostComponent);
