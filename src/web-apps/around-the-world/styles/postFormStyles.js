import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import postBg from '../assets/post-bg.jpg'

const Root = styled('div')(({theme}) =>(({
  height:"100vh",
  display:"flex",
  flexDirection:"column"
})));

const StyledStack = styled(Stack)(({ theme }) => ({
  flexGrow : 1,
}));

const InfoPanel = styled("div")(({ theme }) => ({
	display: "none",
	height: "100%",
	backgroundImage: `url(${postBg})`,
  backgroundPosition: "center", 
  backgroundSize: "cover",
	[theme.breakpoints.up("sm")]: {
		display: "block",
		width: "43%",
	},
}));

const Form = styled('form')(({theme}) =>({
  width:'100%',
  padding: 20,
  [theme.breakpoints.up("sm")]: {
    width: "57%"
  }
}));

const Subtitle = styled("h1")(({ theme }) => ({
	paddingLeft: 5,
	textAlign: "center",
	color: "#153344",
	paddingTop: "20vh",
  
}));


export { StyledStack, InfoPanel, Root, Form, Subtitle };
