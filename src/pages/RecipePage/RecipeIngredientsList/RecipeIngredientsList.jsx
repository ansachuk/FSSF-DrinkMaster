import defaultImage from '../../images/defaultImage.jpg';

const RecipeIngredientsList = ({ ingredients }) => {
    return (<>
    <p>Ingredients</p>
        <ul>{ingredients.map(({title, measure, ingredientThumb}) => (
           <div key={title}><li>
                {ingredientThumb ? (
                            <img src={ingredientThumb} alt={title} />
                        ) : (
                            <img src={defaultImage} alt="Default image" />
                        )}
                <div>
                    <p>{title}</p>
                    <p>{measure}</p>
                </div>
            </li></div>))}</ul>
    </>)
}

export default RecipeIngredientsList;