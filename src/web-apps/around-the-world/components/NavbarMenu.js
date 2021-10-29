import React, { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip"; 
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";



import LoggedUserMenu from "./LoggedUserMenu";
import UserMenu from "./UserMenu";
import { UserContext } from "../context/UserContext";


function NavbarMenu() {
  const { user } = useContext(UserContext);
  	const [anchorEl, setAnchorEl] = useState(null);
		const open = Boolean(anchorEl);

    const handleClick = (event) => {
				setAnchorEl(event.currentTarget);
			};
			const handleClose = () => {
				setAnchorEl(null);
			};

	return (
		<div>
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
				{user === null ? <UserMenu /> : <LoggedUserMenu />}
			</Menu>
		</div>
	);
}

export default NavbarMenu;
