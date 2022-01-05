import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";


import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";


function LoggedUserMenu() {
	const { user, setUser, setJwtToken } = useContext(UserContext);
	const history = useHistory();

  const logout = () => {
    setJwtToken(null);
    setUser(null);
		history.push("/around-the-world");
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
