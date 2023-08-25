import Title from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { favoriteRecipeToggle } from 'redux/operations';
import { MainButton } from '../../../components/MainButton/MainButton';
import css from './RecipePageHero.module.scss';
import stylesForButton from '../../../components/MainButton/MainButton.module.scss';

const RecipePageHero = ({glass, title, about, image}) => {
    const dispatch = useDispatch();
    const { recipeId } = useParams();
    const favoriteRecipes = useSelector(selectFavoriteRecipes);
    const isFavorite = favoriteRecipes.includes(recipeId);

    return (
        <div className={css.recipePageHeroContainer}>
            <p className={css.glassName}>{glass}</p>
            <Title className={css.recipePageTitle}>{title}</Title>
            <p className={css.aboutDrink}>{about}</p>
            <MainButton onClick={() => dispatch(favoriteRecipeToggle(recipeId))} className={stylesForButton.recipePageButton}>{isFavorite ? 'Remove from favorite recipes' : 'Add to favorite recipes'}</MainButton>
            <img src={image} alt={title} className={css.recipePageHeroImg} />
        </div>
    )
};

export default RecipePageHero;