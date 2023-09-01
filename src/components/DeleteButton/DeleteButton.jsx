import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeFromFavorite, remove } from "../../redux/operations/recipiesOperations";
import css from "./DeleteButton.module.scss";

const trashPath = new URL("../../images/icons.svg", import.meta.url);

export default function DeleteButton({ id, page }) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		if (page === "favorite") {
			dispatch(removeFromFavorite(id));
		} else if (page === "my") {
			dispatch(remove(id));
		}
	};

	return (
		<>
			<button
				className={css.deleteButton}
				onClick={handleDelete}
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

DeleteButton.propTypes = {
	id: PropTypes.string.isRequired,
	page: PropTypes.oneOf(["favorite", "my"]).isRequired,
};
