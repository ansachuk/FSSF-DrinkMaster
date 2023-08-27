import css from "./Nav.module.scss";

export const Nav = () => {
	return (
		<nav>
			<ul className={css.list_items}>
				<li>
					<a
						className={css.link_nav}
						href="/"
					>
						Drinks
					</a>
				</li>
				<li>
					<a
						className={css.link_nav}
						href="/"
					>
						Add recipes
					</a>
				</li>
				<li>
					<a
						className={css.link_nav}
						href="/"
					>
						My recipes
					</a>
				</li>
				<li>
					<a
						className={css.link_nav}
						href="/"
					>
						Favorites
					</a>
				</li>
			</ul>
		</nav>
	);
};
