import React from "react";
import { red, grey, blueGrey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";



function Comment({ comment }) {

	return (
		<Stack
			sx={{
				border: 1,
				borderRadius: 1,
				borderColor: "grey.500",
				p: 2,
				m: 1,
				backgroundColor: "#ddd",
			}}
		>
			<Box sx={{ display: "flex", textAlign: "center", alignItems: "center" }}>
				<Avatar sx={{ mr: 1, backgroundColor: "#4d4848" }}>RN</Avatar>
				<Typography color={blueGrey[900]} variant="h6" component="h6">
					{comment.authorName}
				</Typography>
				<Typography color={grey[600]} pl={1} variant="subtitle1">
					says:
				</Typography>
			</Box>
			<Box m={3}>
				<Typography color={grey[700]} pl={1} variant="subtitle1">
					{comment.comment}
				</Typography>
			</Box>
			<Typography
				sx={{ fontStyle: "italic" }}
				ml={4}
				color={grey[600]}
				variant="caption"
				display="block"
				gutterBottom
			>
				{comment.commentDate}
			</Typography>
		</Stack>
	);
}

export default Comment;
