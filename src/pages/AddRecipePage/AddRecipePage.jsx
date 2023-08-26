// import PropTypes from "prop-types";
// import css from "./AddRecipePage.module.scss";
import AddRecipeForm from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/AddRecipe/FollowUs/FollowUs";
import PopularRecipe from "../../components/AddRecipe/PopularRecipe/PopularRecipe";
import MainTitle from "../../components/MainTitle/MainTitle";

export default function AddRecipePage() {
	return (
		<>
			<MainTitle title={"Add recipe"}>
				<AddRecipeForm />
				<FollowUs />
				<PopularRecipe />
			</MainTitle>
		</>
	);
}

// AddRecipePage.propTypes = {
// title: PropTypes.string.isRequired,
// propClass: PropTypes.string,
// disabled: PropTypes.bool,
// };
