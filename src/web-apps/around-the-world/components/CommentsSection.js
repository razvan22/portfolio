import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import axios from "axios";

import Comment from "../components/Comment";
import { UserContext } from "../context/UserContext";
import useInputState from "../customHooks/useInputState";

function CommentsSection({ comments, post }) {
	const [commentsList, setCommentsList] = useState(comments);
	const { user, jwtToken } = useContext(UserContext);
	const [ commentValue, setCommentValue, clearCommentValue ] = useInputState("");
	const [commentObject, setCommentObject] = useState({
		post: post,
		comment: "",
	});

	const handelCommentChange = (e) => {
		setCommentValue(e);
		setCommentObject({ ...commentObject, comment: commentValue });
	}

	const submitComment = (event) => {
		event.preventDefault();
		const comment = {
			id: "",
			authorName: "",
			commentDate: "",
			comment: commentValue,
			post: post,
		};

				axios
					.post("http://localhost:8080/api/v1/post/comment", comment, {
						headers: {
							"Allow-Origin": "*",
							"Content-type": "application/json",
							Authorization: jwtToken,
						},
					})
					.then((res) => {
						setCommentsList(res.data.reverse());
					})
					.catch((err) => {
						console.log(err);
					});
	};

	return (
		<Box my={4}>
			{user !== null && (
				<Stack mb={2} direction="row">
					<Box ml={1}>
						<Avatar sx={{ width: 50, height: 50, bgcolor: green[500] }}>
							RN
						</Avatar>
					</Box>
					<Box
						mx={1}
						component="form"
						onSubmit={submitComment}
						sx={{ width: "90%", display: "flex", flexDirection: "column" }}
					>
						<TextField
							value={commentValue}
							onChange={handelCommentChange}
							required
							fullWidth
							label="Add a comment..."
						/>
						<Button
							sx={{ mt: 1.5, width: "fit-content", alignSelf: "end" }}
							type="submit"
							variant="contained"
							size="small"
						>
							Comment
						</Button>
					</Box>
				</Stack>
			)}
			{commentsList.map((comment) => (
				<Comment comment={comment} />
			))}
		</Box>
	);
}

export default CommentsSection;
