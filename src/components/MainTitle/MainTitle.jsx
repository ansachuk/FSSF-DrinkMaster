import PropTypes from "prop-types";

import Container from "../Container/Container";
import css from "./MainTitle.module.scss";

export default function MainTitle({ title, children }) {
	return (
		<Container>
			<main>
				<h1 className={css.title}>{title}</h1>
				{children}
				<div className={css.firstBall}></div>
				<div className={css.secondBall}></div>
				<div className={css.thirdBall}></div>
				<div className={css.fourthBall}></div>
			</main>
		</Container>
	);
}

MainTitle.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
