import MainButton from "../../../../MainButton/MainButton";
import icons from "../../../../../images/icons.svg";
import css from "./EditProfileModal.module.scss";
import buttonCss from "../../../../MainButton/MainButton.module.scss";
import PropTypes from "prop-types";

export default function EditProfileModal({ handlerEditProfileClick }) {
	return (
		<div className={css.edit_container}>
			<button
				onClick={handlerEditProfileClick}
				className={css.close_button}
			>
				<svg className={css.close_icon}>
					<use href={icons + "#close"}></use>
				</svg>
			</button>
			<div className={css.icon_container}>
				<svg className={css.user_large_icon}>
					<use href={icons + "#user"}></use>
				</svg>
				<svg
					className={css.plus_icon}
					viewBox="-5 -5 70 100"
				>
					<use href={icons + "#plus"}></use>
				</svg>
			</div>
			<label className={css.input_container}>
				<input
					type="text"
					placeholder="User name"
					className={css.input}
				/>
				<svg className={css.input_pen_icon}>
					<use href={icons + "#pen"}></use>
				</svg>
			</label>
			<MainButton
				propClass={buttonCss.largeButton}
				title="Save changes"
			/>
		</div>
	);
}

EditProfileModal.propTypes = {
	handlerEditProfileClick: PropTypes.func,
};
