import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { deepOrange } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocationOn from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

import styles from "../styles/postCardStyles";

function PostCard(props) {
	const classes = styles();
	const { postObject } = props;
	const { title, imageList, author, location, description, postDate, comments } =
		postObject;

	return (
		<Box
			className={classes.cadBox}
			sx={{
				borderRadius: 1,
				height: 650,
				boxShadow: 1,
				bgcolor: "background.paper",
				borderColor: "grey.500",
				my: 3,
			}}
		>
			<Avatar
				className={classes.ratingAvatar}
				sx={{ bgcolor: deepOrange[500] }}
			>
				N
			</Avatar>
			<img
				src={`${process.env.REACT_APP_BACKEND_SERVER_IP}${imageList[0].url}`}
				alt=""
				className={classes.img}
			/>
			<Box px={2}>
				<Stack
					direction="row"
					justifyContent="flex-end"
					alignItems="center"
					p={0}
				>
					<Chip
						sx={{ backgroundColor: "white", right: "1rem" }}
						icon={<PersonIcon fontSize="small" />}
						label={`${author.firstName} - ${postDate.replaceAll("-", "/")}`}
					/>
				</Stack>

				<Link
					className="post-link"
					to={{
						pathname: `/post/${postObject.id}`,
						data: postObject,
					}}
				>
					<Typography
						fontWeight={300}
						className={classes.title}
						variant="h5"
						component="h5"
					>
						{title}
					</Typography>
				</Link>
				<Box
					fontSize={14}
					color={deepOrange[300]}
					display={"flex"}
					alignItems={"center"}
					mt={1}
				>
					<LocationOn fontSize="small" className={styles.locationIcon} />
					<span>{location.country}</span>
				</Box>
				<Typography noWrap mt={1} gutterBottom variant={"body2"}>
					{description}
				</Typography>
				<Typography
					mr={2}
					align="right"
					color={"textSecondary"}
					variant="caption"
					display="block"
					gutterBottom
				>
					<ModeCommentIcon fontSize="small" sx={{ mr: 1 }} />{" "}
					{` ${comments.length}`}
				</Typography>
			</Box>
		</Box>
	);
}

export default PostCard;
