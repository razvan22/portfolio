import { makeStyles } from "@material-ui/core/styles";


const projectItemStyles = makeStyles((theme) => ({
	hrfLink: {
		fontSize: "15px",
		fontWeight: "bold",
		color: "white",
		textDecoration: "none",
		"&:hover": {
			cursor: "pointer",
			borderColor: "white",
			color: "#e1f5fe",
		},
	},
	box: {
		display: "flex",
		position: "relative",
		width: "100%",
		height: "50vh",
		"&:hover h6": {
			opacity: 1,
		},
	},
	img: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},
	imgCover: {
		width: "100%",
		height: "100%",
		position: "absolute",
		background: "black",
		opacity: 0.5,
		transition: "opacity 0.6s ease",
		"&:hover": {
			opacity: 0.7,
		},
	},
	projectName: {
		color: "white",
		position: "absolute",
		bottom: "10%",
		left: "2rem",
		textTransform: "uppercase",
		fontFamily: "Gudea, sans-serif",
		fontSize: "20px",
		fontWeight: 700,
		[theme.breakpoints.down("sm")]: {},
		[theme.breakpoints.up("sm")]: {
			fontSize: "29px",
		},
	},
	projectDescription: {
		color: "white",
		position: "absolute",
		bottom: "0%",
		left: "2rem",
		fontWeight: 200,
		fontSize: "10px",
		opacity: 0,
		transition: "opacity 0.8s ease-in-out",
		[theme.breakpoints.down("sm")]: {
			bottom: "6%",
			opacity: 1,
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "15px",
		},
	},
	link: {
		textDecoration: "none",
		position: "absolute",
		fontSize: "15px",
		fontWeight: "bold",
		color: "white",
		right: "2rem",
		bottom: "1%",
		borderBottom: "1px solid transparent",
		transition: "all ease-in-out 0.2s",
		"&:hover": {
			cursor: "pointer",
			borderColor: "white",
			color: "#e1f5fe",
		},
		[theme.breakpoints.down("sm")]: {
			right: "1rem",
			bottom: 0,
		},
	},
}));

export { projectItemStyles };