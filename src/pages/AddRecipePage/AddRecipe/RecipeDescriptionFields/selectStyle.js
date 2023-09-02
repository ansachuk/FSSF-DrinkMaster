export const styles = {
	control: baseStyles => ({
		...baseStyles,
		alignItems: "flex-start",
		minHeight: "34px",
		paddingLeft: "100px",
		fontSize: "14px",
		lineHeight: "calc(14 / 14)",
		backgroundColor: "transparent",
		borderRadius: "5px",
		cursor: "text",
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
		width: "131px",
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
		flexWrap: "nowrap",
	}),

	singleValue: baseStyles => ({
		...baseStyles,
		width: "100%",
		textAlign: "right",
		lineHeight: "normal",
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
