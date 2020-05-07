import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { URL_PROFILE } from "../../scripts/constants/urls";
import { tokenLogin } from "../../redux/actionCreators/user";

const ResetPassword = () => {
  const { token } = useParams();
  const history = useHistory();
  if (token) {
    tokenLogin(token);
  }
  history.replace(URL_PROFILE);
  return null;
};

export default connect(null, { tokenLogin })(ResetPassword);
