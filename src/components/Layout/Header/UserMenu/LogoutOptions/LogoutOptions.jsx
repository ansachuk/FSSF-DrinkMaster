import MainButton from "../../../../MainButton/MainButton";
import icons from "../../../../../images/icons.svg";
import css from "./LogoutOptions.module.scss";
import buttonCss from "../../../../MainButton/MainButton.module.scss";
import PropTypes from "prop-types";

export default function LogoutOptions({ handlerLogoutDropdownClick }) {
	return (
		<div className={css.logout_container}>
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
}

LogoutOptions.propTypes = {
	handlerLogoutDropdownClick: PropTypes.func,
};
