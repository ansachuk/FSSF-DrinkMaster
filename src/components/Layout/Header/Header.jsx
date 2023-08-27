import { NavLink } from "react-router-dom";
import cssTest from "./temp-div-styles.module.scss";
import css from "./Header.module.scss";
import Logo from "../../Logo/Logo";
import UserMenu from "./UserMenu/UserMenu";
import Navigation from "./Navigation/Navigation";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";

export default function Header() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

	const updateMedia = () => {
		setIsDesktop(window.innerWidth >= 1280);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);

		return () => {
			window.removeEventListener("resize", updateMedia);
		};
	});

	return (
		<>
			<header className={css.header}>
				<div className={css.header_wrapper}>
					<Logo />
					{isDesktop && <Navigation />}
					<UserMenu />
					<BurgerMenu />
				</div>
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
