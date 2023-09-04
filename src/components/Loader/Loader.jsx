import { Jelly } from "@uiball/loaders";
import css from "./Loader.module.scss";

export default function Loader() {
	return (
		<div className={css.backdrop}>
			<Jelly
				size={180}
				speed={0.8}
				color="#0a1125"
			/>
		</div>
	);
}
