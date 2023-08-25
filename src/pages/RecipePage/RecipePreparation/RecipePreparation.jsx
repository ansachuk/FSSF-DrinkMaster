const RecipePreparation = ({ instructions }) => {
    const steps = instructions.split('.');
    const nonEmptySteps = steps.filter(step => step.trim() !== '');

    return (
        <>
        <h3>Recipe Preparation</h3>
            <div>
                <img src="../../../images/static/my-recepies/pornstar.jpg" alt="Drink preparation" />
                <ul>
{nonEmptySteps.map((step) => (
                        <li>{step}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RecipePreparation;