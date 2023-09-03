import React from "react";

import css from "./PreviewDrinks.module.scss";
import DrinkCard from "../DrinkCard/DrinkCard";

const PreviewDrinks = ({ data, title, _id }) => {
	return (
		<>
			<section
				key={_id}
				className={css.section}
			>
				<h2
					className={css.sectionTitle}
					data={title}
				>
					{title}
				</h2>

				{data.map(({ _id, recipes }) => (
					<ul
						key={_id}
						className={css.sectionList}
					>
						{recipes.map(({ _id, drinkThumb, drink }) => (
							<li key={_id}>
								<DrinkCard
									_id={_id}
									key={_id}
									image={drinkThumb}
									title={drink}
								/>
							</li>
						))}
					</ul>
				))}
			</section>
		</>
	);
};

export default PreviewDrinks;
