import PropTypes from "prop-types";
import css from "./AddRecipePage.module.scss";
import AddRecipeForm from "../../components/AddRecipe/AddRecipeForm/AddRecipeForm";
import FollowUs from "../../components/AddRecipe/FollowUs/FollowUs";
import PopularRecipe from "../../components/AddRecipe/PopularRecipe/PopularRecipe";
import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import icons from "../../images/icons.svg";

export default function AddRecipePage() {
	return (
		<div>
			<MainPageTitle />
			<div className={css.imageContainer}>
				<div>
					<div>
						<button className={css.btnContainer}>
							<svg
								className={css.btnIcon}
								width="30"
								height="30"
							>
								<use href={icons + "#plus"}></use>
							</svg>
						</button>
					</div>
					<p>Add image</p>
				</div>
			</div>
			<AddRecipeForm />
			<FollowUs />
			<PopularRecipe />
		</div>
	);
}
// <button
// 	class="mobile__logout"
// 	type="submit"
// >
// 	Log out
// 	<svg
// 		class="logout__icon"
// 		width="20"
// 		height="20"
// 	>
// 		<use href="./images/icons.svg#arrow-narrow-right"></use>
// 	</svg>
// </button>
AddRecipePage.propTypes = {
	// title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	// disabled: PropTypes.bool,
};
