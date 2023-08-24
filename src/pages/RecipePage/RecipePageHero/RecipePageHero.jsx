import Title from "../../../components";
import { useDispatch } from 'react-redux';
import { addToFavorite } from 'redux/operations';

const RecipePageHero = ({glass, title, image}) => {
    const dispatch = useDispatch();
    const { recipeId } = useParams();

    return (
        <>
            <p>{glass}</p>
            <Title>{title}</Title>
            <button onClick={()=>dispatch(addToFavorite(recipeId))}></button>
            <img src={image} alt={title} />
        </>
    )
};

export default RecipePageHero;