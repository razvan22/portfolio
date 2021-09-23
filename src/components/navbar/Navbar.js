import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { navbarStyles , NavButton } from "../../styles/navbarStyles";

function Navbar() {
	const classes = navbarStyles();

	return (
		<Box>
			<AppBar position="static">
				<Toolbar className={classes.root}>
					<NavButton startIcon={<DescriptionOutlinedIcon />}>Resume</NavButton>
					<NavButton startIcon={<FolderOpenOutlinedIcon />}>
						Projects
					</NavButton>
					<NavButton startIcon={<AlternateEmailOutlinedIcon />}>
						Contact
					</NavButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Navbar;
