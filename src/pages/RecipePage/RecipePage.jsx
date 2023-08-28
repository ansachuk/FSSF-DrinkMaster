// export default function RecipePage() {
// 	return <div>RecipePage</div>;
// }

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { byID } from '../../redux/operations/recipiesOperations.js';
import { selectByID } from "../../redux/selectors/recipieSelectors.js";
import MainTitle from '../../components/MainTitle/MainTitle.jsx';
import RecipePageHero from "./RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "./RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "./RecipePreparation/RecipePreparation";

const RecipePage = () => {
	const dispatch = useDispatch();
	const { recipeId } = useParams();
	const recipe = useSelector(selectByID);

  useEffect(() => {
 	dispatch(byID(recipeId));
  }, []);
	
	  return (recipe.glass && <MainTitle title={recipe.drink}>
		  <RecipePageHero glass={recipe.glass} about={recipe.hasOwnProperty('about') ? recipe.about : null} image={recipe.hasOwnProperty('drinkThumb') ? recipe.drinkThumb : null}></RecipePageHero>
		  <RecipeIngredientsList ingredients={recipe.ingredients}></RecipeIngredientsList>
		  <RecipePreparation instructions={recipe.instructions}></RecipePreparation>
		  </MainTitle>
)
};

export default RecipePage;