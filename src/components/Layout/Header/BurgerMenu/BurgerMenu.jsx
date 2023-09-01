import icons from "../../../../images/icons.svg";
import css from "./BurgerMenu.module.scss";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";

export default function BurgerMenu({ toggleMenu, isOpenBurgerMenu, isDesktop }) {
	return (
		<>
			<div
				onClick={toggleMenu}
				id="burger_menu"
			>
				<svg className={css.icon}>
					{isOpenBurgerMenu ? (
						<use href={icons + "#close"}></use>
					) : (
						<use href={icons + "#burger"}></use>
					)}
				</svg>
			</div>

			{isOpenBurgerMenu && !isDesktop && <Navigation />}
		</>
	);
}

BurgerMenu.propTypes = {
	toggleMenu: PropTypes.func,
	isOpenBurgerMenu: PropTypes.bool,
	isDesktop: PropTypes.bool,
};
