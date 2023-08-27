import css from "./Nav.module.scss";

export const Nav = () => {
	return (
		<nav>
			<ul className={css.list_items}>
				<li>
					<a
						className={css.link_nav}
						href="/drinks"
					>
						Drinks
					</a>
				</li>
				<li>
					<a
						className={css.link_nav}
						href="/add"
					>
						Add recipes
					</a>
				</li>
				<li>
					<a
						className={css.link_nav}
						href="/my"
					>
						My recipes
					</a>
				</li>
				<li>
					<a
						className={css.link_nav}
						href="/favorite"
					>
						Favorites
					</a>
				</li>
			</ul>
		</nav>
	);
};
