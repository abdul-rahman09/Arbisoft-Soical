import { connect } from "react-redux";
import {
  closePressed,
  showEditItem,
  saveEditItem,
} from "store/actions/postActions";
import { AddComment } from "store/actions/commentActions";
import { RootState } from "store/reducer/index";
import PostComponent from "components/PostComponent";

const stateToProps = (state: RootState, props: any) => {
  return {
    item: { ...props.item },
    setData: props.setData,
    login: state.login,
    app: state.app,
    history: {},
  };
};
const mapDispatchToProps = {
  addComment: AddComment,
  closePressed: closePressed,
  editItem: showEditItem,
  saveEditItem: saveEditItem,
};
export default connect(stateToProps, mapDispatchToProps)(PostComponent);
