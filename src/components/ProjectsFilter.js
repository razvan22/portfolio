import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";


import FilterBar, { FilterButtons } from "../styles/filterBarStyles";
import { ProjectsMetadataContext } from "../assets/contexts/projectsListContext";
import MobileViewFilterButtons from "./MobileViewFilterButtons";

function ProjectsFilter() {
	const { projectsMetadata } = useContext(ProjectsMetadataContext);

	const handleClick = () => {
		console.log(projectsMetadata);
	};

	const filterButtons = projectsMetadata.map((data) => (
		<Chip
			px={3}
			avatar={<Avatar alt="Natacha" src={data.icon} />}
			label={data.type}
			variant="outlined"
			onClick={handleClick}
			key={data.type}
		/>
	));



	return (
		<FilterBar direction="row" spacing={1}>
			<Typography
				sx={{
					display: { xs: "none", sm: "block" },
				}}
				gutterBottom
				variant="h5"
				component="div"
				m={0}
				pl={1}
			>
				{`Projects />`}
			</Typography>
			<FilterButtons
				sx={{ display: { xs: "none", sm: "block" } }}
				direction="row"
				spacing={1}
			>
				{filterButtons}
			</FilterButtons>
			<MobileViewFilterButtons projectsMetadata={projectsMetadata} />
		</FilterBar>
	);
}

export default ProjectsFilter;
