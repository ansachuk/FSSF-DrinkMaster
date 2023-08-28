import PropTypes from "prop-types";
import css from './RecipePreparation.module.scss';
import image from '/src/images/static/my-recepies/pornstar.jpg';

const RecipePreparation = ({ instructions }) => {
    const steps = instructions.split('.');
    const nonEmptySteps = steps.filter(step => step.trim() !== '');

    return (
        <>
        <h3 className={css.preparationTitle}>Recipe Preparation</h3>
            <div className={css.preparationContent}>
                <ul className={css.preparationList}>
{nonEmptySteps.map((step) => (
    <li key={step} className={css.preparationListItem}>{step}</li>
                    ))}
                </ul>
                <img src={image} alt="Drink preparation" className={css.preparationImage} />
            </div>
        </>
    )
}

export default RecipePreparation;

RecipePreparation.propTypes = {
    instructions: PropTypes.string,
};