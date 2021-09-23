import { makeStyles } from "@material-ui/core/styles";


const projectItemStyles = makeStyles((theme) => ({
  card:{
    height: "40vh"
  },
  cardImg:{
    maxWidth: "50%",
    height: "auto",
    borderRadius:"4px"
  }
}));

export { projectItemStyles };