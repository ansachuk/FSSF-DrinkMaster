import { NavLink } from "react-router-dom";
import css from "./HeroSection.module.scss";

export default function HeroSection() {
	return (
		<div>
			<section className={css.heroSection}>
				<div className={css.heroContainer}>
					<div className={css.heroText}>
						Unlock your inner mixologist with Drink Master, your one-stop destination for exploring,
						crafting, and mastering the world &#39;s finest beverages.
					</div>

					<div className={css.addButton}>
						<NavLink
							className={css.heroButton}
							to="/add"
						>
							Add recipe
						</NavLink>
					</div>
				</div>
			</section>
		</div>
	);
}
