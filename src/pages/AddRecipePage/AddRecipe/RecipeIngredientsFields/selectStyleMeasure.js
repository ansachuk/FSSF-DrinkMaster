export const stylesMeasure = {
	control: baseStyles => ({
		...baseStyles,
		// width: "20px",
		height: "50px",
		// justifyContent: "space-between",
		alignItems: "center",
		// padding: "16px",
		fontSize: "14px",
		lineHeight: "calc(14 / 14)",
		// backgroundColor: "transparent",
		// border: "1px solid rgba(243, 243, 243, 0.50)",
		// borderRadius: "200px",
		cursor: "text",
		// "&:hover, &:focus": {
		// 	borderColor: "#f3f3f3",
		// },
		"@media (min-width: 768px)": {
			fontSize: "17px",
			lineHeight: "calc(26 / 17)",
		},
	}),

	menu: baseStyles => ({
		...baseStyles,
		// width: "100%",
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
		// marginRight: "50px",
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
		// padding: 0,
		color: state.isSelected ? "#f3f3f3" : "inherit",
		"&:hover": {
			color: "#f3f3f3",
		},
	}),

	indicatorsContainer: baseStyles => ({
		...baseStyles,
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "flex-end",
		height: "100%",
		"&:hover": {
			color: "#161F37",
		},
	}),

	valueContainer: baseStyles => ({
		...baseStyles,
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "flex-end",
		// flexWrap: "nowrap",
	}),

	singleValue: baseStyles => ({
		...baseStyles,
		width: "100%",
		overflow: "visible",
		// textAlign: "center",
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
