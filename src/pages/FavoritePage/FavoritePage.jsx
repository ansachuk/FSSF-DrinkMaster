import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import RecipesList from "../../components/RecipesList/RecipesList";
import Paginator from "../../components/Paginator/Paginator";
import { favorite } from "../../redux/operations/recipiesOperations.js";
import { selectIsLoggedIn } from "../../redux/selectors/authSelectors";

import css from "./FavoritePage.module.scss";

export default function FavoritePage() {
    const dispatch = useDispatch();
    const [totalHits, setTotalHits] = useState(30);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(
                favorite({
                    page: 1,
                    limit: 9,
                }),
            );
        }
    }, [dispatch, isLoggedIn]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={css.section}>
                <MainTitle title="Favorites">
                    <RecipesList
                        page={page}
                        limit={limit}
                    />
                    <Paginator
                        page={page}
                        setPage={setPage}
                        limit={limit}
                        setLimit={setLimit}
                        totalHits={totalHits}
                        setTotalHits={setTotalHits}
                    />
                </MainTitle>
            </div>
        </>
    );
}