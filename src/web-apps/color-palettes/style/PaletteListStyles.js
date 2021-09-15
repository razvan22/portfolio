import ScreenSizes from "./ScreenSizes";
import bg from "./background.svg"


export default {
	"@global": {
		".fade-exit":{
			opacity: 1,
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 500ms ease-out"
		}
	},
	root: {
		backgroundColor: "blue",
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		/* background by SVGBackground.com */
		backgroundImage: `url(${bg})`,
		overflow: "scroll",
	},
	title: {
		fontSize: "2rem",
		[ScreenSizes.down("xs")]: {
			fontSize: "1.5rem"
		},
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[ScreenSizes.down("xl")]: {
			width: "80%",
		},
		[ScreenSizes.down("xl")]: {
			width: "75%",
		},
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		color: "white",
		"& a": {
			color: "white",
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "1.5rem",
		[ScreenSizes.down("md")]: {
			gridTemplateColumns: "repeat(2, 50%)",
		},
		[ScreenSizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)",
		},
	},
};
