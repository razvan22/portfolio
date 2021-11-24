import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";

const signUpStyles = makeStyles((theme) => ({

}));


const Root = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "100vw",
	height: "100vh",
	backgroundColor: "#0f1313",
}));

const StyledFormControl = styled(Paper)(({ theme }) => ({
	width: "100%",
	height: "100%",
	[theme.breakpoints.up("sm")]: {
		marginTop: "10%",
		width: "50%",
		height: "auto",
		padding: 30,
	},
	[theme.breakpoints.up("md")]: {
		width: "30%",
		padding: 30,
	},
}));

export { StyledFormControl, Root, signUpStyles};