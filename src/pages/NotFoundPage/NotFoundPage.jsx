import MainTitle from "../../../src/components/MainTitle/MainTitle";
import NotFound from "../../pages/NotFoundPage/NotFound/NotFound";
import css from "../NotFoundPage/NotFoundPage.module.scss";

export default function NotFoundPage() {
	return (
		<div className={css.wrapper}>
			<div className={css.container}>
				<MainTitle className={css.mainTitle}>
					<NotFound className={css.notfound} />
				</MainTitle>
			</div>
		</div>
	);
}
