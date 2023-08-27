import React from "react";
import { useNavigate } from "react-router-dom";
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
