
import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Typical from "react-typical";


import Navbar from "../components/navbar/Navbar";
import ProjectsList from "../components/ProjectsList";
import { homePageStyles, StyledTypography } from "../styles/homePageStyles";
import profileImg from "../assets/images/me.jpeg";


function HomePage() {
	const classes = homePageStyles();

	return (
		<div>
			<Navbar />
			<Stack
				className={classes.main}
				p={{ xs: 4, md: 4, xl: 6 }}
				justifyContent="space-around"
				alignItems="center"
				direction={{ xs: "column", md: "row" }}
				spacing={{ xs: 1, md: 4 }}
			>
				<Avatar
					className={classes.avatar}
					sx={{ width: "20rem", height: "20rem", boxShadow: 5 }}
					alt="Razvan Petru"
					src={profileImg}
				/>
				<Box sx={{ height: "20%" }}>
					<StyledTypography variant="h4">
						Hi there! I'm Razvan-Petru
					</StyledTypography>
					<Typography variant="h6" component="h6">
						<Typical
							loop={2}
							steps={["A full stack junior developer 🙂 ", 900]}
						/>
					</Typography>
				</Box>
			</Stack>
			<ProjectsList />
			<div>
				
			</div>
		</div>
	);
}

export default HomePage;
