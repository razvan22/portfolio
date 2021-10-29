import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip"; 
import PersonAdd from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";

import { useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import LoggedUserMenu from "./LoggedUserMenu";
import {
	navbarStyles,
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "../styles/navbarStyles";
import NavbarMenu from "./NavbarMenu";


function Navbar(props) {
	const {search} = props;
	const history = useHistory();

	const classes = navbarStyles();
	const { user, setUser, setJwtToken } = useContext(UserContext);
		const handleClick = (event) => {
		};


	return (
		<div>
			<Box
				className={classes.navbar}
				sx={{
					display: "flex",
					justifyContent: "end",
				}}
			>
				{search ? (
					<Toolbar>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{ "aria-label": "search" }}
							/>
						</Search>
					</Toolbar>
				) : (
					""
				)}
				{user == null ? (
					""
				) : (
					<Tooltip title="Create Post" sx={{ alignSelf: "end" }}>
						<IconButton
							onClick={() => history.push("/around-the-world/newpost")}
							size="large"
						>
							<AddIcon
								sx={{
									color: "white",
									fontSize: 34,
									m: 0.5,
								}}
							/>
						</IconButton>
					</Tooltip>
				)}

				<NavbarMenu />
			</Box>
		</div>
	);
}

export default Navbar;
