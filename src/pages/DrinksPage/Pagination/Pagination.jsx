import React from "react";
import { useDispatch } from "react-redux";

export default function Pagination({ currentPage, totalPages }) {
	const dispatch = useDispatch();

	const handlePageChange = newPage => {
		if (newPage >= 1 && newPage <= totalPages) {
			dispatch(setCurrentPage(newPage));
		}
	};

	return (
		<div>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				{/*  SVG-код для иконки "Previous" */}
			</button>
			<div>
				<ul>
					{Array.from({ length: totalPages }, (_, index) => (
						<li key={index}>
							<button
								onClick={() => handlePageChange(index + 1)}
								disabled={currentPage === index + 1}
							>
								{index + 1}
							</button>
						</li>
					))}
				</ul>
			</div>
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				{/* SVG-код для иконки "Next" */}
			</button>
		</div>
	);
}
