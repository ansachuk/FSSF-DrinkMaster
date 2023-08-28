import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./Nav.module.scss";

export const Nav = () => {
	const location = useLocation();

	return (
		<nav>
			<ul className={css.list_items}>
				<li>
					<Link
						className={`${css.link_nav} ${location.pathname === "/drinks/:categoryName" ? css.active_link : ""}`}
						to="/drinks/:categoryName"
					>
						Drinks
					</Link>
				</li>
				<li>
					<Link
						className={`${css.link_nav} ${location.pathname === "/add" ? css.active_link : ""}`}
						to="/add"
					>
						Add recipes
					</Link>
				</li>
				<li>
					<Link
						className={`${css.link_nav} ${location.pathname === "/my" ? css.active_link : ""}`}
						to="/my"
					>
						My recipes
					</Link>
				</li>
				<li>
					<Link
						className={`${css.link_nav} ${location.pathname === "/favorite" ? css.active_link : ""}`}
						to="/favorite"
					>
						Favorites
					</Link>
				</li>
			</ul>
		</nav>
	);
};
