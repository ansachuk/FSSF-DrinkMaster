import MainButton from "../../../../MainButton/MainButton";
import icons from "../../../../../images/icons.svg";
import css from "./EditProfileModal.module.scss";
import buttonCss from "../../../../MainButton/MainButton.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/selectors/authSelectors";
import { update } from "../../../../../redux/operations/authOperations";
import { Notify } from "notiflix";

export default function EditProfileModal({ handlerEditProfileClick }) {
	const dispatch = useDispatch();
	const { name, avatarURL } = useSelector(selectUser);

	const [image, setImage] = useState({ preview: avatarURL, data: null });
	const [userName, setUserName] = useState(name);
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	const userInfoFormSubmit = e => {
		e.preventDefault();

		if (userName === name && !image.data) {
			setIsButtonEnabled(false);
			Notify.failure("No data changed");
			return;
		}
		const updatedUserName = e.target.elements.user_name.value;
		setUserName(updatedUserName);

		const formData = new FormData();
		formData.append("file", image.data);
		formData.append("userName", userName);

		dispatch(update(formData));

		// e.target.reset();
		handlerEditProfileClick();
	};

	const onImageChange = e => {
		const img = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0],
		};
		setImage(img);
		setIsButtonEnabled(true);
	};

	const onNameChange = e => {
		if (userName !== e.target.value) {
			setIsButtonEnabled(true);
		}
	};

	useEffect(() => {
		if (userName !== name) {
			setIsButtonEnabled(true);
		}
	}, [userName, name]);

	useEffect(() => {
		const userImage = document.getElementById("user_image");
		if (image.preview) {
			userImage.src = image.preview;
		}
		return () => {
			if (image.preview) {
				URL.revokeObjectURL(image.preview);
			}
		};
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
						src={avatarURL}
						alt="User photo"
						id="user_image"
						className={css.user_large_icon}
					/>
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
						defaultValue={name}
						className={css.input}
						onChange={onNameChange}
					/>
					<svg className={css.input_pen_icon}>
						<use href={icons + "#pen"}></use>
					</svg>
				</label>
				<MainButton
					disabled={!isButtonEnabled}
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
