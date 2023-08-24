import AddRecipeForm from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/AddRecipe/FollowUs/FollowUs";
import PopularRecipe from "../../components/AddRecipe/PopularRecipe/PopularRecipe";

export default function AddRecipePage() {
	return (
		<div>
			<AddRecipeForm />
			<FollowUs />
			<PopularRecipe />
		</div>
	);
}
