import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import img from "../assets/images/reactColors.png";
import { projectItemStyles } from "../styles/projectItemsStyles";

function ProjectItem() {
	const classes = projectItemStyles();

	return (
		<Card sx={{ display: "flex" }} className={classes.card}>
			<CardContent sx={{ width: "50%" }}>
				<Typography gutterBottom variant="h5" component="div">
				Project Name
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardMedia
        className={classes.cardImg}
				component="img"
				image={img}
				alt="Live from space album cover"
			/>
		</Card>
	);
}

export default ProjectItem;
