import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import FilterListIcon from "@mui/icons-material/FilterList";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Chip from "@mui/material/Chip";
import { yellow } from "@mui/material/colors";


import { FilterButtons } from "../styles/filterBarStyles";

function MobileViewFilterButtons(props) {
	const { projectsMetadata } = props;
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
    console.log(yellow[500]);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<FilterButtons
			p={1}
			sx={{
				display: { xs: "show", sm: "none" },
				width: "100%",
			}}
			direction="row"
			justifyContent="flex-end"
		>
			<Button
				variant="outlined"
				startIcon={<FilterListIcon />}
				id="basic-button"
				aria-controls="basic-menu"
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				Projects
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{projectsMetadata.map((project) => (
					<MenuItem onClick={handleClose} key={project.type}>
						<Avatar
							sx={{ width: 22, height: 22, padding: 1 }}
							src={project.icon}
						/>
						{project.type}
					</MenuItem>
				))}
				<MenuItem onClick={handleClose} sx={{ paddingX: "3rem" }}>
					<Chip
						px="auto"
						avatar={<AutorenewIcon />}
						label="Reset"
						variant="outlined"
						onClick={handleClick}
					/>
				</MenuItem>
			</Menu>
		</FilterButtons>
	);
}

export default MobileViewFilterButtons;
