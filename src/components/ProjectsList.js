//npm imports
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


// local imports
import ProjectsFilter from "./ProjectsFilter"
import ProjectItem from "./ProjectItem";
import projectsListStyles from "../styles/projectsListStyles";

export default function ProjectsList() {
	const classes = projectsListStyles();

	return (
		<div>
			<ProjectsFilter />
			<Box p={5} sx={{ flexGrow: 1 }} className={classes.box}>
				<Grid container spacing={10} justifyContent="space-around">
					<Grid item xs={12} md={7}>
						<ProjectItem />
					</Grid>
					<Grid item xs={12} md={7}>
						<ProjectItem />
					</Grid>
					<Grid item xs={12} md={7}>
						<ProjectItem />
					</Grid>
					<Grid item xs={12} md={7}>
						<ProjectItem />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
