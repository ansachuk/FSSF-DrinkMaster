import { NavLink } from "react-router-dom";

import {
	titleStart,
	textStart,
	listStart,
	btnStart,
	containerWelcome,
} from "./WelcomePage.module.scss";
export default function WelcomePage() {
	return (
		<>
			<div className={containerWelcome}>
				<h2 className={titleStart}>Welcome to the app!</h2>
				<p className={textStart}>
					This app offers more than just a collection of recipes - it is designed to be your very
					own digital cookbook. You can easily save and retrieve your own recipes at any time.
				</p>
				<div className={listStart}>
					<NavLink
						to="signup"
						className={btnStart}
					>
						Registration
					</NavLink>
					<NavLink
						to="signin"
						className={btnStart}
					>
						Sign In
					</NavLink>
				</div>
			</div>
		</>
	);
}
