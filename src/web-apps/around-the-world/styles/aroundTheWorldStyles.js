import { makeStyles } from "@material-ui/core/styles";
import cover from "../assets/cover.jpg"

const aroundTheWorldStyles = makeStyles((theme) => ({
	cover: {
		width: "100%",
		height: "50vh",
	  backgroundImage: `url(${cover})`,
    backgroundPosition: "center", 
    backgroundSize: "cover"
	},
}));
export default aroundTheWorldStyles;