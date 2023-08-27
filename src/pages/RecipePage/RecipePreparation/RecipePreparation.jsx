import css from './RecipePreparation.module.scss';

const RecipePreparation = ({ instructions }) => {
    const steps = instructions.split('.');
    const nonEmptySteps = steps.filter(step => step.trim() !== '');

    return (
        <>
        <h3 className={css.preparationTitle}>Recipe Preparation</h3>
            <div className={css.preparationContent}>
                <img src="../../../images/static/my-recepies/pornstar.jpg" alt="Drink preparation" className={css.preparationImage} />
                <ul className={css.preparationList}>
{nonEmptySteps.map((step) => (
                        <li className={css.preparationListItem}>{step}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RecipePreparation;