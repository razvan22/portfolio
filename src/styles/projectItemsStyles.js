import { makeStyles } from "@material-ui/core/styles";


const projectItemStyles = makeStyles((theme) => ({
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
			cursor: "pointer",
		},
	},
	projectName: {
		color: "white",
		position: "absolute",
		bottom: "10%",
		left: "2rem",
		textTransform: "uppercase",
		fontFamily: "Gudea, sans-serif",
		fontSize: "25px",
		fontWeight: 700,
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
		fontSize: "12px",
		opacity: 0,
		transition: "opacity 0.8s ease-in-out",
		[theme.breakpoints.down("sm")]: {
			opacity: 1
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "15px",
		},
	},
	link: {
		position: "absolute",
		fontSize: "15px",
		color: "white",
		right: "2rem",
		bottom: "5%",
		borderBottom: "1px solid transparent",
		transition: "all ease-in-out 0.2s",
		"&:hover": {
			cursor: "pointer",
			borderColor: "white",
			color: "#bbdefb",
		},
	},
}));

export { projectItemStyles };