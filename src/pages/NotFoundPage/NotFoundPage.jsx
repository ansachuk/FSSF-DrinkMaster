import MainTitle from "../../../src/components/MainTitle/MainTitle";
import NotFound from "../../pages/NotFoundPage/NotFound/NotFound";
import css from "../NotFoundPage/NotFoundPage.module.scss";

export default function NotFoundPage() {
	return (
		<div className={css.container}>
			<MainTitle>
				<NotFound />
			</MainTitle>
		</div>
	);
}
