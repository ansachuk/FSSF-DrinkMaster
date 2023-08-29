// import { useSelector } from "react-redux";
// import { selectTheme } from "redux/selectors";
// import { useNavigate } from 'react-router';
// import { Container, ReusableButton } from "components";
// import { StyledMainPageTitle } from "components/MainPageTitle/MainPageTitle.styled";
// import { Hero, Herodescription, Herowrapper } from "./Hero.styled";

import { NavLink } from "react-router-dom";
import css from "./HeroSection.module.scss";
// import MainPageTitle from "../../../components/MainPageTitle/MainPageTitle";

// import Main from "../../images/static/main/main.jpg";

// export const HeroSection = () => {
export default function HeroSection() {
	// const currentTheme = useSelector(selectTheme);
	// const navigate = useNavigate();
	return (
		<div>
			<section className="heroSection">
				<div className="heroContainer">
					<h1 className="heroTitle">Craft Your Perfect Drink with Drink Master</h1>

					<p className="heroText">
						Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest
						beverages.
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
				{/* <img
					className={css.heroImage}
					src={Main}
					alt="Cocktail"
					width="710"
					height="790"
				/> */}
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
