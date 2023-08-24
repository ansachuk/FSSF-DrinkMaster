import PropTypes from "prop-types";
import css from "./MainButton.module.scss";

export default function MainButton({ title, disabled = false }) {
	return (
		<button disabled={disabled} className={css.mainButton}>
			{title}
		</button>
	);
}

MainButton.propTypes = {
	title: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
};
