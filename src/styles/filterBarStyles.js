import { styled, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Stack from "@mui/material/Stack";

const FilterBar = styled(Stack)(({ theme }) => ({
	height: "4rem",
	alignItems: "center",
}));

const FilterButtons = styled(Stack)(({ theme }) => ({

}));




export { FilterBar as default, FilterButtons };