import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const navbarStyles = makeStyles((theme) => ({
	root: {
		background:
			"linear-gradient(90deg, rgba(34,31,75,1) 0%, rgba(25,145,170,1) 100%, rgba(0,255,248,1) 100%)",
		justifyContent: "flex-end",
	},

}));

const NavButton = styled(Button)(({ theme }) => ({
	color: "#e2e2e9",
	"&:hover": {
		color: "#fdb52d",
	},
	[theme.breakpoints.up("sm")]: {
		letterSpacing: "0.2rem",
		paddingRight: "1.5rem"
	},
}));

export { navbarStyles, NavButton };