// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import css from "./OtherDrinksButton.module.scss";

export default function OtherDrinksButton() {
	return (
		<div className="css.otherButtonWrapper">
			<NavLink
				className={css.otherButton}
				// to="drinks/:categoryName"
				to={"drinks/:categoryName"}
			>
				Other drinks
			</NavLink>
		</div>
	);
}

// OtherDrinksButton.propTypes = {
// 	type: PropTypes.string,
// 	title: PropTypes.string.isRequired,
// 	propClass: PropTypes.string,
// 	disabled: PropTypes.bool,
// 	onClick: PropTypes.func,
// };
