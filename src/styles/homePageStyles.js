import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import bg from "../assets/images/bg.jpg";

const homePageStyles = makeStyles((theme) => ({
	main: {
		backgroundImage: `url(${bg})`,
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		color: "white",
	},
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		textAlign: "center",
		fontSize: "1.5rem",
		fontWeight: "bold",
		paddingTop: "1rem",
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.7rem",
	},
	[theme.breakpoints.up("lg")]: {
		fontSize: "2.5rem",
	},
}));

export { homePageStyles, StyledTypography };
