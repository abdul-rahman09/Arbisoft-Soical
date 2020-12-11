import { connect } from "react-redux";
import { UserAuthenticate } from "store/actions/index";
import { RootState } from "store/reducer/index";
import LoginPage from "components/LoginPage";
const stateToProps = (state: RootState) => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = {
  authenticate: UserAuthenticate,
};
export default connect(stateToProps, mapDispatchToProps)(LoginPage);
