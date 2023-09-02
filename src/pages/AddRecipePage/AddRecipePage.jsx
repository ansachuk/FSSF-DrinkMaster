import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddRecipeForm from "./AddRecipe/AddRecipeForm/AddRecipeForm";
import FollowUs from "./AddRecipe/FollowUs/FollowUs";
import PopularRecipe from "./AddRecipe/PopularRecipe/PopularRecipe";
import MainTitle from "../../components/MainTitle/MainTitle";
import { popular } from "../../redux/operations/recipiesOperations";

export default function AddRecipePage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(popular());
	}, [dispatch]);

	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

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
