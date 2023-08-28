import MainButton from "../../../../MainButton/MainButton";
import icons from "../../../../../images/icons.svg";
import css from "./EditProfileModal.module.scss";
import buttonCss from "../../../../MainButton/MainButton.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function EditProfileModal({ handlerEditProfileClick }) {
	const [image, setImage] = useState({ preview: "", data: "" });

	const userInfoFormSubmit = e => {
		e.preventDefault();
		console.dir(e.target);
		const userName = e.target.elements.user_name.value;
		console.log(userName);
		// const userImage = e.target.elements.file_upload.files[0];
		// console.log(userImage);

		const formData = new FormData();
		formData.append("file", image.data);
		console.log(formData);
		// 	const response = await fetch('http://localhost:5000/image', {
		//   method: 'POST',
		//   body: {formData, userName},
		// })
	};

	const onImageChange = e => {
		const img = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0],
		};
		console.log(img);
		setImage(img);
	};

	useEffect(() => {
		const userImage = document.getElementById("user_image");
		userImage.src = image.preview;
	}, [image.preview]);

	return (
		<div className={css.edit_container}>
			<button
				onClick={handlerEditProfileClick}
				className={css.close_button}
			>
				<svg className={css.close_icon}>
					<use href={icons + "#close"}></use>
				</svg>
			</button>
			<form onSubmit={userInfoFormSubmit}>
				<div className={css.icon_container}>
					<img
						src={icons + "#user"}
						alt="User photo"
						id="user_image"
						className={css.user_large_icon}
					/>
					{/* <svg className={css.user_large_icon}>
						<use href={icons + "#user"}></use>
					</svg> */}
					<input
						id="file_upload"
						type="file"
						onChange={onImageChange}
					/>
					<label htmlFor="file_upload">
						<svg
							className={css.plus_icon}
							viewBox="-5 -5 70 100"
						>
							<use href={icons + "#plus"}></use>
						</svg>
					</label>
				</div>
				<label className={css.input_container}>
					<input
						id="user_name"
						type="text"
						placeholder="User name"
						className={css.input}
					/>
					<svg className={css.input_pen_icon}>
						<use href={icons + "#pen"}></use>
					</svg>
				</label>
				<MainButton
					propClass={buttonCss.largeButton}
					title="Save changes"
				/>
			</form>
		</div>
	);
}

EditProfileModal.propTypes = {
	handlerEditProfileClick: PropTypes.func,
};
