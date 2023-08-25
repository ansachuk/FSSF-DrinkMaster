// export default function DrinksPage() {
// 	return <div>DrinksPage</div>;
// }

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { setSelectedCategory, fetchRecipesSuccess, fetchRecipesFailure } from "";

export default function DrinksPage(props) {
	const dispatch = useDispatch();
	const { selectedCategory, recipes, error } = useSelector(state => state);

	useEffect(() => {
		const categoryFromUrl = props.match.params.category;
		if (categoryFromUrl) {
			dispatch(setSelectedCategory(categoryFromUrl));
		} else {
			dispatch(setSelectedCategory("Cocktail"));
		}

		fetch(`/api/recipes?category=${selectedCategory}`)
			.then(response => response.json())
			.then(data => dispatch(fetchRecipesSuccess(data)))
			.catch(error => dispatch(fetchRecipesFailure(error.message)));
	}, [dispatch, selectedCategory, props.match.params.category]);

	return (
		<div>
			<h2>{selectedCategory} DrinksPage</h2>
			{error ? (
				<p>Error: {error}</p>
			) : (
				<ul>
					{recipes.map(recipe => (
						<li key={recipe._id}>
							<Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
