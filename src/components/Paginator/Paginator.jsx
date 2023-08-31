import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setPage } from "../../redux/slices/recipiesSlice";

import { selectPage, selectTotalHits } from "../../redux/selectors/recipieSelectors";
import css from "../../components/Paginator/Paginator.module.scss";

const desktopLimit = 9;
const tabletLimit = 8;

export const Paginator = () => {
	const page = useSelector(selectPage);
	const dispatch = useDispatch();
	const isDesktop = window.innerWidth >= 1440;
	const isTablet = window.innerWidth < 1440 && window.innerWidth >= 768;
	const totalHits = useSelector(selectTotalHits);
	const limit = isDesktop ? desktopLimit : tabletLimit;
	const pageQuantity = Math.ceil(totalHits / limit);

	const pageRangeDisplayed = isDesktop ? 7 : isTablet ? 5 : 3;

	const handlePageChange = selectedPage => {
		dispatch(setPage(selectedPage.selected + 1));
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<div className={css.paginator}>
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
	);
};

export default Paginator;
