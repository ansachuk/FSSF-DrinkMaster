import PropTypes from "prop-types";
import css from "./Container.module.scss";

export default function Container({ children }) {
	return <div className={css.container}>{children}</div>;
}

Container.propTypes = {
	children: PropTypes.object.isRequired,
};
