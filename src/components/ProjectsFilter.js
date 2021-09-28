import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";


import FilterBar, { FilterButtons } from "../styles/filterBarStyles";
import { ProjectsMetadataContext } from "../assets/contexts/projectsListContext";
import MobileViewFilterButtons from "./MobileViewFilterButtons";

function ProjectsFilter() {
	const { projectsMetadata } = useContext(ProjectsMetadataContext);
	const handleClick = () => {};

	const removeDuplicateTypeValue = () => {
		const filteredProjects = [];
		filteredProjects.push(projectsMetadata[0]);

		projectsMetadata.forEach((data) => {
			const duplicateType = filteredProjects.every((project) => {
				return project.type === data.type;
			});
			if (!duplicateType) filteredProjects.push(data);
		});
		return filteredProjects;
	};

	const buttonsObjects = removeDuplicateTypeValue();

	const filterButtons = removeDuplicateTypeValue().map((data) => (
		<Chip
			px={3}
			avatar={<Avatar alt={data.icon} src={data.icon} />}
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
					ml: { sm: "1%", md: "24.5%" },
					fontWeight: 700
				}}
				gutterBottom
				variant="h4"
				component="h5"
				m={0}
				pl={1}
			>
				{`Projects`}
			</Typography>
			<FilterButtons
				sx={{ display: { xs: "none", sm: "block" } }}
				direction="row"
				spacing={1}
			>
				{filterButtons}
			</FilterButtons>
			<MobileViewFilterButtons projectsMetadata={buttonsObjects} />
		</FilterBar>
	);
}

export default ProjectsFilter;
