import { useEffect, useState } from "react";
import css from "./UserMenu.module.scss";
import UserDropdown from "./UserDropdown/UserDropdown";
import EditUserModal from "./EditProfileModal/EditProfileModal";
import LogoutOptions from "./LogoutOptions/LogoutOptions";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/selectors/authSelectors";
import defaultUserImage from "../../../../images/static/user/user.jpg";

export default function UserMenu() {
	const { name, avatarURL = defaultUserImage } = useSelector(selectUser);

	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [isOpenLogout, setIsOpenLogout] = useState(false);
	const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);

	const handlerLogoutDropdownClick = () => setIsOpenLogout(!isOpenLogout);
	const handlerEditProfileClick = () => setIsOpenEditProfile(!isOpenEditProfile);

	const handlerUserDropdownClick = () => {
		setIsOpenDropdown(!isOpenDropdown);
		setIsOpenLogout(false);
		setIsOpenEditProfile(false);
	};

	const handlerBackdropClicks = e => {
		const backdrop = e.target.closest("#user_group") === null;
		if (backdrop) {
			setIsOpenDropdown(false);
			setIsOpenEditProfile(false);
			setIsOpenLogout(false);
		}
	};

	const handlerEscClick = e => {
		const target = e.key === "Escape";
		if (target) {
			setIsOpenDropdown(false);
			setIsOpenEditProfile(false);
			setIsOpenLogout(false);
		}
	};

	useEffect(() => {
		if (isOpenDropdown) {
			window.addEventListener("click", handlerBackdropClicks);
			window.addEventListener("keydown", handlerEscClick);
		}

		return () => {
			window.removeEventListener("click", handlerBackdropClicks);
			window.removeEventListener("keydown", handlerEscClick);
		};
	});

	return (
		<div
			className={css.user_group}
			id="user_group"
		>
			<button
				onClick={handlerUserDropdownClick}
				className={css.button}
			>
				<img
					src={avatarURL}
					alt="User photo"
					className={css.user_icon}
				/>
				<span className={css.username}>{name}</span>
			</button>

			{isOpenDropdown && (
				<UserDropdown
					handlerEditProfileClick={handlerEditProfileClick}
					handlerLogoutDropdownClick={handlerLogoutDropdownClick}
				/>
			)}

			{isOpenEditProfile && <EditUserModal handlerEditProfileClick={handlerEditProfileClick} />}

			{isOpenLogout && <LogoutOptions handlerLogoutDropdownClick={handlerLogoutDropdownClick} />}
		</div>
	);
}
