import PropTypes from "prop-types";
import css from "./MainButton.module.scss";

export default function MainButton({ title, disabled = false, propClass = css.mainButton }) {
	return (
		<button disabled={disabled} className={propClass}>
			{title}
		</button>
	);
}

MainButton.propTypes = {
	title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	disabled: PropTypes.bool,
};
