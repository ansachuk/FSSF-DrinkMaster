import React from "react";
// import { useDispatch } from "react-redux";
// import { removeFromFavoriteThunk, removeRecipeThunk } from "redux/Cocktails/cocktailsOperations";
import css from "./DeleteButton.module.scss";

const trashPath = new URL("../../images/icons.svg", import.meta.url);

export default function DeleteButton({ id, page, onDeleteClick }) {
	// const dispatch = useDispatch();
	// const onDelete = () => {
	// 	if (page === "favorite") {
	// 		dispatch(removeFromFavoriteThunk(id));

	// 		return;
	// 	}
	// 	if (page === "my") {
	// 		dispatch(removeRecipeThunk(id));

	return (
		<>
			<button
				className={css.deleteButton}
				onClick={() => onDeleteClick(id, page)}
				data-page={page}
				data-id={id}
			>
				<svg
					className={css.iconTrash}
					width="50"
					height="50"
				>
					<use href={trashPath + "#remove"}></use>
				</svg>
			</button>
		</>
	);
}
