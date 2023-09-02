import MainButton from "../../../../MainButton/MainButton";
import icons from "../../../../../images/icons.svg";
import css from "./LogoutOptions.module.scss";
import buttonCss from "../../../../MainButton/MainButton.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../../redux/operations/authOperations";
import { forwardRef } from "react";

const LogoutOptions = forwardRef(({ handlerLogoutDropdownClick }, ref) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlerLogoutClick = () => {
		dispatch(logout());
		navigate("/welcome");
	};

	return (
		<div
			className={css.logout_container}
			ref={ref}
		>
			<button
				onClick={handlerLogoutDropdownClick}
				className={css.close_button}
			>
				<svg className={css.close_icon}>
					<use href={icons + "#close"}></use>
				</svg>
			</button>
			<p>Are you sure you want to log out?</p>
			<div className={css.button_container}>
				<MainButton
					onClick={handlerLogoutClick}
					propClass={buttonCss.biggerButton}
					title="Logout"
				/>
				<MainButton
					onClick={handlerLogoutDropdownClick}
					propClass={buttonCss.cancelButton}
					title="Cancel"
				/>
			</div>
		</div>
	);
});

LogoutOptions.displayName = "LogoutOptions";

export default LogoutOptions;

LogoutOptions.propTypes = {
	handlerLogoutDropdownClick: PropTypes.func,
};
