import ScreenSizes from "./ScreenSizes";
const drawerWidth = 400;

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	hide: {
		display: "none",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	navButtons: {
		marginRight: "1rem",
		[ScreenSizes.down("xs")]: {
			marginRight: 0,
		},
	},
	button: {
		margin: "0 0.5rem",
		"& a": {
			textDecoration: "none",
		},
		[ScreenSizes.down("xs")]: {
			margin: "0.2rem",
			padding:"0.2rem"
		},
	},
});
export default styles;