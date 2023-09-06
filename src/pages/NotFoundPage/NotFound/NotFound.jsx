import DrinkDefault from "../../../images/static/main/Drink/main@1x.jpg";
import DrinkImage2 from "../../../images/static/main/Drink/main@2x.jpg";
import DrinkImg1 from "../../../images/static/main/Drink/main@1x.webp";
import DrinkImg2 from "../../../images/static/main/Drink//main@2x.webp";
import css from "../NotFound/NotFound.module.scss";

export default function NotFoundPage() {
	return (
		<div className={css.imgBox}>
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
					alt="Not Found"
				/>
			</picture>
		</div>
	);
}
