import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function WelcomePage() {
	return (
		<>
			<div>
				<h2 className="title_start">Welcome to the app!</h2>
				<p className="text_start ">
					This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and
					retrieve your own recipes at any time.
				</p>
				<div className="list_start">
					<NavLink
						to="signup"
						className="btn_start"
					>
						Registration
					</NavLink>
					<NavLink
						to="signin"
						className="btn_start"
					>
						Sign In
					</NavLink>
				</div>
			</div>
			<Outlet />
		</>
	);
}
