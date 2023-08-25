import { useEffect, useState } from "react";
import icons from "../../../../images/icons.svg";
import css from "./UserMenu.module.scss";
import MainButton from "../../../MainButton/MainButton";

export default function UserMenu() {
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [isOpenLogout, setIsOpenLogout] = useState(false);
	const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);

	const handlerUserClick = () => setIsOpenDropdown(!isOpenDropdown);
	const handlerLogoutClick = () => setIsOpenLogout(!isOpenLogout);
	const handlerEditProfileClick = () => setIsOpenEditProfile(!isOpenEditProfile);

	const handlerBackdropClicks = e => {
		const backdrop = e.target.closest("#user_group") === null;
		if (backdrop) {
			setIsOpenDropdown(false);
			setIsOpenEditProfile(false);
			setIsOpenLogout(false);
		}
	};

	useEffect(() => {
		if (isOpenDropdown) {
			window.addEventListener("click", handlerBackdropClicks);
		}

		return () => {
			window.removeEventListener("click", handlerBackdropClicks);
		};
	});

	return (
		<div
			className={css.user_group}
			id="user_group"
		>
			<button
				onClick={handlerUserClick}
				className={css.button}
			>
				<svg className={css.user_icon}>
					<use href={icons + "#user"}></use>
				</svg>
				<span className={css.username}>Username</span>
			</button>

			{isOpenDropdown && (
				<div className={css.dropdown_container}>
					<div className={css.heading}>
						<p>Edit profile</p>
						<button
							onClick={handlerEditProfileClick}
							className={css.button}
						>
							<svg className={css.pen_icon}>
								<use href={icons + "#pen"}></use>
							</svg>
						</button>
					</div>
					{/* MainButton({(title, (disabled = false), (propClass = css.mainButton))})
					<button>Log out</button> */}
					{/* <MainButton
						title="Log out"
						onClick={handlerLogoutClick}
					/> */}
					<button onClick={handlerLogoutClick}>Log out</button>
				</div>
			)}

			{isOpenEditProfile && (
				<div className={css.edit_container}>
					<button
						onClick={handlerEditProfileClick}
						className={css.close_button}
					>
						<svg className={css.close_icon}>
							<use href={icons + "#close"}></use>
						</svg>
					</button>
					<div className={css.icon_container}>
						<svg className={css.user_large_icon}>
							<use href={icons + "#user"}></use>
						</svg>
						<svg className={css.plus_icon}>
							<use href={icons + "#plus"}></use>
						</svg>
					</div>
					<input
						type="text"
						placeholder="User name"
						className={css.input}
					/>
					<MainButton title="Save changes" />
				</div>
			)}

			{isOpenLogout && (
				<div className={css.edit_container}>
					<button
						onClick={handlerLogoutClick}
						className={css.close_button}
					>
						<svg className={css.close_icon}>
							<use href={icons + "#close"}></use>
						</svg>
					</button>
					<p>Are you sure you want to log out?</p>
					<div className={css.button_container}>
						{/* <MainButton title="Logout" />
						<MainButton title="Cancel" /> */}
						<button>Logout</button>
						<button onClick={handlerLogoutClick}>Cancel</button>
					</div>
				</div>
			)}
		</div>
	);
}
