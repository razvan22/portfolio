//npm imports
import React, { useContext, } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// local imports
import ProjectsFilter from "./ProjectsFilter";
import ProjectItem from "./ProjectItem";
import projectsListStyles from "../styles/projectsListStyles";
import { ProjectsMetadataContext } from "../assets/contexts/projectsListContext";

export default function ProjectsList() {
	const classes = projectsListStyles();
	const { projectsMetadata } = useContext(ProjectsMetadataContext);
	const projects = projectsMetadata.map((project) => (
		<ProjectItem project={project} />
	));

	return (
		<div>
			<ProjectsFilter/>
			<Box  sx={{ flexGrow: 1 }} className={classes.box} > 
				<Grid container justifyContent="center" >
					{projects}
				</Grid>
			</Box>
		</div>
	);
}
