import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import css from "./PreviewDrinks.module.scss";
import DrinkCard from "../DrinkCard/DrinkCard";

const PreviewDrinks = ({ data, title, _id }) => {
	return (
		<>
			<section
				key={_id}
				className={css.section}
			>
				<NavLink
					to="/drinks"
					className={css.titleLink}
				>
					<h2
						className={css.sectionTitle}
						data={title}
					>
						<span>{title}</span>
					</h2>
				</NavLink>

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

PreviewDrinks.propTypes = {
	title: PropTypes.string,
	_id: PropTypes.string,
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
