import { connect } from "react-redux";
import { closePressed } from "store/actions/postActions";
import CrossComponent from "components/CrossButtonComponent";

const mapDispatchToProps = {
  closePressed,
};
export default connect(null, mapDispatchToProps)(CrossComponent);
