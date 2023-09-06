import PropTypes from "prop-types";

import Container from "../Container/Container";
import DrinkDefault from "../../images/static/main/Drink/main@1x.jpg";
import DrinkImage2 from "../../images/static/main/Drink/main@2x.jpg";
import DrinkImg1 from "../../images/static/main/Drink/main@1x.webp";
import DrinkImg2 from "../../images/static/main/Drink//main@2x.webp";
import css from "./NotAdded.module.scss";

export default function NotAdded({ text }) {
	return (
		<Container>
			<div className={css.wrapDiv}>
				<picture>
					<source
						srcSet={`${DrinkImg1}, ${DrinkImg2} 2x`}
						type="image/webp"
					/>
					<source
						srcSet={`${DrinkDefault}, ${DrinkImage2} 2x`}
						type="image/jpeg"
					/>
					<img
						className={css.notFoundImg}
						src={DrinkDefault}
						alt="No recipe"
					/>
				</picture>
				<p className={css.notFavoriteText}>{text}</p>
			</div>
		</Container>
	);
}

NotAdded.propTypes = {
	text: PropTypes.string.isRequired,
};
