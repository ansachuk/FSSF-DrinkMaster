import icons from "../../../../images/icons.svg";
import css from "./UserMenu.module.scss";

export default function UserMenu() {
	return (
		<div className={css.user_group}>
			<svg className={css.icon}>
				<use href={icons + "#user"}></use>
			</svg>
			<span>Username</span>
		</div>
	);
}
