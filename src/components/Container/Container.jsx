import PropTypes from "prop-types";
import css from "./Container.module.scss";

export default function Container({ children, styleProp }) {
	return (
		<div
			className={css.container}
			style={styleProp}
		>
			{children}
		</div>
	);
}

Container.propTypes = {
	children: PropTypes.object.isRequired,
	styleProp: PropTypes.object,
};
