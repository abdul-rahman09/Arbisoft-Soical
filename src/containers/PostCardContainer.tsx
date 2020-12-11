import { connect } from "react-redux";
import {
  AddComment,
  closePressed,
  showEditItem,
  saveEditItem,
} from "store/actions/index";
import { RootState } from "store/reducer/index";
import PostComponent from "components/PostComponent";

const stateToProps = (state: RootState, props: any) => {
  return {
    item: { ...props.item },
    setData: props.setData,
  };
};
const mapDispatchToProps = {
  addComment: AddComment,
  closePressed: closePressed,
  editItem: showEditItem,
  saveEditItem: saveEditItem,
};
export default connect(stateToProps, mapDispatchToProps)(PostComponent);
