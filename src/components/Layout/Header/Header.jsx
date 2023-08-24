import { NavLink } from "react-router-dom";
import css from "./temp-div-styles.module.scss";

export default function Header() {
	return (
		<header>
			<p>Header</p>
			<div className={css.tempNav}>
				{/* Тимчасовий дів - створений для переходу між сторінками */}
				<NavLink to="/welcome">welcome</NavLink>
				<NavLink to="/">Main</NavLink>
				<NavLink to="/drinks/1">Category 1</NavLink>
				<NavLink to="/add">Add</NavLink>
				<NavLink to="/favorite">Favorite</NavLink>
				<NavLink to="/recipe/1">Recipe 1</NavLink>
				<NavLink to="/error">Not found</NavLink>
			</div>
		</header>
	);
}
