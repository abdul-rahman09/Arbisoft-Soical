import { connect } from "react-redux";
import { RootState } from "store/reducer/index";
import PostFormFormik from "components/PostFormFormik";
const stateToProps = (state: RootState, props: any) => {
  return {
    app: state.app,
    login: state.login,
    ...props,
  };
};
export default connect(stateToProps, null)(PostFormFormik);
