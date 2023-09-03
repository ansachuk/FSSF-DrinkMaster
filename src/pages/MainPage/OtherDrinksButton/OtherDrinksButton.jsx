import { NavLink } from "react-router-dom";

import css from "./OtherDrinksButton.module.scss";

export default function OtherDrinksButton() {
	return (
		<div className={css.otherButtonWrapper}>
			<NavLink
				className={css.otherButton}
				to="drinks"
			>
				Other drinks
			</NavLink>
		</div>
	);
}
