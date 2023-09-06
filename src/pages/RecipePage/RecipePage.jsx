import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byID } from "../../redux/operations/recipiesOperations.js";
import { selectByID } from "../../redux/selectors/recipieSelectors.js";
import { selectIsLoggedIn } from "../../redux/selectors/authSelectors.js";
import MainTitle from "../../components/MainTitle/MainTitle.jsx";
import RecipePageHero from "./RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "./RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "./RecipePreparation/RecipePreparation";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { useMediaQuery } from "react-responsive";

const RecipePage = () => {
	const dispatch = useDispatch();
	const { recipeId } = useParams();
	const recipe = useSelector(selectByID);
	const isLoggedIn = useSelector(selectIsLoggedIn);

	useEffect(() => {
		async function fetchRecipe() {
			const res = await dispatch(byID(recipeId));
			return res;
		}
		function loadPage() {
			if (isLoggedIn) {
				fetchRecipe();
			}
		}
		loadPage();
	}, [dispatch, recipeId, isLoggedIn]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const isDesktop = useMediaQuery({ minWidth: 1280 });
	const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1279.99 });

	const stylePropForTextWrapper = {
		maxHeight: isDesktop ? "68px" : isTablet ? "60px" : "38px",
	};

	return (
		recipe.glass && (
			<MainTitle
				title={recipe.drink}
				textWrapperStyle={stylePropForTextWrapper}
			>
				{Loading.hourglass()}
				<RecipePageHero
					glass={recipe.glass}
					about={recipe.about || null}
					image={recipe.drinkThumb || null}
				/>
				<RecipeIngredientsList ingredients={recipe.ingredients} />
				<RecipePreparation instructions={recipe.instructions} />
			</MainTitle>
		)
	);
};

export default RecipePage;
