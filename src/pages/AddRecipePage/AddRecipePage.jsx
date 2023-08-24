import PropTypes from "prop-types";
import css from "./AddRecipePage.module.scss";
import AddRecipeForm from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/AddRecipe/FollowUs/FollowUs";
import PopularRecipe from "../../components/AddRecipe/PopularRecipe/PopularRecipe";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";

export default function AddRecipePage() {
	return (
		<div>
			<MainPageTitle />
			<AddRecipeForm />
			<FollowUs />
			<PopularRecipe />
		</div>
	);
}

AddRecipePage.propTypes = {
	// title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	// disabled: PropTypes.bool,
};
