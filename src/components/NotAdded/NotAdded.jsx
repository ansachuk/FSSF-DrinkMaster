import PropTypes from "prop-types";

import Container from "../Container/Container";
import DrinkDefault from "../../images/static/main/Drink/main@1x.jpg";
import css from "./NotAdded.module.scss";

export default function NotAdded({ text }) {
	return (
		<Container>
			<div className={css.wrapDiv}>
				{/* <picture>
					<source
						srcset="src/images/static/main/Drink/main@1x.webp 1x, src/images/static/main/Drink//main@2x.webp 2x"
						type="image/webp"
					/>
					<source
						srcset="src/images/static/main/Drink/main@1x.jpg 1x, src/images/static/main/Drink/main@2x.jpg 2x"
						type="image/jpeg"
					/>
					<img
						className={css.notFoundImg}
						src={DrinkDefault}
						alt="No recipe"
					/>
				</picture> */}
				<img
					className={css.notFoundImg}
					src={DrinkDefault}
					alt="No recipe"
				/>
				<p className={css.notFavoriteText}>{text}</p>
			</div>
		</Container>
	);
}

NotAdded.propTypes = {
	text: PropTypes.string.isRequired,
};
