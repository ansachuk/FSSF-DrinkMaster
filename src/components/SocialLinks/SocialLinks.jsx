import React from "react";
import css from "./SocialLinks.module.scss";
import icons from "../../images/icons.svg";

const socialLinks = [
	{
		name: "Instagram",
		url: "https://www.instagram.com/",
		iconId: "instagram",
	},
	{
		name: "Facebook",
		url: "https://www.facebook.com/",
		iconId: "facebook",
	},
	{
		name: "YouTube",
		url: "https://www.youtube.com/",
		iconId: "youtube",
	},
];

export const SocialLinks = () => {
	return (
		<div className={css.Container}>
			{socialLinks.map((link, index) => (
				<a
					key={index}
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg className={css.SocialLinksIcon}>
						<use href={icons + "#" + link.iconId}></use>
					</svg>
				</a>
			))}
		</div>
	);
};
