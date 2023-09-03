import icons from "../../../../images/icons.svg";
import css from "./BurgerMenu.module.scss";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { createRef } from "react";

export default function BurgerMenu({ toggleMenu, isOpenBurgerMenu, isDesktop }) {
	const nodeRef = createRef(null);

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

			<CSSTransition
				in={isOpenBurgerMenu && !isDesktop}
				nodeRef={nodeRef}
				timeout={250}
				classNames="burger"
				unmountOnExit
				onEnter={() => toggleMenu}
				onExited={() => toggleMenu}
			>
				<Navigation ref={nodeRef} />
			</CSSTransition>
		</>
	);
}

BurgerMenu.propTypes = {
	toggleMenu: PropTypes.func,
	isOpenBurgerMenu: PropTypes.bool,
	isDesktop: PropTypes.bool,
};
