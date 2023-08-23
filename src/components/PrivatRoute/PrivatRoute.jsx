export default function PrivatRoute({ children }) {
	// const isAuth = useSelector(selectIsLoggedIn);
	// 	return isAuth ? children : <Navigate to="/welcome" />;
	return children;
}
