import React, { useState, useEffect, useContext } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import axios from "axios";

import { UserContext } from "../context/UserContext";
import PostCarousel from "../components/PostCarousel";
import CommentsSection from "../components/CommentsSection";

function Post({ location }) {
	const { setLoading, user, jwtToken } = useContext(UserContext);
	const [post, setPost] = useState(location.data);
	const [ratingValue, setRatingValue] = useState(0);
	const [didRatePost, setDidRatePost] = useState(false);
	const [updatePost, setUpdatePost] = useState(false);

	const submitRating = () => {
			setLoading(true);
			const rating = {
				post: post,
				rating: ratingValue,
			};
			axios
				.post(`${process.env.REACT_APP_BACKEND_SERVER_IP}/api/v1/post/rating`, rating, {
					headers: {
						"Allow-Origin": "*",
						"Content-type": "application/json",
						Authorization: jwtToken,
					},
				})
				.then((response) => {
					if (response.status === 201) {
						setUpdatePost(!updatePost);
					}
				})
				.catch((err) => err);

				setTimeout(() => {
				setLoading(false);
			}, 800);
	}

	const checkIfUserRatedPost = (post) => {
		post.ratings.map(rating => {
			if (user.firstName == rating.author.firstName){
				setDidRatePost(true);
			}
		});
	}

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`${process.env.REACT_APP_BACKEND_SERVER_IP}/api/v1/post/id=${location.pathname.slice(23)}`
			)
			.then((response) => {
				setPost(response.data);
				checkIfUserRatedPost(response.data);
			})
			.catch((err) => err);
		setTimeout(() => {
			setLoading(false);
		}, 800);
	}, [updatePost]);

	if (post) {
		return (
			<div>
				<Grid
					container
					justifyContent="center"
					sx={{
						mt: {
							lg: 1,
						},
					}}
				>
					<Grid
						item
						xs={12}
						lg={10}
						xl={7}
						sx={{ borderRadius: 1, backgroundColor: "rgb(244, 244, 244)" }}
					>
						<PostCarousel imgList={post.imageList} />
						<Stack
							direction="row"
							justifyContent="space-between"
							mb={5}
							mt={{ xs: 1, lg: 1, xl: 3 }}
							mx={2}
						>
							<Box sx={{ width: "80%" }}>
								<Typography variant="h4" gutterBottom component="h4">
									{post.title}
								</Typography>
								<Typography variant="subtitle1" gutterBottom component="div">
									{post.description}
								</Typography>
							</Box>
							<Box
								sx={{
									border: 1,
									borderColor: "grey.500",
									boxShadow: 2,
									borderRadius: 1,
									p: 1,
								}}
							>
								<Box sx={{ textAlign: "center" }}>
									<Typography
										sx={{ display: "inline-block" }}
										variant="h4"
										component="h4"
									>
										{post.rating}
									</Typography>
									<Typography
										sx={{ display: "inline-block" }}
										variant="subtitle1"
									>
										/5
									</Typography>
								</Box>
								<Rating
									precision={0.5}
									name="read-only"
									value={post.rating}
									readOnly
								/>
								{user !== null &&
									(didRatePost ? (
										<Typography variant="overline" display="block" textAlign="center" gutterBottom>
											Already Rated
										</Typography>
									) : (
										<div>
											<Box mt={2}>
												<Rating
													sx={{ display: "block" }}
													name="simple-controlled"
													value={ratingValue}
													onChange={(event, newValue) => {
														setRatingValue(newValue);
													}}
												/>

												<Button
													onClick={submitRating}
													disabled={ratingValue === 0 || ratingValue === null}
													color="error"
													variant="contained"
													size="small"
												>
													Rate This Post
												</Button>
											</Box>
										</div>
									))}
							</Box>
						</Stack>
						<Divider />
						<Box>
							<CommentsSection post={post} comments={post.comments} />
						</Box>
					</Grid>
				</Grid>
			</div>
		);
	}
	return null;
}

export default Post;
