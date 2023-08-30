import React from 'react';
import { Link } from 'react-router-dom';
// import { SeeButton, DeleteButton } from 'components'; !!!!!!
import drinkDefault from '../../../images/static/drinks/DrinkDefault.jpg';
import css from './DrinkCard.module.scss';

export default function DrinkCard({ id, drink, drinkThumb, about, page }) {
    return (
    <div className={css.card}>
      <Link to={`/recipes/${id}`}>
        <div className={css.oneMoreWrapper}>
          <div className={css.imageWrapper}>
            <img
              src={drinkThumb}
              alt={drink}
              onError={e => {
                e.currentTarget.src = drinkDefault;
              }}
              className={css.image}
            />
          </div>
        </div>
      </Link>
      <div className={css.wrapper}>
        <div className={`${css.ingredientsWrapper} ${page === 'my' || page === 'favorite' ? css.my : ''}`}>
          <Link to={`/recipe/${id}`}>
            <p className={css.drinkingreds}>{drink}</p>
          </Link>
          <span className={css.ingredients}>Ingredients</span>
        </div>
      </div>
      {(page === 'my' || page === 'favorite') && (
        <p className={css.aboutStyled}>{about}</p>
      )}
      <div className={css.buttonsWrapper}>
        {(page === 'my' || page === 'favorite') && (
          <SeeButton id={id} />
        )}
        {(page === 'my' || page === 'favorite') && (
          <DeleteButton id={id} page={page} />
        )}
      </div>
    </div>
  );
};