import { styled, alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const signUpStyles = makeStyles((theme) => ({

}));


const Root = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	width: "100vw",
	height: "100vh",
	backgroundColor: "#313538",
}));

const StyledFormControl = styled(Paper)(({ theme }) => ({
	width: "100%",
	height: "100%",
	[theme.breakpoints.up("sm")]: {
		width: "30%",
		height: "40%",
		padding: 30,
	},

}));

export { StyledFormControl, Root, signUpStyles};