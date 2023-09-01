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
	}),

	menu: baseStyles => ({
		...baseStyles,
		width: "100%",
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
