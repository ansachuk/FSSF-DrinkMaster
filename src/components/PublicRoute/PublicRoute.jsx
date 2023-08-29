import { useSelector } from "react-redux";

import { selectAuthAccessToken } from "../../redux/selectors/authSelectors";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
	const isLoggedIn = useSelector(selectAuthAccessToken);

	return isLoggedIn ? <Navigate to="/" /> : children;
}
