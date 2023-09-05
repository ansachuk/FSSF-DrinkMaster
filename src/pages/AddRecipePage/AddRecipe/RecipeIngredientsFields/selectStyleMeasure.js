export const stylesMeasure = {
	control: baseStyles => ({
		...baseStyles,
		height: "50px",
		alignItems: "center",
		fontSize: "14px",
		lineHeight: "calc(14 / 14)",
		cursor: "text",

		"@media (min-width: 768px)": {
			fontSize: "17px",
			lineHeight: "calc(26 / 17)",
		},
	}),

	menu: baseStyles => ({
		...baseStyles,
	}),

	menuList: baseStyles => ({
		...baseStyles,
		display: "flex",
		flexDirection: "column",
		gap: "6px",
		width: "55px",
		height: "150px",
		padding: "10px",
		marginLeft: "-12px",
		marginTop: "-6px",
		overflowX: "hidden",
		color: "rgba(243, 243, 243, 0.50)",
		textAlign: "center",
		borderRadius: "12px",
		backgroundColor: "#161F37",
		"::-webkit-scrollbar": {
			width: "5px",
			height: "80px",
		},
	}),

	option: (baseStyles, state) => ({
		...baseStyles,
		fontSize: "12px",
		textWrap: "nowrap",
		color: state.isSelected ? "#f3f3f3" : "inherit",
		"&:hover": {
			color: "#f3f3f3",
		},
	}),

	indicatorsContainer: baseStyles => ({
		...baseStyles,
		height: "100%",
		"&:hover": {
			color: "#161F37",
		},
	}),

	valueContainer: baseStyles => ({
		...baseStyles,
	}),

	singleValue: baseStyles => ({
		...baseStyles,
		width: "100%",
		overflow: "visible",
	}),

	input: baseStyles => ({
		...baseStyles,
		lineHeight: "normal",
		justifyContent: "center",
	}),

	indicatorSeparator: () => ({
		display: "none",
	}),
};
