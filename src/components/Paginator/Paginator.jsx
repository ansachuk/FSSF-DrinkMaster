import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";
import Container from "../Container/Container";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import css from "./Paginator.module.scss";

export default function Paginator({ page, limit, setPage, setLimit, totalHits }) {
	const dispatch = useDispatch();
	const isDesktop = window.innerWidth >= 1280;
	const isTablet = window.innerWidth < 1280 && window.innerWidth >= 768;

	const handleLimitChange = useCallback(() => {
		const screenWidth = window.innerWidth;
		let newLimit;

		if (screenWidth >= 1280) {
			newLimit = 9;
		} else {
			newLimit = 8;
		}
		setLimit(newLimit);
	}, [dispatch]);

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

Paginator.propTypes = {
	page: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
	totalHits: PropTypes.number.isRequired,
	setLimit: PropTypes.number.isRequired,
};
