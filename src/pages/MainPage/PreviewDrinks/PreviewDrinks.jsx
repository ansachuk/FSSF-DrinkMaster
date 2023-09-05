import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import css from "./PreviewDrinks.module.scss";
import DrinkCard from "../DrinkCard/DrinkCard";

const PreviewDrinks = ({ data, title, _id, category }) => {
	return (
		<>
			<section
				key={_id}
				className={css.section}
			>
				<Link to={`drinks/${category}`}>
					<h2
						className={css.sectionTitle}
						data={title}
					>
						{title}
					</h2>
				</Link>

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
	category: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
