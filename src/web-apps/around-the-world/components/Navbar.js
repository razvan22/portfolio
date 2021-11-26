import React, {  useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip"; 
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useHistory } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import {
	navbarStyles,
	Search,
	SearchIconWrapper,
	StyledInputBase,
} from "../styles/navbarStyles";
import NavbarMenu from "./NavbarMenu";
import FetchUser from '../customHooks/fetchUser';


function Navbar(props) {
	const {search} = props;
	const history = useHistory();

	const classes = navbarStyles();
	const { jwtToken, user, setUser, loading} = useContext(UserContext);

	useEffect(() => {
		async function fetchData() {
			let user = await FetchUser(jwtToken);
			setUser(user);
		}
		fetchData();
	}, [jwtToken, setUser]);

	return (
		<Box p={0} m={0}>
			<Box
				className={classes.navbar}
				sx={{
					display: "flex",
					justifyContent: "end",
					boxShadow: 3,
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
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
	);
}

export default Navbar;
