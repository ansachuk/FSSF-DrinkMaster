import PreviewDrinks from "./PreviewDrinks/PreviewDrinks";
import HeroSection from "./HeroSection/HeroSection";

import { mainPage } from "../../redux/operations/recipiesOperations";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMainCocktails } from "../../redux/selectors/recipieSelectors";
import OtherDrinksButton from "./OtherDrinksButton/OtherDrinksButton";

export default function MainPage() {
	const dispatch = useDispatch();
	const category = useSelector(selectMainCocktails);

	useEffect(() => {
		if (category.length === 0) dispatch(mainPage());
	}, []);

	return (
		<>
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
		</>
	);
}
