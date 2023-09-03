import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectAccessToken } from "../../redux/selectors/authSelectors";
import { Navigate } from "react-router-dom";

export default function PrivatRoute({ children }) {
	const isLoggedIn = useSelector(selectAccessToken);

	return isLoggedIn ? children : <Navigate to="/welcome" />;
}

PrivatRoute.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
