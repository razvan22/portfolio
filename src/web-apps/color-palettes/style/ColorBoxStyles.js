import chroma from "chroma-js";
import ScreenSizes from "./ScreenSizes";

const  ColorBoxStyles = {
	copyText: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.6 ? "dark-text" : "light-text",
	},
	ColorBox: {
		height: (props) => (props.showingFullPalette ? "25%" : "50%"),
		width: "20%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-0.6vh",
		"&:hover button": {
			opacity: 1,
			transition: "0.5s",
			cursor: "pointer",
		},
		[ScreenSizes.down("lg")]: {
			width: "25%",
			height: (props) => (props.showingFullPalette ? "20%" : "33.3333%"),
		},
		[ScreenSizes.down("md")]: {
			width: "50%",
			height: (props) => (props.showingFullPalette ? "10%" : "20%"),
		},
		[ScreenSizes.down("xs")]: {
			width: "100%",
			height: (props) => (props.showingFullPalette ? "8%" : "10%"),
		},
	},
	seeMore: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.6
				? "rgba(36, 36, 36, 0.6)"
				: "white",
		background: "rgba(255, 255, 255, 0.3)",
		position: "absolute",
		border: "none",
		right: "0px",
		bottom: "0px",
		width: "60px",
		height: "30px",
		textAlign: "center",
		lineHeight: "30px",
		textTransform: "uppercase",
	},
	copyButton: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.6
				? "rgba(36, 36, 36, 0.6)"
				: "white",
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
		opacity: 0,
	},
	boxContent: {
		position: "absolute",
		width: "100%",
		height: "1.5rem",
		left: "0px",
		bottom: "0px",
		color: "black",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px",
		"& span": {
			paddingLeft: "1.5rem",
		},
	},
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transition: "transform 0.6s ease-in-out",
		transform: "scale(0.1)",
	},
	showOverlay: {
		opacity: "1",
		transform: "scale(50)",
		zIndex: "10",
		position: "absolute",
	},
	copyMsg: {
		position: "fixed",
		left: "0",
		right: "0",
		top: "0",
		bottom: "0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		fontSize: "4rem",
		transform: "scale(0.1)",
		opacity: "0",
		color: "white",
	},
	showMessage: {
		opacity: "1",
		transform: "scale(1)",
		zIndex: "25",
		transition: "all 0.4s ease-in-out",
		transitionDelay: "0.3s",
		"& h1": {
			fontWeight: "400",
			textShadow: "1px 2px black",
			background: "rgb(255, 255, 255,0.2)",
			width: "100%",
			textAlign: "center",
			marginTop: "0",
			padding: "1rem",
			textTransform: "uppercase",
			[ScreenSizes.down('xs')]:{
				fontSize: "4rem",
				padding: "0.5rem"
			}
		},
		"& p": {
			fontSize: "2rem",
			fontWeight: "100",
		},
	},
};

export default ColorBoxStyles;