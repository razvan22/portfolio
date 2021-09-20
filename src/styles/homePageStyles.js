import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import bg from "../assets/bg.jpg";
import { padding } from "@mui/system";



const homePageStyles = makeStyles({
	main: {
		backgroundImage: `url(${bg})`,
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		color: "white",
	},
});

const StyledTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		textAlign:"center",
		fontSize: "1.5rem",
		fontWeight:"bold",
		paddingTop: "1rem"
	},
	[theme.breakpoints.up("md")]: {
		fontSize: "1.7rem",
	},
	[theme.breakpoints.up("lg")]: {
		fontSize: "2.3rem",
	},
}));

export { homePageStyles, StyledTypography };
