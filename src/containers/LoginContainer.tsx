import { connect } from "react-redux";
import { UserAuthenticate } from "store/actions/index";
import { RootState } from "store/reducer/index";
import LoginPage from "components/LoginPage";
const stateToProps = (state: RootState) => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    authenticate: (email: string, password: string) => {
      return dispatch(UserAuthenticate(email, password));
    },
  };
};
export default connect(stateToProps, mapDispatchToProps)(LoginPage);
