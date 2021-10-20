import { styled } from "@material-ui/core/styles";
import Link from "@mui/material/Link";

const StyledLink = styled(Link)(({ theme }) => ({
	"&:hover": {
    cursor: "pointer"
  },
}));

export {StyledLink};