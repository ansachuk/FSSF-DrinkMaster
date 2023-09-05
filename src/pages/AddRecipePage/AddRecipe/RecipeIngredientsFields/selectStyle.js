export const styles = {
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

		"@media (max-width: 393px)": {
			width: "180px",
		},

		"@media (min-width: 768px)": {
			width: "332px",
			height: "56px",
			fontSize: "17px",
			lineHeight: "calc(26 / 17)",
		},
	}),

	menu: baseStyles => ({
		...baseStyles,
		width: "182px",
		marginLeft: "10px",

		"@media (max-width: 393px)": {
			width: "163px",
		},

		"@media (min-width: 768px)": {
			width: "312px",
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
	}),

	indicatorsContainer: baseStyles => ({
		...baseStyles,
		height: "100%",
		"&:hover": {
			color: "#161F37",
		},

		"@media (min-width: 768px)": {
			marginTop: "1px",
		},
	}),

	valueContainer: baseStyles => ({
		...baseStyles,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		// textAlign: "right",
		// marginRight: "30px",
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
