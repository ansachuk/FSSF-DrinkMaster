import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";
import { forwardRef } from "react";

const Navigation = forwardRef((_, ref) => {
	return (
		<nav
			className={css.nav}
			ref={ref}
		>
			<ul
				className={css.list}
				id="navigation"
			>
				<li className={css.item}>
					<NavLink
						to="/"
						className={css.link}
					>
						Home
					</NavLink>
				</li>
				<li className={css.item}>
					<NavLink
						to="/drinks"
						className={css.link}
					>
						Drinks
					</NavLink>
				</li>
				<li className={css.item}>
					<NavLink
						to="/add"
						className={css.link}
					>
						Add recipe
					</NavLink>
				</li>
				<li className={css.item}>
					<NavLink
						to="/my"
						className={css.link}
					>
						My recipes
					</NavLink>
				</li>
				<li className={css.item}>
					<NavLink
						to="/favorite"
						className={css.link}
					>
						Favorites
					</NavLink>
				</li>
			</ul>
		</nav>
	);
});

Navigation.displayName = "Navigation";

export default Navigation;
