import MainButton from "../../../../MainButton/MainButton";
import icons from "../../../../../images/icons.svg";
import css from "./UserDropdown.module.scss";
import buttonCss from "../../../../MainButton/MainButton.module.scss";
import PropTypes from "prop-types";

export default function UserDropdown({
	handlerEditProfileClick,
	handlerLogoutDropdownClick,
	style,
}) {
	return (
		<div
			className={css.dropdown_container}
			style={style}
		>
			<div className={css.heading}>
				<p>Edit profile</p>
				<button
					onClick={handlerEditProfileClick}
					className={css.button}
				>
					<svg className={css.pen_icon}>
						<use href={icons + "#pen"}></use>
					</svg>
				</button>
			</div>
			<MainButton
				propClass={buttonCss.dropdownButton}
				title="Log out"
				onClick={handlerLogoutDropdownClick}
			/>
		</div>
	);
}

UserDropdown.propTypes = {
	handlerEditProfileClick: PropTypes.func,
	handlerLogoutDropdownClick: PropTypes.func,
	style: PropTypes.object,
};
