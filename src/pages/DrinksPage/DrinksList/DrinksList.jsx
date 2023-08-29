import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSearchResults } from 'redux/selectors';
import { DrinkCard, NotFound } from 'components';
import css from './DrinksList.module.scss';

const DrinksList = () => {
  const searchResults = useSelector(selectSearchResults);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={css.section}>
      {searchResults?.length !== 0 ? (
        <ul className={css.drinkList}>
          {searchResults?.map((searchResult) => (
            <DrinkCard
              key={searchResult._id}
              cocktail={searchResult}
              page={'drinks'}
            />
          ))}
        </ul>
      ) : (
        <NotFound message={"We did not find any cocktails for this search"} />
      )}
    </section>
  );
};

export default DrinksList;
