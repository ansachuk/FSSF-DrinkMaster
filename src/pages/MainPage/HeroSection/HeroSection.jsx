import { NavLink } from "react-router-dom";
import css from "./HeroSection.module.scss";

export default function HeroSection() {
	return (
		<div>
			<section className={css.heroSection}>
				<div className={css.heroContainer}>
					<h1 className={css.heroTitle}>
						<nobr>Craft Your Perfect</nobr> <br /> Drink with Drink Master
					</h1>

					<div className={css.heroText}>
						Unlock your inner mixologist with Drink Master, your one-stop destination for exploring,
						crafting, and mastering the world's finest beverages.
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
				<div className={css.first_ball}></div>
				<div className={css.second_ball}></div>
				<div className={css.third_ball}></div>
				<div className={css.fourth_ball}></div>
			</section>
		</div>
	);
}
