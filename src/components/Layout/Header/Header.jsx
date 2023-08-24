import { NavLink } from "react-router-dom";
import cssTest from "./temp-div-styles.module.scss";
import css from "./Header.module.scss"
import Logo from "./Logo/Logo";

export default function Header() {
	return (
		<>
		<header className={css.header}>
			<Logo />

		</header>

		<p>Header</p>
		<div className={cssTest.tempNav}>
			{/* Тимчасовий дів - створений для переходу між сторінками */}
			<NavLink to="/welcome">welcome</NavLink>
			<NavLink to="/">Main</NavLink>
			<NavLink to="/drinks/1">Category 1</NavLink>
			<NavLink to="/add">Add</NavLink>
			<NavLink to="/favorite">Favorite</NavLink>
			<NavLink to="/recipe/1">Recipe 1</NavLink>
			<NavLink to="/error">Not found</NavLink>
		</div>
</>
	);
}
