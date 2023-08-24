import RecipeDescriptionFields from "../RecipeDescriptionFields/RecipeDescriptionFields";
import RecipeIngredientsFields from "../RecipeIngredientsFields/RecipeIngredientsFields";
import RecipePreparationFields from "../RecipePreparationFields/RecipePreparationFields";

export default function AddRecipeForm() {
	return (
		<div>
			<RecipeDescriptionFields />
			<RecipeIngredientsFields />
			<RecipePreparationFields />
		</div>
	);
}
