import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { projectItemStyles } from "../styles/projectItemsStyles";

function ProjectItem(props) {
	const classes = projectItemStyles();
	const { project } = props;
	
	return (
		<Grid item xs={12} md={9} lg={6} m={2}>
			<Box className={classes.box}>
				<img src={project.imgSrc} alt={project.name} className={classes.img} />
				<div className={classes.imgCover}></div>
				<Avatar
					sx={{
						width: 41,
						height: 40,
						margin: 2,
						display: "inline-block",
						position: "absolute",
					}}
					src={project.icon}
				/>
				<h4 className={classes.projectName}>{project.name}</h4>
				<h6 className={classes.projectDescription}>
					{project.shortDescription}
				</h6>
				{project.path === "nordana" ? (
					<p className={classes.link}>
						<a className={classes.hrfLink} href="nord.html">
							Live Demo
						</a>
					</p>
				) : (
					<Link to={project.path}>
						<p className={classes.link}>Live Demo</p>
					</Link>
				)}
			</Box>
		</Grid>
	);
}

export default ProjectItem;