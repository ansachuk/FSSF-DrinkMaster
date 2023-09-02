export const stylesDrink = {
	control: baseStyles => ({
		...baseStyles,
		width: "200px",
		height: "50px",
		alignItems: "flex-start",
		padding: "16px",
		fontSize: "14px",
		lineHeight: "calc(14 / 14)",
		backgroundColor: "transparent",
		border: "1px solid rgba(243, 243, 243, 0.50)",
		borderRadius: "200px",
		cursor: "text",
		"&:hover, &:focus": {
			borderColor: "#f3f3f3",
		},
		"@include tablet": {
			padding: "14px 18px 14px 24px",
			width: "199px",
			height: "56px",
		},
	}),

	menu: baseStyles => ({
		...baseStyles,
		width: "100%",
		"@include tablet": {
			paddingLeft: "14px",
			width: "199px",
		},
	}),

	menuList: baseStyles => ({
		...baseStyles,
		display: "flex",
		flexDirection: "column",
		gap: "6px",
		width: "100%",
		height: "150px",
		padding: "10px",
		marginLeft: "auto",
		marginTop: "-6px",
		overflowX: "hidden",
		color: "rgba(243, 243, 243, 0.50)",
		borderRadius: "12px",
		backgroundColor: "#161F37",
		"::-webkit-scrollbar": {
			width: "5px",
			height: "80px",
		},
		"@include tablet": {
			height: "405px",
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
		"@include tablet": {
			fontSize: "17px",
			lineHeight: "26.52px",
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
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		flexWrap: "nowrap",
	}),

	singleValue: baseStyles => ({
		...baseStyles,
		width: "100%",
		textAlign: "left",
		overflow: "visible",
	}),

	input: baseStyles => ({
		...baseStyles,
		lineHeight: "normal",
		justifyContent: "end",
	}),

	indicatorSeparator: () => ({
		display: "none",
	}),
};
