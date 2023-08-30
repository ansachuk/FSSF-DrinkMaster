import PropTypes from "prop-types";

import Container from "../Container/Container";
import css from "./NotAdded.module.scss";
import DrinkDefault from "../../images/static/my-recepies/imgdefault.jpg";

export default function NotAdded({ text }) {
	return (
		<Container>
			<div className={css.wrapDiv}>
				<img
					className={css.notFoundImg}
					src={DrinkDefault}
					alt="No added recipes"
				/>
				<p className={css.notFavoriteText}>{text}</p>
			</div>
		</Container>
	);
}

NotAdded.propTypes = {
	text: PropTypes.string.isRequired,
};
