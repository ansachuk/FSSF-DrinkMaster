import css from "./Footer.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import { SocialLinks } from "./SocialLinks/SocialLinks";
import { Nav } from "./Nav/Nav";
import EmailSubscription from "./EmailSubscription/EmailSubscription";

export default function Footer() {
	return (
		<>
			<div className={css.FooterContainer}>
				<div className={css.FlexContainer}>
					<div className={css.FooterGroup}>
						<div>
							<Logo />
							<SocialLinks />
						</div>
						<Nav />
					</div>
					<EmailSubscription />
				</div>
				<div className={css.FooterInfo}>
					<p className={css.FooterText}>©2023 Drink Master. All rights reserved.</p>
					<div>
						<Link
							to="#"
							className={css.FooterText}
						>
							Privacy Policy
						</Link>
						<Link
							to="#"
							className={css.FooterText}
						>
							Terms of Service
						</Link>
					</div>
				</div>
				<div className={css.footer_second_ball}></div>
				<div className={css.footer_third_ball}></div>
			</div>
			<div className={css.footer_first_ball_container}>
				<div className={css.footer_first_ball}></div>
			</div>
		</>
	);
}
