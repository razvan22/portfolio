import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";


import { UserContext } from "../context/UserContext";


function LoggedUserMenu() {
	const { user, setUser, setJwtToken } = useContext(UserContext);

  const logout = () => {
    setJwtToken(null);
    setUser(null);
  };


  return (
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
	);
}

export default LoggedUserMenu
