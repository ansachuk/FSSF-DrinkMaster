import DrinkDefault from "../../../images/static/main/Drink/main@1x.jpg";
import css from "../NotFound/NotFound.module.scss";

export default function NotFoundPage() {
	return (
		<div className={css.imgBox}>
			{/* <picture>
				<source
					srcset="../../../images/static/main/Drink/main@1x.webp 1x, ../../../images/static/main/Drink//main@2x.webp 2x"
					type="image/webp"
				/>
				<source
					srcset="../../../images/static/main/Drink/main@1x.jpg 1x, ../../../images/static/main/Drink/main@2x.jpg 2x"
					type="image/jpeg"
				/>
				<img
					className={css.notFoundImg}
					src={DrinkDefault}
					alt="Not Found"
				/>
			</picture> */}
			<img
				className={css.notFoundImg}
				src={DrinkDefault}
				alt="Not Found"
			/>
		</div>
	);
}
