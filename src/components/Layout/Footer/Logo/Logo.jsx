import React from "react";
import css from "./Logo.module.scss";
import { Link } from "react-router-dom";
import icons from "../../../../images/icons.svg";

export const Logo = () => {
	return (
		<Link
			className={css.LogoElement}
			to="/"
		>
			<svg className={css.LogoIcon}>
				<use href={icons + "#logo"}></use>
			</svg>
			<span className={css.LogoTitle}>Drink Master</span>
		</Link>
	);
};
