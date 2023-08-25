// export default function RecipePage() {
// 	return <div>RecipePage</div>;
// }

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeById } from 'redux/operations';
import defaultDrink from '../../images/defaultImageDrink.jpg';
import { Container } from '../../components';
import RecipePageHero from "./RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "./RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "./RecipePreparation/RecipePreparation";

const RecipePage = () => {
	const dispatch = useDispatch();
	const { recipeId } = useParams();
	const recipe = useSelector(selectRecipeById);

  useEffect(() => {
    dispatch(fetchRecipeById(recipeId));
  }, []);
    
	  return (<Container>
		  <RecipePageHero glass={recipe.glass} title={recipe.drink} about={recipe.hasOwnProperty('about') ? recipe.about : null} image={recipe.drinkThumb}></RecipePageHero>
		  <RecipeIngredientsList ingredients={recipe.ingredients}></RecipeIngredientsList>
		  <RecipePreparation instructions={recipe.instructions}></RecipePreparation>
    </Container>)
};

export default RecipePage;