import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

const StyledFormControl = styled(FormControl)(({ theme }) => ({
	width: "100%",
	justifyContent: "space-between",
	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
}));

export { StyledFormControl };
