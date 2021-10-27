import React from 'react'

function LoggedUserMenu() {
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
