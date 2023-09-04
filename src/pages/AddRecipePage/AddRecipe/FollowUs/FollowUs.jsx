import { SocialLinks } from "../../../../components/Layout/Footer/SocialLinks/SocialLinks";
import css from "./FollowUs.module.scss";

export default function FollowUs() {
	return (
		<div className={css.wraper}>
			<h3 className={css.title}>FollowUs</h3>
			<SocialLinks />
		</div>
	);
}
