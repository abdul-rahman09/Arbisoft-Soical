import { connect } from "react-redux";
import { UserUpdate } from "store/actions/userActions";
import { RootState } from "store/reducer/index";
import HOC from "components/SecuredRoute";
import Board from "components/Board";
const stateToProps = (state: RootState) => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = {
  UserUpdate,
};
export default connect(stateToProps, mapDispatchToProps)(HOC(Board));
