export const stylesDrink = {
	control: baseStyles => ({
		...baseStyles,
		color: "rgba(243, 243, 243, 0.50)",
		minWidth: "199px",
		minHeight: "18px",
		padding: "18px 24px",
		marginTop: "14px",
		fontSize: "14px",
		lineHeight: "calc(18 / 14)",
		borderRadius: "200px",
		borderColor: "transparent",
		minWidth: "199px",
		backgroundColor: "#161F37",
		outline: 0,
		cursor: "text",
		"@media (min-width: 768px)": {
			marginTop: "0px",
			padding: "14px 24px",
			fontSize: "17px",
			lineHeight: "calc(26.52 / 17)",
		},
	}),
	menu: baseStyles => ({
		...baseStyles,
		width: "100%",
		paddingTop: "4px",
	}),
	menuList: baseStyles => ({
		...baseStyles,
		display: "flex",
		flexDirection: "column",
		gap: "8px",
		maxHeight: "200px",
		padding: "18px 24px",
		marginLeft: "auto",
		overflowX: "hidden",
		fontSize: "17px",
		lineHeight: "calc(26/17)",
		color: "rgba(243, 243, 243, 0.50)",
		borderRadius: "20px",
		backgroundColor: "#161F37",
		"@media (min-width: 768px)": {
			padding: "14px 23px",
			"&::-webkit-scrollbar": {
				width: "8px",
			},
			"&::-webkit-scrollbar-track": {
				margin: "8px 0px",
			},
			"&::-webkit-scrollbar-thumb": {
				backgroundColor: "#434D67",
				borderRadius: "20px",
			},
		},
	}),
	option: (baseStyles, state) => ({
		...baseStyles,
		fontSize: "12px",
		textWrap: "nowrap",
		padding: 0,
		color: state.isSelected ? "#f3f3f3" : "inherit",
		"&:hover": {
			color: "#f3f3f3",
		},
		"@media (min-width: 768px)": {
			fontSize: "17px",
		},
		"@media (min-width: 1200px)": {
			cursor: "pointer",
		},
	}),
	placeholder: baseStyles => ({
		...baseStyles,
		fontSize: "14px",
		lineHeight: "normal",
		width: "100%",
		color: "#f3f3f3",
		"@media (min-width: 768px)": {
			marginTop: "0px",
			fontSize: "17px",
			lineHeight: "calc(26.52 / 17)",
		},
	}),
	singleValue: baseStyles => ({
		...baseStyles,
		width: "100%",
		paddingTop: "2px",
		lineHeight: "normal",
		color: "#f3f3f3",
	}),
	input: baseStyles => ({
		...baseStyles,
		paddingTop: "2px",
		lineHeight: "normal",
		justifyContent: "start",
		"@media (min-width: 768px)": {
			lineHeight: "calc(26.52 / 17)",
		},
	}),
	indicatorContainer: baseStyles => ({
		...baseStyles,
		alignItems: "flex-end",
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
};
