import css from "./Footer.module.scss";
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
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://docs.google.com/document/d/1Ck8e_RO-DLguG9DnIPeoUE5OkEReDhzwZ1ojE8Ygjy4/edit?usp=sharing"
							className={css.FooterText}
						>
							Privacy Policy
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://docs.google.com/document/d/1i_HoneWhEKvyjp5Vt2afM8NBNC-rWKcRs3OJQdX_f3U/edit?usp=sharing"
							className={css.FooterText}
						>
							Terms of Service
						</a>
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
