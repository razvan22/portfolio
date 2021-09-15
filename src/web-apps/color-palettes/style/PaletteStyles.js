import ScreenSizes from "./ScreenSizes"

export default {
	Palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
	},
	colors: {
		height: "90%",
	},

	goBack: {
		width: "20%",
		height: "50%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-0.6vh",
		opacity: 1,
		backgroundColor: "black",
		"& a ": {
			color: "white",
			width: "100px",
			height: "30px",
			position: "absolute",
			display: "inline-block",
			top: "50%",
			left: "50%",
			marginLeft: "-50px",
			marginTop: "-15px",
			textAlign: "center ",
			outline: "none",
			background: "rgba(255, 255, 255, 0.3)",
			fontSize: "1rem",
			lineHeight: "30px",
			textTransform: "uppercase",
			border: "none",
			textDecoration: "none",
		},
		[ScreenSizes.down('lg')]:{
			width: "25%",
			height: "33.3333%"
		},
		[ScreenSizes.down("md")]: {
			width: "50%",
			height: "20%",
		},
		[ScreenSizes.down("xs")]: {
			height: "10%",
			width: "100%",
		},
	},
};
