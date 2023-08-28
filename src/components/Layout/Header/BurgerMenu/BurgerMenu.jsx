import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import icons from "../../../../images/icons.svg";
import css from "./BurgerMenu.module.scss";
import Navigation from "../Navigation/Navigation";

export default function BurgerMenu() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
	const location = useLocation();

	const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

	const updateMedia = () => {
		setIsDesktop(window.innerWidth >= 1280);
		if (isDesktop) {
			setIsOpenMenu(false);
		}
	};

	useEffect(() => {
		setIsOpenMenu(false);
	}, [location.pathname]);

	useEffect(() => {
		window.addEventListener("resize", updateMedia);

		return () => {
			window.removeEventListener("resize", updateMedia);
		};
	});

	return (
		<>
			<div onClick={toggleMenu}>
				<svg className={css.icon}>{isOpenMenu ? <use href={icons + "#close"}></use> : <use href={icons + "#burger"}></use>}</svg>
			</div>

			{isOpenMenu && !isDesktop && <Navigation />}
		</>
	);
}
