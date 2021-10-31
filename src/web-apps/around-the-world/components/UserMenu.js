import React  from "react";
import MenuItem from "@mui/material/MenuItem";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginIcon from "@mui/icons-material/Login";
import { useHistory } from "react-router-dom";




function UserMenu() {
  const history = useHistory();

	return (
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
	);
}

export default UserMenu;
