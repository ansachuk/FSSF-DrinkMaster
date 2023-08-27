import PropTypes from "prop-types";
import css from "./MainButton.module.scss";

export default function MainButton({ type = "submit", onClick, title, disabled = false, propClass = css.mainButton }) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={propClass}
		>
			{title}
		</button>
	);
}

MainButton.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};
