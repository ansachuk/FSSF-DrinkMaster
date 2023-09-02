//
export const stylesDrink = {
	control: baseStyles => ({
		...baseStyles,
		width: "200px",
		// width: "319px",
		// width: "100%",
		height: "54px",
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
			width: "264px",
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

// 2-й вариант

// export const stylesDrink = {
// 	control: baseStyles => ({
// 		...baseStyles,
// 		width: "100%",
// 		height: "54px",
// 		alignItems: "flex-start",
// 		padding: "18px 17px 18px 24px",
// 		// fontSize: "14px",
// 		lineHeight: "calc(14 / 14)",
// 		backgroundColor: "transparent",
// 		border: "1px solid rgba(243, 243, 243, 0.50)",
// 		borderRadius: "200px",
// 		cursor: "text",
// 		"&:hover, &:focus": {
// 			borderColor: "#f3f3f3",
// 		},
// 		"@include tablet": {
// 			padding: "14px 18px 14px 24px",
// 			width: "199px",
// 			height: "56px",
// 		},
// 	}),

// 	menu: baseStyles => ({
// 		...baseStyles,
// 		position: "absolute",
// 		right: 0,
// 		top: 0,
// 		width: "100%",
// 		padding: "18px 4px 18px 14px",
// 		borderRadius: "20px",
// 		background: "#161f37",
// 		gap: "0",
// 		zIndex: "1112",
// 		"@media screen and (min-width: 768px)": {
// 			paddingLeft: "14px",
// 			width: "199px",
// 		},
// 	}),

// 	menuList: baseStyles => ({
// 		...baseStyles,
// 		// display: "flex",
// 		// flexDirection: "column",

// 		margin: "0",
// 		gap: "8px",
// 		padding: "0",
// 		height: "314px",

// 		// width: "100%",
// 		// height: "150px",
// 		// padding: "10px",
// 		// marginLeft: "auto",
// 		// marginTop: "-6px",
// 		overflowX: "hidden",
// 		color: "rgba(243, 243, 243, 0.50)",
// 		borderRadius: "12px",
// 		backgroundColor: "#161F37",
// 		"::-webkit-scrollbar": {
// 			width: "5px",
// 			height: "80px",
// 		},
// 		"@include tablet": {
// 			height: "405px",
// 		},
// 	}),

// 	option: (baseStyles, state) => ({
// 		...baseStyles,
// 		fontSize: "14px",
// 		// textWrap: "nowrap",
// 		marginBottom: "8px",
// 		padding: "0",
// 		lineHeight: "calc(18 / 14)",
// 		color: state.isSelected ? "#f3f3f3" : "inherit",
// 		"&:hover": {
// 			color: "#f3f3f3",
// 		},
// 		"@include tablet": {
// 			fontSize: "17px",
// 			lineHeight: "26.52px",
// 		},
// 	}),

// 	indicatorsContainer: baseStyles => ({
// 		...baseStyles,
// 		height: "100%",
// 		"&:hover": {
// 			color: "#161F37",
// 		},
// 	}),

// 	valueContainer: baseStyles => ({
// 		...baseStyles,
// 		display: "flex",
// 		justifyContent: "center",
// 		alignItems: "flex-start",
// 		flexWrap: "nowrap",
// 	}),

// 	singleValue: baseStyles => ({
// 		...baseStyles,
// 		width: "100%",
// 		textAlign: "left",
// 		overflow: "visible",
// 	}),

// 	input: baseStyles => ({
// 		...baseStyles,
// 		lineHeight: "normal",
// 		justifyContent: "end",
// 	}),

// 	indicatorSeparator: () => ({
// 		display: "none",
// 	}),
// };


// 3-й вариант

// export const stylesDrink = {
// 	control: baseStyles => ({
// 		...baseStyles,
// 		width: "200px",
// 		height: "54px",
// 		alignItems: "flex-start",
// 		padding: "16px",
// 		fontSize: "14px",
// 		lineHeight: "calc(14 / 14)",
// 		backgroundColor: "transparent",
// 		border: "1px solid rgba(243, 243, 243, 0.50)",
// 		borderRadius: "200px",
// 		cursor: "text",
// 		"&:hover, &:focus": {
// 			borderColor: "#f3f3f3",
// 		},
// 		"@include tablet": {
// 			padding: "14px 18px 14px 24px",
// 			width: "199px",
// 			height: "56px",
// 		},
// 	}),

// 	menu: baseStyles => ({
// 		...baseStyles,
// 		width: "100%",
// 		"@include tablet": {
// 			paddingLeft: "14px",
// 			width: "199px",
// 		},
// 	}),

// 	menuList: baseStyles => ({
// 		...baseStyles,
// 		display: "flex",
// 		flexDirection: "column",
// 		gap: "6px",
// 		width: "100%",
// 		height: "150px",
// 		padding: "10px",
// 		marginLeft: "auto",
// 		marginTop: "-6px",
// 		overflowX: "hidden",
// 		color: "rgba(243, 243, 243, 0.50)",
// 		borderRadius: "12px",
// 		backgroundColor: "#161F37",
// 		"::-webkit-scrollbar": {
// 			width: "5px",
// 			height: "80px",
// 		},
// 		"@include tablet": {
// 			height: "405px",
// 		},
// 	}),

// 	option: (baseStyles, state) => ({
// 		...baseStyles,
// 		fontSize: "12px",
// 		textWrap: "nowrap",
// 		padding: 0,
// 		color: state.isSelected ? "#f3f3f3" : "inherit",
// 		"&:hover": {
// 			color: "#f3f3f3",
// 		},
// 		"@include tablet": {
// 			fontSize: "17px",
// 			lineHeight: "26.52px",
// 		},
// 	}),

// 	indicatorsContainer: baseStyles => ({
// 		...baseStyles,
// 		height: "100%",
// 		"&:hover": {
// 			color: "#161F37",
// 		},
// 	}),

// 	valueContainer: baseStyles => ({
// 		...baseStyles,
// 		display: "flex",
// 		justifyContent: "center",
// 		alignItems: "flex-start",
// 		flexWrap: "nowrap",
// 	}),

// 	singleValue: baseStyles => ({
// 		...baseStyles,
// 		width: "100%",
// 		textAlign: "left",
// 		overflow: "visible",
// 	}),

// 	input: baseStyles => ({
// 		...baseStyles,
// 		lineHeight: "normal",
// 		justifyContent: "end",
// 	}),

// 	indicatorSeparator: () => ({
// 		display: "none",
// 	}),
// };



// 4-й вариант
// export const stylesDrink = {
//   control: (baseStyles) => ({
//     ...baseStyles,
//     width: "100%",
//     height: "54px",
//     position: "relative",
//     backgroundColor: "$secondary-bg-blue-color",
//     border: "none",
//     padding: "18px 17px 18px 24px",
//     borderRadius: "200px",

//     "@media screen and (min-width: 768px)": {
//       padding: "14px 18px 14px 24px",
//       width: "199px",
//       height: "56px",
//     },
//   }),

//   "input-container": (baseStyles) => ({
//     ...baseStyles,
//     padding: "0",
//     margin: "0",
//     lineHeight: "calc(18 / 14)",
//     color: "$primary-white-color",

//     "@media screen and (min-width: 768px)": {
//       fontSize: "17px",
//       lineHeight: "26.52px",
//     },
//   }),

//   "value-container": (baseStyles) => ({
//     ...baseStyles,
//     padding: "0",
//   }),

//   indicator: (baseStyles) => ({
//     ...baseStyles,
//     padding: "0",
//     cursor: "pointer",
//   }),

//   placeholder: (baseStyles) => ({
//     ...baseStyles,
//     margin: "0",
//     color: "$primary-white-color",
//     opacity: "0.5",

//     "@media screen and (min-width: 768px)": {
//       fontSize: "17px",
//     },
//   }),

//   "single-value": (baseStyles) => ({
//     ...baseStyles,
//     color: "$primary-white-color",
//     margin: "0",
//   }),

//   menu: (baseStyles) => ({
//     ...baseStyles,
//     position: "absolute",
//     right: "0",
//     top: "0",
//     width: "100%",
//     padding: "18px 4px 18px 14px",
//     borderRadius: "20px",
//     background: "#161f37",
//     gap: "0",
//     zIndex: "1112",

//     "@media screen and (min-width: 768px)": {
//       paddingLeft: "14px",
//       width: "199px",
//     },
//   }),

//   "menu-list": (baseStyles) => ({
//     ...baseStyles,
//     margin: "0",
//     gap: "8px",
//     padding: "0",
//     height: "314px",

//     "@media screen and (min-width: 768px)": {
//       height: "405px",
//     },
//   }),

//   option: (baseStyles) => ({
//     ...baseStyles,
//     marginBottom: "8px",
//     padding: "0",
//     backgroundColor: "inherit",
//     fontSize: "14px",
//     lineHeight: "calc(18 / 14)",

//     "@media screen and (min-width: 768px)": {
//       fontSize: "17px",
//       lineHeight: "26.52px",
//     },
//   }),

//   "indicator-separator": (baseStyles) => ({
//     ...baseStyles,
//     backgroundColor: "inherit",
//   }),
// };
