import ScreenSizes from "./ScreenSizes";

export default {
	Navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "6vh",
	},

	logo: {
		marginRight: "15px",
		padding: "0 13px",
		fontSize: "22px",
		backgroundColor: "#eceff1",
		fontFamily: "Roboto",
		height: "100%",
		display: "flex",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "black",
		},
		[ScreenSizes.down("xs")]: {
			display: "none",
		},
	},

	Slider: {
		width: "15vw",
		margin: "0 10px",
		display: "inline-block",
		"& .rc-slider-rail": {
			height: "8px",
		},

		"& .rc-slider-track": {
			backgroundColor: "transparent",
		},

		"& .rc-slider-handle, .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover":
			{
				backgroundColor: "green",
				outline: "none",
				border: "2px solid green",
				boxShadow: "none",
				width: "13px",
				height: "13px",
				marginTop: "-3px",
			},
		[ScreenSizes.down("xs")]: {
			width: "25vw",
		},
	},
	level:{
		paddingLeft:"0.5rem"
	},
	selectContainer: {
		marginLeft: "auto",
		marginRight: "1rem",
	},
};
