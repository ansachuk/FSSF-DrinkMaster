import { NavLink } from "react-router-dom";
import icons from "../../images/icons.svg";
import css from "./Logo.module.scss";

export default function Logo() {
	return (
		<NavLink to="/">
			<div className={css.logo_group}>
				<svg className={css.icon}>
					<use href={icons + "#logo"}></use>
				</svg>
				<p className={css.name}>Drink Master</p>
			</div>
		</NavLink>
	);
}
