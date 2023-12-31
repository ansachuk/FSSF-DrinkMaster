import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { mainPage } from "../../redux/operations/recipiesOperations";
import { selectMainCocktails } from "../../redux/selectors/recipieSelectors";

import MainTitle from "../../components/MainTitle/MainTitle";

import PreviewDrinks from "./PreviewDrinks/PreviewDrinks";
import HeroSection from "./HeroSection/HeroSection";
import OtherDrinksButton from "./OtherDrinksButton/OtherDrinksButton";

import main_desktop from "../../images/static/main/main_desktop.png";
import main_tablet from "../../images/static/main/main_tablet.png";
import main_main_mobile from "../../images/static/main/main_mobile.png";

export default function MainPage() {
	const dispatch = useDispatch();
	const category = useSelector(selectMainCocktails);

	useEffect(() => {
		if (category.length === 0) dispatch(mainPage());
	}, [category.length, dispatch]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const isDesktop = useMediaQuery({ minWidth: 1280 });
	const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1279.99 });

	const stylePropForContainer = {
		backgroundImage: isDesktop
			? `url(${main_desktop})`
			: isTablet
			? `url(${main_tablet})`
			: `url(${main_main_mobile})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: isDesktop
			? "top -85px right"
			: isTablet
			? "top -105px right"
			: "top 70px right",
		backgroundAttachment: "fixed",
		transform: "translate(-1px)",
	};

	const stylePropForTitle = {
		width: isDesktop ? "715px" : isTablet ? "483px" : "279px",
	};

	return (
		<>
			<MainTitle
				title={"Craft Your Perfect Drink with Drink Master"}
				styleProp={stylePropForContainer}
				stylePropTitle={stylePropForTitle}
			>
				<HeroSection />
				<PreviewDrinks
					title="Ordinary Drink"
					data={category.filter(obj => obj._id === "Ordinary Drink")}
				/>
				<PreviewDrinks
					title="Cocktail"
					data={category.filter(obj => obj._id === "Cocktail")}
				/>
				<PreviewDrinks
					title="Shake"
					data={category.filter(obj => obj._id === "Shake")}
				/>
				<PreviewDrinks
					title="Other/Unknown"
					data={category.filter(obj => obj._id === "Other/Unknown")}
				/>
				<OtherDrinksButton />
			</MainTitle>
		</>
	);
}
