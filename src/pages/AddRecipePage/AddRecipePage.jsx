// import PropTypes from "prop-types";
// import css from "./AddRecipePage.module.scss";
import AddRecipeForm from "./AddRecipe/AddRecipeForm/AddRecipeForm";
import FollowUs from "./AddRecipe/FollowUs/FollowUs";
import PopularRecipe from "./AddRecipe/PopularRecipe/PopularRecipe";
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
