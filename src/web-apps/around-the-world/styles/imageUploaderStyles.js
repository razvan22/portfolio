import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@mui/material/Box";

const styles = makeStyles((theme) => ({
	uploadButton: {
		border: "1px solid",
		borderRadius: "3px",
		padding: "2rem",
	},
	uploadLabel: {
		color: "#349b45d6",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		border: "solid 1px",
		borderRadius: "3px",
		marginLeft: "0.5rem",
		transition: theme.transitions.create(["all"], {
			duration: theme.transitions.duration.enteringScreen,
		}),
		height: "5rem",
		width: "5rem",
		"&:hover": {
			cursor: "pointer",
			color: "#349b45",
			background: "#349b4542",
		},
	},
	image: {
		height: "inherit",
		width: "inherit",
	},
	removeImgIcon: {
		color: "red",
		position: "absolute",
		"&:hover": {
			transition: theme.transitions.create(["transform"], {
				duration: theme.transitions.duration.standard,
			}),
			cursor: "pointer",
			transform: "scale(1.2)"
		},
	},
}));


const ImageItem = styled(Box)(({ theme }) => ({
	height: "5rem",
	width: "5rem",
	border: "solid 1px",
	borderRadius: "4px",
	margin: "0rem  0.5rem",
	borderColor: "#1976d2",
	display:'flex',
	justifyContent:'end'
}));

const Root = styled(Box)(({ theme }) => ({
	marginTop: "1.5rem",
}));

const ImageBox = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "end",
	flexWrap:'wrap',
	border: "solid 1px",
	borderRadius: "4px",
	borderColor: "#9e9e9e",
	padding: "1rem",
}));




export { ImageBox, Root, ImageItem, styles };