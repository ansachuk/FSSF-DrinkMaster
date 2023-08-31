import { Outlet } from "react-router-dom";
import { containerLayout } from "./WelcomePageLayout.module.scss";

export default function WelcomePageLayout() {
	return (
		<div className={containerLayout}>
			<Outlet />
		</div>
	);
}
