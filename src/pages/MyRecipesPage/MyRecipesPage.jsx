import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import MyRecipeList from "../../pages/MyRecipesPage/MyRecipeList/MyRecipeList";
import { own } from "../../redux/operations/recipiesOperations.js";
import css from "./MyRecipesPage.module.scss";
// import { selectOwn } from "../../redux/selectors/recipieSelectors";
import { selectIsLoggedIn } from "../../redux/selectors/authSelectors";

export default function MyRecipesPage() {
    const dispatch = useDispatch();
    // const myOwnRecipes = useSelector(selectOwn);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(own());
        }
    }, [dispatch, isLoggedIn]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={css.section}>
                <MainTitle title="My recipes">
                    <MyRecipeList />
                </MainTitle>
            </div>
        </>
    );
}