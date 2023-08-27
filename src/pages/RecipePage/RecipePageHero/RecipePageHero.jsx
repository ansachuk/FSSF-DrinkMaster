import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToFavoriteThunk, removeFromFavoriteThunk } from '../../../redux/operations/drinksOperations.js';
import { selectFavoriteDrinks } from '../../../redux/selectors.js';
import MainButton from '../../../components/MainButton/MainButton';
import MainTitle from '../../../components/MainTitle/MainTitle';
import css from './RecipePageHero.module.scss';
import stylesForButton from '../../../components/MainButton/MainButton.module.scss';
import icons from '../../../images/icons.svg';

const RecipePageHero = ({glass, title, about, image}) => {
    const dispatch = useDispatch();
    const { recipeId } = useParams();
    const favoriteRecipes = useSelector(selectFavoriteDrinks);
    const isFavorite = favoriteRecipes.includes(recipeId);

    return (
        <div className={css.recipePageHeroContainer}>
            <p className={css.glassName}>{glass}</p>
            <MainTitle className={css.recipePageTitle}>{title}</MainTitle>
            {about && <p className={css.aboutDrink}>{about}</p>}
            {isFavorite ? <MainButton onClick={() => dispatch(removeFromFavoriteThunk(recipeId))} className={stylesForButton.recipePageButton}>Remove from favorite recipes</MainButton> : <MainButton onClick={() => dispatch(addToFavoriteThunk(recipeId))} className={stylesForButton.recipePageButton}>Add to favorite recipes</MainButton>}
            {image ? <img src={image} alt={title} className={css.recipePageHeroImg} /> : <div className={css.defaultImageBg}><svg className={css.defaultImageIcon}><use href={icons + "#cocktail"}></use></svg></div>}
        </div>
    )
};

export default RecipePageHero;