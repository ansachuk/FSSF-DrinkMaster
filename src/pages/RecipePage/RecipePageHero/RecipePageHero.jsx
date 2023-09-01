import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToFavorite, removeFromFavorite } from '../../../redux/operations/recipiesOperations.js';
import { selectFavorite } from '../../../redux/selectors/recipieSelectors.js';
import MainButton from '../../../components/MainButton/MainButton';
import css from './RecipePageHero.module.scss';
import stylesForButton from '/src/components/MainButton/MainButton.module.scss';
import icons from '/src/images/icons.svg';

const RecipePageHero = ({glass, title, about, image}) => {
    const dispatch = useDispatch();
    const { recipeId } = useParams();
    const favoriteRecipes = useSelector(selectFavorite);
    const isFavorite = favoriteRecipes.data.find((recipe) => recipe._id === recipeId) ? true : false;

    const handleAddToFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavorite(recipeId));
    } else {
      dispatch(removeFromFavorite(recipeId));
    }
  };

    return (
        <div className={css.recipePageHeroContainer}>
            <div><p className={css.glassName}>{glass}</p>
            {about && <p className={css.aboutDrink}>{about}</p>}
            {isFavorite ? <MainButton title="Remove from favorite recipes" onClick={handleAddToFavorite} propClass={stylesForButton.recipePageButton}/> : <MainButton title="Add to favorite recipes" onClick={handleAddToFavorite} propClass={stylesForButton.recipePageButton}/>}</div>
            {image ? <img src={image} alt={title} className={css.recipePageHeroImg} /> : <div className={css.defaultImageBg}><svg className={css.defaultImageIcon}><use href={icons + "#cocktail"}></use></svg></div>}
        </div>
    )
};

export default RecipePageHero;

RecipePageHero.propTypes = {
    glass: PropTypes.string,
    title: PropTypes.string,
    about: PropTypes.string,
    image: PropTypes.string,
};