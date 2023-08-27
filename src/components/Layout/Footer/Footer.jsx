// import { SocialLinks, Logo, Nav, EmailSubscription } from "components";

import css from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "./Logo/Logo";
import { SocialLinks } from "./SocialLinks/SocialLinks";
import { Nav } from "./Nav/Nav";

export default function Footer() {
	return (
		<div className={css.FooterContent}>
			<div className={css.FlexContainer}>
				<div className={css.FooterGroup}>
					<div>
						<Logo />
						<SocialLinks />
					</div>
					<Nav />
				</div>
				{/* <EmailSubscription /> */}
			</div>
			<div className={css.FooterInfo}>
				<p className={css.FooterText}>©2023 Drink Master. All rights reserved.</p>
				<div>
					<Link
						to="/privacy"
						className={css.FooterText}
					>
						Privacy Policy
					</Link>
					<Link
						to="/terms"
						className={css.FooterText}
					>
						Terms of Service
					</Link>
				</div>
			</div>
		</div>
	);
}
