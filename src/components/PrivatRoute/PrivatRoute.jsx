import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectAccessToken, selectIsLoggedIn } from "../../redux/selectors/authSelectors";
import { Navigate } from "react-router-dom";

export default function PrivatRoute({ children }) {
	const token = useSelector(selectAccessToken);
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return isLoggedIn && token ? children : <Navigate to="/welcome" />;
}

PrivatRoute.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
