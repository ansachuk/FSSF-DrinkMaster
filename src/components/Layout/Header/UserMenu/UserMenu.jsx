import { useEffect, useState } from "react";
import icons from "../../../../images/icons.svg";
import css from "./UserMenu.module.scss";
import UserDropdown from "./UserDropdown/UserDropdown";
import EditUserModal from "./EditProfileModal/EditProfileModal";
import LogoutOptions from "./LogoutOptions/LogoutOptions";

export default function UserMenu() {
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);
	const [isOpenLogout, setIsOpenLogout] = useState(false);
	const [isOpenEditProfile, setIsOpenEditProfile] = useState(false);

	const handlerUserDropdownClick = () => setIsOpenDropdown(!isOpenDropdown);
	const handlerLogoutDropdownClick = () => setIsOpenLogout(!isOpenLogout);
	const handlerEditProfileClick = () => setIsOpenEditProfile(!isOpenEditProfile);

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
				onClick={handlerUserDropdownClick}
				className={css.button}
			>
				<svg className={css.user_icon}>
					<use href={icons + "#user"}></use>
				</svg>
				<span className={css.username}>Username</span>
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
