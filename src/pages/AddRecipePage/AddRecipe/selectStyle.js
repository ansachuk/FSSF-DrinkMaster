export const styles = {
	control: baseStyles => ({
		...baseStyles,
		alignItems: "flex-start",
		minHeight: "34px",
		paddingLeft: "80px",
		fontSize: "14px",
		lineHeight: "calc(14 / 14)",
		// textAlign: "right",
		backgroundColor: "transparent",
		// border: 0,
		// borderRadius: 0,
		// borderBottom: "1px solid rgba(243, 243, 243, 0.50)",
		// outline: 0,
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
		height: "129px",
		padding: "10px",
		marginLeft: "auto",
		marginTop: "-6px",
		overflowX: "hidden",
		color: "rgba(243, 243, 243, 0.50)",
		borderRadius: "12px",
		backgroundColor: "#161F37",
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
	}),

	valueContainer: baseStyles => ({
		...baseStyles,
		display: "flex",
		flexWrap: "nowrap",
	}),

	placeholder: baseStyles => ({
		...baseStyles,
		paddingTop: "2px",
		lineHeight: "normal",
		textAlign: "right",
		width: "100%",
	}),

	singleValue: baseStyles => ({
		...baseStyles,
		width: "100%",
		paddingTop: "2px",
		textAlign: "right",
		lineHeight: "normal",
	}),

	input: baseStyles => ({
		...baseStyles,
		paddingTop: "2px",
		lineHeight: "normal",
		justifyContent: "end",
	}),

	indicatorSeparator: () => ({
		display: "none",
	}),
};
