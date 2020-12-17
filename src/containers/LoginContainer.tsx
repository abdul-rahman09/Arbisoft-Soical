import { connect } from "react-redux";
import { UserAuthenticate, UserUpdate } from "store/actions/userActions";
import { RootState } from "store/reducer/index";
import LoginPage from "components/WithFormikYup";
const stateToProps = (state: RootState) => {
  return {
    login: state.login,
    app: state.app,
  };
};
const mapDispatchToProps = {
  UserUpdate,
  authenticate: UserAuthenticate,
};
export default connect(stateToProps, mapDispatchToProps)(LoginPage);
