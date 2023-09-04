// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import icons from "/src/images/icons.svg";
// import css from "./DrinksCard.module.scss";

// export default function RecipesItem({ _id, drink, drinkThumb, about, instructions, page }) {
// 	const ingredientsWrapperClasses = `${css.ingredientsWrapper} ${
// 		page === "my" ? "my" : page === "favorite" ? "favorite" : ""
// 	}`;
// 	return (
// 		<div className={css.card}>
// 			<Link to={`/recipe/${_id}`}>
// 				<div className={css.imageBox}>
// 					<div className={css.imageWrapper}>
// 						{drinkThumb ? (
// 							<img
// 								src={drinkThumb}
// 								alt={drink}
// 								className={css.image}
// 							/>
// 						) : (
// 							<div className={css.defaultImgBox}>
// 								<svg className={css.defaultImage}>
// 									<use href={icons + "#cocktail"}></use>
// 								</svg>
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 			</Link>
// 			<div>
// 				<div
// 					style={{ position: page }}
// 					className={ingredientsWrapperClasses}
// 				>
// 					<Link to={`/recipe/${_id}`}>
// 						<p className={css.ingredientsTitle}>{drink}</p>
// 					</Link>
// 					<p className={css.ingredientsText}>Ingredients</p>
// 				</div>
// 			</div>
// 			{page === "favorite" && <p className={css.about}>{instructions}</p>}
// 			{page === "my" && <p className={css.about}>{about}</p>}
// 		</div>
// 	);
// }

// RecipesItem.propTypes = {
// 	_id: PropTypes.string.isRequired,
// 	drink: PropTypes.string.isRequired,
// 	drinkThumb: PropTypes.string.isRequired,
// 	about: PropTypes.string,
// 	page: PropTypes.string.isRequired,
// 	instructions: PropTypes.string,
// };

// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import drinkDefault from '../../../images/static/drinks/DrinkDefault.jpg';
// import css from './DrinkCard.module.scss';

// export default function DrinkCard({ _id, drink, drinkThumb, about, page }) {
//     return (
//     <div className={css.card}>
//       <Link to={`/recipes/${_id}`}>
//         <div className={css.oneMoreWrapper}>
//           <div className={css.imageWrapper}>
//             <img
//               src={drinkThumb}
//               alt={drink}
//               onError={e => {
//                 e.currentTarget.src = drinkDefault;
//               }}
//               className={css.image}
//             />
//           </div>
//         </div>
//       </Link>
//       <div className={css.wrapper}>
//         <div className={`${css.ingredientsWrapper} ${page === 'my' || page === 'favorite' ? css.my : ''}`}>
//           <Link to={`/recipe/${_id}`}>
//             <p className={css.drinkingreds}>{drink}</p>
//           </Link>
//           <span className={css.ingredients}>Ingredients</span>
//         </div>
//       </div>
//       {(page === 'my' || page === 'favorite') && (
//         <p className={css.aboutStyled}>{about}</p>
//       )}
//     </div>
//   );
// }

// DrinkCard.propTypes = {
//   _id: PropTypes.string.isRequired,
//   drink: PropTypes.string.isRequired,
//   drinkThumb: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired,
//   page: PropTypes.string.isRequired,
// };

// // с кнопками

// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import { Link } from 'react-router-dom';
// // import { SeeButton, DeleteButton } from 'components';
// // import drinkDefault from '../../../images/static/drinks/DrinkDefault.jpg';
// // import css from './DrinkCard.module.scss';

// // export default function DrinkCard({ _id, drink, drinkThumb, about, page }) {
// //     return (
// //     <div className={css.card}>
// //       <Link to={`/recipes/${_id}`}>
// //         <div className={css.oneMoreWrapper}>
// //           <div className={css.imageWrapper}>
// //             <img
// //               src={drinkThumb}
// //               alt={drink}
// //               onError={e => {
// //                 e.currentTarget.src = drinkDefault;
// //               }}
// //               className={css.image}
// //             />
// //           </div>
// //         </div>
// //       </Link>
// //       <div className={css.wrapper}>
// //         <div className={`${css.ingredientsWrapper} ${page === 'my' || page === 'favorite' ? css.my : ''}`}>
// //           <Link to={`/recipe/${_id}`}>
// //             <p className={css.drinkingreds}>{drink}</p>
// //           </Link>
// //           <span className={css.ingredients}>Ingredients</span>
// //         </div>
// //       </div>
// //       {(page === 'my' || page === 'favorite') && (
// //         <p className={css.aboutStyled}>{about}</p>
// //       )}
// //       <div className={css.buttonsWrapper}>
// //         {(page === 'my' || page === 'favorite') && (
// //           <SeeButton id={_id} />
// //         )}
// //         {(page === 'my' || page === 'favorite') && (
// //           <DeleteButton id={_id} page={page} />
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // DrinkCard.propTypes = {
// //   _id: PropTypes.string.isRequired,
// //   drink: PropTypes.string.isRequired,
// //   drinkThumb: PropTypes.string.isRequired,
// //   about: PropTypes.string.isRequired,
// //   page: PropTypes.string.isRequired,
// // };
