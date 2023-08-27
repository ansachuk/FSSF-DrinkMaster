import css from './RecipeIngredientsList.module.scss';

const RecipeIngredientsList = ({ ingredients }) => {
    return (<>
    <p>Ingredients</p>
        <ul>{ingredients.map(({title, measure, ingredientThumb}) => (
           <div key={title}><li>
                {ingredientThumb ? (
                            <img src={ingredientThumb} alt={title} />
                        ) : (
                            <div className={css.defaultImageBg}><svg className={css.defaultImageIcon}><use href={icons + "#cocktail"}></use></svg></div>
                        )}
                <div>
                    <p>{title}</p>
                    <p>{measure}</p>
                </div>
            </li></div>))}</ul>
    </>)
}

export default RecipeIngredientsList;