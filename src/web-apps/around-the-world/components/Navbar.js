import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import { useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import {
	navbarStyles,
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "../styles/navbarStyles";



function Navbar(props) {
	const {search} = props;
	const history = useHistory();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const classes = navbarStyles();
	const { user, setUser, setJwtToken } = useContext(UserContext);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const logout = () => {
		setJwtToken(null);
		setUser(null);
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
				{search ?
				(
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
				) : ''}
				<Tooltip title="Account settings" sx={{ alignSelf: "end" }}>
					<IconButton onClick={handleClick} size="large" sx={{ ml: 1, mr: 4 }}>
						<Avatar
							sx={{
								width: 34,
								height: 34,
								backgroundColor: "red",
								padding: 0.2,
							}}
						>
							<PersonIcon sx={{ fontSize: 28 }} />
						</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				{user === null ? (
					<div>
						<MenuItem onClick={() => history.push("/around-the-world/signup")}>
							<ListItemIcon>
								<PersonAdd fontSize="small" />
							</ListItemIcon>
							Sign Up
						</MenuItem>
						<MenuItem onClick={() => history.push("/around-the-world/login")}>
							<ListItemIcon>
								<LoginIcon fontSize="small" />
							</ListItemIcon>
							Login
						</MenuItem>
					</div>
				) : (
					<div>
						<MenuItem>
							<ListItemIcon>
								<FaceRoundedIcon />
							</ListItemIcon>
							{user.firstName}
						</MenuItem>
						<Divider />
						<MenuItem onClick={logout}>
							<ListItemIcon>
								<Logout />
							</ListItemIcon>
							Logout
						</MenuItem>
					</div>
				)}
			</Menu>
		</div>
	);
}

export default Navbar;
