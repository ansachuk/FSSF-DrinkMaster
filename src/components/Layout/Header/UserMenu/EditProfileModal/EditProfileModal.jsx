import MainButton from "../../../../MainButton/MainButton";
import icons from "../../../../../images/icons.svg";
import defaultUserImage from "../../../../../images/static/user/user.jpg";
import css from "./EditProfileModal.module.scss";
import buttonCss from "../../../../MainButton/MainButton.module.scss";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/selectors/authSelectors";
import { update } from "../../../../../redux/operations/authOperations";
import { Notify } from "notiflix";

export default function EditProfileModal({ handlerEditProfileClick }) {
	const dispatch = useDispatch();
	const { name, avatarURL = defaultUserImage } = useSelector(selectUser);

	const [userName, setUserName] = useState(name);
	const [image, setImage] = useState(null);
	const [imgURL, setImageURL] = useState(null);
	const [isButtonEnabled, setIsButtonEnabled] = useState(false);

	const userInfoFormSubmit = values => {
		if (!isButtonEnabled) {
			setIsButtonEnabled(false);
			Notify.failure("No data changed");
			return;
		}

		const formData = new FormData();

		formData.append("name", values.name);
		if (image) {
			formData.append("avatarURL", image);
		}

		dispatch(update(formData));

		handlerEditProfileClick();
	};

	const onImageChange = e => {
		const [_file] = e.target.files;
		setImageURL(URL.createObjectURL(_file));
		setImage(_file);
		setIsButtonEnabled(true);
	};

	const onNameChange = e => {
		setUserName(e.target.value);
		if (name !== e.target.value) {
			setIsButtonEnabled(true);
		} else if (name === e.target.value && imgURL === null) {
			setIsButtonEnabled(false);
		}
	};

	useEffect(() => {
		const userImage = document.getElementById("user_image");
		if (imgURL) {
			userImage.src = imgURL;
		}
		return () => {
			if (imgURL) {
				URL.revokeObjectURL(imgURL);
			}
		};
	}, [imgURL]);

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
			<Formik
				initialValues={{ avatarURL: "", name: `${userName}` }}
				enableReinitialize={true}
				onSubmit={userInfoFormSubmit}
			>
				<Form>
					<div className={css.icon_container}>
						<img
							src={avatarURL}
							alt="User photo"
							id="user_image"
							className={css.user_large_icon}
						/>
						<Field
							id="file_upload"
							type="file"
							name="avatarURL"
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
						<Field
							id="name"
							name="name"
							type="text"
							// defaultValue={name}
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
				</Form>
			</Formik>
		</div>
	);
}

EditProfileModal.propTypes = {
	handlerEditProfileClick: PropTypes.func,
};
