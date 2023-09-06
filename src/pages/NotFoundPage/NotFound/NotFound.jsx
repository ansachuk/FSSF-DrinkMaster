import DrinkDefault from "../../../images/static/main/main.png";
import css from "../NotFound/NotFound.module.scss";

export default function NotFoundPage() {
	return (
		<div className={css.imgBox}>
			<img
				className={css.notFoundImg}
				src={DrinkDefault}
				alt="Not Found"
			/>
			<p className={css.notFoundText}>
				<span>4</span> <span>4</span>
			</p>
		</div>
	);
}
