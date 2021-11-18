import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";


const listStyles = makeStyles((theme) => ({
	listBox: {
		marginTop: "-3vh",
		marginBottom: "3vh",
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
	},

	itemContainer: {
		backgroundColor: "rgb(255, 255, 255)",
		[theme.breakpoints.up("md")]: {
			borderRadius: 4,
			boxShadow: 6,
		},
	},

	// [theme.breakpoints.up("md")]: {
	// 	width: "45vw",
	// },
}));

export { listStyles };