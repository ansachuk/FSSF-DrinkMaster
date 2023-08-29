import React from 'react';
import { Link } from 'react-router-dom';
import drink from '../../../images/static/drinks/DrinkDefault.jpg';
import css from './DrinkCard.module.scss';

export const DrinkCard = ({ cocktail }) => {
  return (
    <div className={css.card}>
      <Link to={`/main/recipe/${cocktail._id}`}>
        <div className={css.oneMoreWrapper}>
          <div className={css.imageWrapper}>
            <img
              src={cocktail.drinkThumb}
              alt={cocktail.drink}
              onError={e => {
                e.currentTarget.src = drink;
              }}
              className={css.image}
            />
          </div>
        </div>
      </Link>
      <div className={css.wrapper}>
        <div className={css.ingredientsWrapper}>
          <Link to={`/main/recipe/${cocktail._id}`}>
            <p className={css.drinkingreds}>{cocktail.drink}</p>
          </Link>
          <span className={css.ingredients}>Ingredients</span>
        </div>
      </div>
      <p className={css.aboutStyled}>{cocktail.about}</p>
    </div>
  );
};
