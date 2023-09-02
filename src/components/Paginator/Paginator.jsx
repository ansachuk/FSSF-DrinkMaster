import { useEffect } from "react";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
// import { setPage, setLimit } from "../../redux/slices/recipiesSlice";
import { selectPage, selectTotalHits, selectLimit } from "../../redux/selectors/recipieSelectors";
import css from "./Paginator.module.scss";

export default function Paginator() {
	const page = useSelector(selectPage);
	const dispatch = useDispatch();
	const isDesktop = window.innerWidth >= 1280;
	const isTablet = window.innerWidth < 1280 && window.innerWidth >= 768;
	const totalHits = useSelector(selectTotalHits);
	const limit = useSelector(selectLimit);

	const handleLimitChange = () => {
		const screenWidth = window.innerWidth;
		let newLimit;

		if (screenWidth >= 1280) {
			newLimit = 9;
		} else {
			newLimit = 8;
		}

		dispatch(setLimit(newLimit));
	};

	useEffect(() => {
		const handleWindowResize = () => {
			handleLimitChange();
		};
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [handleLimitChange]);

	const pageQuantity = Math.ceil(totalHits / limit);

	const pageRangeDisplayed = isDesktop ? 7 : isTablet ? 5 : 3;

	const handlePageChange = selectedPage => {
		dispatch(setPage(selectedPage.selected + 1));
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<Container>
			<div className={css.section}>
				{pageQuantity > 1 && (
					<ReactPaginate
						previousLabel={"<"}
						nextLabel={">"}
						breakLabel={"..."}
						pageCount={pageQuantity}
						marginPagesDisplayed={1}
						pageRangeDisplayed={pageRangeDisplayed}
						forcePage={page - 1}
						onPageChange={handlePageChange}
						containerClassName={"pagination"}
						pageClassName={"page-item"}
						pageLinkClassName={"page-link"}
						activeClassName={"active"}
						breakClassName={"page-item"}
						breakLinkClassName={"page-link"}
						previousClassName={"page-item"}
						previousLinkClassName={"page-link"}
						nextClassName={"page-item"}
						nextLinkClassName={"page-link"}
						disableInitialCallback
					/>
				)}
			</div>
		</Container>
	);
}
