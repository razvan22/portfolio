import { makeStyles } from "@mui/styles";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const navbarStyles = makeStyles((theme) => ({
	navbar: {
		backgroundColor: "#455a64",
		position: "relative",
	},
}));

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	// backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha("#212121", 0.6),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "stat",
	color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "white",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export { navbarStyles, StyledInputBase, SearchIconWrapper, Search };
