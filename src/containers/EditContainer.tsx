import { connect } from "react-redux";
import { showEditItem } from "store/actions/postActions";
import { RootState } from "store/reducer/index";
import EditComponent from "components/EditComponent";

const stateToProps = (state: RootState, props: any) => {
  return {
    item: { ...props.item },
    login: state.login,
  };
};
const mapDispatchToProps = {
  editItem: showEditItem,
};
export default connect(stateToProps, mapDispatchToProps)(EditComponent);
