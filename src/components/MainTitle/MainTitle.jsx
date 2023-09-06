import PropTypes from "prop-types";

import Container from "../Container/Container";
import css from "./MainTitle.module.scss";

export default function MainTitle({ title, children, styleProp }) {
	return (
		<Container styleProp={styleProp}>
			<main>
				<h1 className={css.title}>{title}</h1>
				{children}
				<div className={css.first_ball}></div>
				<div className={css.second_ball}></div>
				<div className={css.third_ball}></div>
				<div className={css.fourth_ball}></div>
			</main>
		</Container>
	);
}

MainTitle.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	styleProp: PropTypes.object,
};
