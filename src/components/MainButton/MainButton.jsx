import PropTypes from "prop-types";
import css from "./MainButton.module.scss";

export default function MainButton({ onClick, title, disabled = false, propClass = css.mainButton }) {
	return (
		<button disabled={disabled} onClick={onClick} className={propClass}>
			{title}
		</button>
	);
}

MainButton.propTypes = {
	title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};
