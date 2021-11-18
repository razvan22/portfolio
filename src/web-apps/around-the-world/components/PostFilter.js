import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";



const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  formBox: {
    width:"40%",
    // [theme.breakpoints.up("md")]: {
		//   width: "30%",
  	// },
  }
}));

function PostFilter() {
	const classes = styles();
	const [continent, setContinent] = useState("");
	const [country, setCountry] = useState("");
	const [open, setOpen] = useState(false);

	const handleChange = (event) => {
		setContinent(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true); 
	};

	return (
		<Box className={classes.root}>
			<FormControl sx={{ m: 1 }} className={classes.formBox}>
				<InputLabel  id="demo-simple-select-helper-label">Continent</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={continent}
					label="Continent"
					onChange={handleChange}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 1 }} className={classes.formBox}>
				<InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
				<Select
					labelId="demo-simple-select-helper-label"
					id="demo-simple-select-helper"
					value={country}
					label="Country"
					onChange={handleChange}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
			<FormControl sx={{ m: 1 }} className={classes.formBox}>
				<TextField
					variant="outlined"
					id="input-with-icon-textfield"
					placeholder="Search..."
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</FormControl>
		</Box>
	);
}

export default PostFilter;
