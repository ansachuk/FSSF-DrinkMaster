import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";

export default function Navigation() {
	return (
		<nav className={css.nav}>
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
						to="/drinks/1"
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
						to="/recipe/1"
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
}
