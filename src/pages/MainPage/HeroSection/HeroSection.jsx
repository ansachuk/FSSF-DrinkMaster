import { NavLink } from "react-router-dom";
import css from "./HeroSection.module.scss";

export default function HeroSection() {
	return (
		<div>
			<section className={css.heroSection}>
				<div className={css.heroContainer}>
					<h1 className={css.heroTitle}>Craft Your Perfect Drink with Drink Master</h1>

					<p className={css.heroText}>
						Unlock your inner mixologist with Drink Master, your one-stop destination for exploring,
						crafting, and mastering the world's finest beverages.
					</p>

					<nav>
						<NavLink
							className={css.heroButton}
							to="/add"
						>
							Add recipe
						</NavLink>
					</nav>
				</div>
			</section>
		</div>
	);
}

// ==================================================================

// 	return (
// 		<Hero currenttheme={currentTheme}>
// 			<Container>
// 				<Herowrapper>
// 					<StyledMainPageTitle>Craft Your Perfect Drink with Drink Master</StyledMainPageTitle>
// 					<Herodescription>
// 						Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest
// 						beverages.
// 					</Herodescription>
// 					<ReusableButton
// 						text="Add Recipe"
// 						ariaLabel="Button to open Add Recipe Page"
// 						onClick={() => {
// 							navigate("/main/add");
// 						}}
// 					/>
// 				</Herowrapper>
// 			</Container>
// 		</Hero>
// 	);
// };
// ================================================================
