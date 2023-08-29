import Container from "../Container/Container";
import css from "./NotAdded.module.scss";

export default function NotAdded() {
	return (
		<Container>
			<div className={css.wrapDiv}>
				<img
					className={css.notFoundImg}
					src={DrinkDefault}
					alt="No added recipes"
				/>
				<p className={css.notFavoriteText}>You haven&apos;t added any favorite cocktails yet</p>
			</div>
		</Container>
	);
}
