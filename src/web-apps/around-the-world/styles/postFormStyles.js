import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

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
  height:'100%',
  [theme.breakpoints.up("sm")]: {
    display:"block",
    width:"40%"
  }
}));

const Form = styled('form')(({theme}) =>({
  width:"100%",

}));

const Subtitle = styled("h3")(({ theme }) => ({
  paddingLeft: 5,

}));


export { StyledStack, InfoPanel, Root, Form, Subtitle };
