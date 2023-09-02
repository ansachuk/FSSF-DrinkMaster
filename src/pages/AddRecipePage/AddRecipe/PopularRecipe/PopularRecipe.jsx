import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import image from "../../../../images/static/my-recepies/pornstar.jpg";
import { selectPopular } from "../../../../redux/selectors/recipieSelectors";
import css from "./PopularRecipe.module.scss";

export default function PopularRecipe() {
	const popularData = useSelector(selectPopular);

	return (
		<div className={css.wrapper}>
			<h3 className={css.title}>Popular Recipe</h3>
			<ul className={css.list}>
				{popularData?.map(item => {
					return (
						<li key={item._id}>
							<NavLink
								className={css.link}
								to={`/recipe/${item._id}`}
							>
								<img
									className={css.image}
									src={item.drinkThumb ? item.drinkThumb : image}
									alt="popular thumb"
									width={90}
									height={90}
								/>
								<div className={css.textWrapper}>
									<p className={css.subtitle}>{item.drink}</p>
									<p className={css.text}>
										{item.instructions
											? item.instructions
											: "The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients. The International Bartenders Association lists the beverage in its New Era Drinks category."}
									</p>
								</div>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
