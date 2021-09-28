import { makeStyles } from "@material-ui/core/styles";


const projectItemStyles = makeStyles((theme) => ({
	box: {
		display: "flex",
		position: "relative",
		width: "100%",
		height: "50vh",
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
		bottom: "30%",
		left: "2rem",
		textTransform: "uppercase",
		fontSize: "29px",
		fontFamily: "Gudea, sans-serif",
		fontWeight: 700,
	},
	projectDescription: {
		color: "white",
		position: "absolute",
		bottom: "20%",
		left: "2rem",
		fontWeight: 200,
		fontSize: "19px",
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