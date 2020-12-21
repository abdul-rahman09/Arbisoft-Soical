import { connect } from "react-redux";
import { UserUpdate, logout } from "store/actions/userActions";
import { RootState } from "store/reducer/index";
import HOC from "components/SecuredRoute";
import Board from "components/Board";
const stateToProps = (state: RootState) => {
  return {
    login: state.login,
    app: state.app,
  };
};
const mapDispatchToProps = {
  UserUpdate,
  logout,
};
export default connect(stateToProps, mapDispatchToProps)(HOC(Board));
