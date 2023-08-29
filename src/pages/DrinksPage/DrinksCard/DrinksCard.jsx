import React from 'react';
import { Link } from 'react-router-dom';
import { SeeButton, DeleteButton } from 'components';
import drink from '../../../images/static/drinks/DrinkDefault.jpg';
import css from './DrinkCard.module.scss';

export const DrinkCard = ({ cocktail, page }) => {
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
        <div className={`${css.ingredientsWrapper} ${page === 'my' || page === 'favorite' ? css.my : ''}`}>
          <Link to={`/main/recipe/${cocktail._id}`}>
            <p className={css.drinkingreds}>{cocktail.drink}</p>
          </Link>
          <span className={css.ingredients}>Ingredients</span>
        </div>
      </div>
      {(page === 'my' || page === 'favorite') && (
        <p className={css.aboutStyled}>{cocktail.about}</p>
      )}
      <div className={css.buttonsWrapper}>
        {(page === 'my' || page === 'favorite') && (
          <SeeButton id={cocktail._id} />
        )}
        {(page === 'my' || page === 'favorite') && (
          <DeleteButton id={cocktail._id} page={page} />
        )}
      </div>
    </div>
  );
};
