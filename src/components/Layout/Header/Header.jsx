import { NavLink, useLocation } from "react-router-dom";
import cssTest from "./temp-div-styles.module.scss";
import css from "./Header.module.scss";
import Logo from "../../Logo/Logo";
import UserMenu from "./UserMenu/UserMenu";
import Navigation from "./Navigation/Navigation";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";

export default function Header() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
	const [isOpenBurgerMenu, setisOpenBurgerMenu] = useState(false);

	const location = useLocation();

	const toggleMenu = () => setisOpenBurgerMenu(!isOpenBurgerMenu);

	const updateMedia = () => {
		setIsDesktop(window.innerWidth >= 1280);
		if (isDesktop) {
			setisOpenBurgerMenu(false);
		}
	};

	const handlerBackdropClicks = e => {
		const backdrop =
			e.target.closest("#burger_menu") === null && e.target.closest("#navigation") === null;
		if (backdrop) {
			setisOpenBurgerMenu(false);
		}
	};

	const handlerEscClick = e => {
		const target = e.key === "Escape";
		if (target) {
			setisOpenBurgerMenu(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		if (isOpenBurgerMenu) {
			window.addEventListener("click", handlerBackdropClicks);
			window.addEventListener("keydown", handlerEscClick);
		}

		return () => {
			window.removeEventListener("resize", updateMedia);
			window.removeEventListener("click", handlerBackdropClicks);
			window.removeEventListener("keydown", handlerEscClick);
		};
	});

	useEffect(() => {
		setisOpenBurgerMenu(false);
	}, [location.pathname]);

	return (
		<>
			<header className={css.header}>
				<div className={css.header_wrapper}>
					<Logo />
					{isDesktop && <Navigation />}
					<UserMenu />
					<BurgerMenu
						toggleMenu={toggleMenu}
						isOpenBurgerMenu={isOpenBurgerMenu}
						isDesktop={isDesktop}
					/>
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
