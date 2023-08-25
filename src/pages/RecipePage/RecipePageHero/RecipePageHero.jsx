import Title from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { favoriteRecipeToggle } from 'redux/operations';
import { MainButton } from '../../../components/MainButton/MainButton';

const RecipePageHero = ({glass, title, about, image}) => {
    const dispatch = useDispatch();
    const { recipeId } = useParams();
    const favoriteRecipes = useSelector(selectFavoriteRecipes);
    const isFavorite = favoriteRecipes.includes(recipeId);

    return (
        <>
            <p>{glass}</p>
            <Title>{title}</Title>
            <p>{about}</p>
            <MainButton onClick={() => dispatch(favoriteRecipeToggle(recipeId))}>{isFavorite ? 'Remove from favorite recipes' : 'Add to favorite recipes'}</MainButton>
            <img src={image} alt={title} />
        </>
    )
};

export default RecipePageHero;