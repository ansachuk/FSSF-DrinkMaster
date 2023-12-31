import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/selectors/authSelectors";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return isLoggedIn ? (
		<Navigate
			to="/"
			replace
		/>
	) : (
		children
	);
}

PublicRoute.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
