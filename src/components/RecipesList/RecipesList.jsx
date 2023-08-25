// import { useSelector } from "react-redux";
// import { RecipesItem } from "../RecipesItem/RecipesItem";
// import { selectFavorite } from "redux/selectors";
// import styles from "./RecipesList.module.css";

// export default function RecipesList() {
// 	// const favoriteCocktails = useSelector(selectFavorite);
// 	// const isTablet = window.innerWidth >= 768;
// 	// const notFoundImgSrc = isTablet ? "/src/assets/img/NotFound2x.jpg" : "/src/assets/img/NotFound1x.jpg";

// 	return (
// 		<div className={styles.section}>
// 			{Array.isArray(favoriteCocktails) && favoriteCocktails.length !== 0 ? (
// 				<div className={styles.recipesList}>
// 					{favoriteCocktails.map(favoriteCocktail => (
// 						<RecipesItem
// 							key={favoriteCocktail._id}
// 							page={"favorite"}
// 							cocktail={favoriteCocktail}
// 						/>
// 					))}
// 				</div>
// 			) : (
// 				<div className={styles.wrapDiv}>
// 					<img
// 						src={notFoundImgSrc}
// 						alt="Not Found"
// 					/>
// 					<p className={styles.notFavoriteText}>You haven't added any favorite cocktails yet</p>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

import React from "react";
import RecipesItem from "../../components/RecipesItem/RecipesItem";
import css from "./RecipesList.module.scss";

const drinkData = [
	{
		_id: "1",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167160/cocktails-v1/drinks/Pornstar_Martini.jpg",
		drink: "Pornstar Martini",
		about:
			"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ",
	},
	{
		_id: "2",
		drinkThumb: "https://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Russian_Spring_Punch.jpg",
		drink: "Spring Punch",
		about:
			"The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.",
	},
	{
		_id: "3",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Lone_Tree_Cooler.jpg",
		drink: "Lone Tree Cooler",
		about:
			"Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass. ",
	},
	{
		_id: "4",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167165/cocktails-v1/drinks/Winter_Rita.jpg",
		drink: "Mock Cocktail 2",
		about:
			"The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.",
	},
	{
		_id: "5",
		drinkThumb: "https://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Dark_and_Stormy.jpg",
		drink: "Dark and Stormy",
		about:
			"The Dark ’n Stormy is a delicious, easy-to-make cocktail that features a refreshing trio of dark rum, ginger beer and lime. It also goes down a lot easier than the name might imply. It’s a close cousin to the Moscow Mule (vodka, ginger beer, lime) and should be an easy transition for vodka drinkers wanting to try something new.",
	},
	{
		_id: "6",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Gin_Smash.jpg",
		drink: "Gin Smash",
		about:
			"The Gin Basil Smash is a modern classic cocktail that’s refreshing, delicious, and so easy to make at home! This simple gin cocktail uses just four ingredients, and you can find them at the store any time of year.",
	},
	{
		_id: "7",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167160/cocktails-v1/drinks/Pornstar_Martini.jpg",
		drink: "Pornstar Martini",
		about:
			"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. ",
	},
	{
		_id: "8",
		drinkThumb: "https://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Russian_Spring_Punch.jpg",
		drink: "Spring Punch",
		about:
			"The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.",
	},
	{
		_id: "9",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Lone_Tree_Cooler.jpg",
		drink: "Lone Tree Cooler",
		about:
			"Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass. ",
	},
	{
		_id: "10",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167165/cocktails-v1/drinks/Winter_Rita.jpg",
		drink: "Mock Cocktail 2",
		about:
			"The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.",
	},
	{
		_id: "11",
		drinkThumb: "https://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Dark_and_Stormy.jpg",
		drink: "Dark and Stormy",
		about:
			"The Dark ’n Stormy is a delicious, easy-to-make cocktail that features a refreshing trio of dark rum, ginger beer and lime. It also goes down a lot easier than the name might imply. It’s a close cousin to the Moscow Mule (vodka, ginger beer, lime) and should be an easy transition for vodka drinkers wanting to try something new.",
	},
	{
		_id: "12",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167149/cocktails-v1/drinks/Gin_Smash.jpg",
		drink: "Gin Smash",
		about:
			"The Gin Basil Smash is a modern classic cocktail that’s refreshing, delicious, and so easy to make at home! This simple gin cocktail uses just four ingredients, and you can find them at the store any time of year.",
	},
	{
		_id: "13",
		drinkThumb: "https://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Russian_Spring_Punch.jpg",
		drink: "Spring Punch",
		about:
			"The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.",
	},
	{
		_id: "14",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167161/cocktails-v1/drinks/Lone_Tree_Cooler.jpg",
		drink: "Lone Tree Cooler",
		about:
			"Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass. ",
	},
	{
		_id: "15",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167165/cocktails-v1/drinks/Winter_Rita.jpg",
		drink: "Mock Cocktail 2",
		about:
			"The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.",
	},
	{
		_id: "16",
		drinkThumb: "https://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Dark_and_Stormy.jpg",
		drink: "Dark and Stormy",
		about:
			"The Dark ’n Stormy is a delicious, easy-to-make cocktail that features a refreshing trio of dark rum, ginger beer and lime. It also goes down a lot easier than the name might imply. It’s a close cousin to the Moscow Mule (vodka, ginger beer, lime) and should be an easy transition for vodka drinkers wanting to try something new.",
	},
	{
		_id: "17",
		drinkThumb: "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167165/cocktails-v1/drinks/Winter_Rita.jpg",
		drink: "Mock Cocktail 2",
		about:
			"The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category.",
	},
	{
		_id: "18",
		drinkThumb: "https://res.cloudinary.com/dec1shvoo/image/upload/v1689167144/cocktails-v1/drinks/Dark_and_Stormy.jpg",
		drink: "Dark and Stormy",
		about:
			"The Dark ’n Stormy is a delicious, easy-to-make cocktail that features a refreshing trio of dark rum, ginger beer and lime. It also goes down a lot easier than the name might imply. It’s a close cousin to the Moscow Mule (vodka, ginger beer, lime) and should be an easy transition for vodka drinkers wanting to try something new.",
	},
];
export default function RecipesList() {
	return (
		<div className={css.section}>
			<div className={css.recipesList}>
				{drinkData.map(favoriteCocktail => (
					<RecipesItem
						key={favoriteCocktail._id}
						drink={favoriteCocktail.drink}
						drinkThumb={favoriteCocktail.drinkThumb}
						about={favoriteCocktail.about}
					/>
				))}
			</div>
		</div>
	);
}
