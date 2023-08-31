import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./SeeButton.module.scss";

export default function SeeButton({ id }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/recipe/${id}`);
	};

	return (
		<button
			className={css.seeButton}
			onClick={handleClick}
		>
			See recipe
		</button>
	);
}

SeeButton.propTypes = {
	_id: PropTypes.string.isRequired,
};
