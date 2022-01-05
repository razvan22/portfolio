import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@mui/material/Link";

const StyledLink = styled(Link)(({ theme }) => ({
	"&:hover": {
    cursor: "pointer"
  },
}));

const loginStyles = makeStyles((theme) => ({
	loginForm: {
		width: "100%",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			marginTop: "5%",
			width: "50%",
			height: "auto",
		},
		[theme.breakpoints.up("md")]: {
			marginTop: "5%",
			width: "26%",
			height: "auto",
		},
	},

}));


export {StyledLink, loginStyles};