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
  backgroundColor: theme.palette.info.main,
  [theme.breakpoints.up("sm")]: {
    display:"block",
    width:"43%"
  }
}));

const Form = styled('form')(({theme}) =>({
  width:'100%',
  padding: 20,
  [theme.breakpoints.up("sm")]: {
    width: "57%"
  }
}));

const Subtitle = styled("h2")(({ theme }) => ({
  paddingLeft: 5,

}));


export { StyledStack, InfoPanel, Root, Form, Subtitle };
