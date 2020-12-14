import { connect } from "react-redux";
import { UserAuthenticate, UserUpdate } from "store/actions/index";
import { RootState } from "store/reducer/index";
import HOC from "components/SecuredRoute";
import LoginPage from "components/LoginPage";
const stateToProps = (state: RootState) => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = {
  UserUpdate,
  authenticate: UserAuthenticate,
};
export default connect(stateToProps, mapDispatchToProps)(LoginPage);
