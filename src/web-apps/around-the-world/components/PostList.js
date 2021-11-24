import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Alert from "@mui/material/Alert";
import MoodBadIcon from "@mui/icons-material/MoodBad";

import { listStyles } from "../styles/postListStyles";
import PostFilter from "./PostFilter";
import PostCard from "../components/PostCard";
import { UserContext } from "../context/UserContext";

function PostList() {
	const classes = listStyles();
  const [postsObj, setPostsObj] = useState([]);
	const [continent, setContinent] = useState('')
	const { setLoading } = useContext(UserContext);

	const findAllByContinentName = (continent) => {
		setContinent(continent)
		axios
			.get(
				`http://192.168.8.102:8080/api/v1/post/continent/name=${continent}`
			)
			.then((response) => setPostsObj(response.data))
			.catch((err) => err);
			setLoading(false);
			return () => {
				setLoading(true);
			};
	}

	const getAllWereTitleStartsWith = (title) => {
		axios
			.get(`http://192.168.8.102:8080/api/v1/post/title=${title}`)
			.then((response) => setPostsObj(response.data))
			.catch((err) => err);
		setLoading(false);
		return () => {
			setLoading(true);
		};
	}


	const filterByCountry = (country) => {
		axios
			.get(
				`http://192.168.8.102:8080/api/v1/post/continent/name=${continent}`
			)
		.then((response) =>
				setPostsObj(
					response.data.filter((post) => post.location.country === country)
				)
			)
		.catch((err) => err);
		setLoading(false);
		return () => {
			setLoading(true);
		};
	}

  useEffect( () => {
			axios
				.get("http://192.168.8.102:8080/api/v1/post")
				.then((response) => setPostsObj(response.data))
				.catch((err) => err);
			setLoading(false);
			return () => {
				setLoading(true);
			}
  },[]);

	return (
		<Box className={classes.listBox}>
			<Grid container justifyContent="center">
				<Grid
					sx={{ boxShadow: 3 }}
					className={classes.itemContainer}
					item
					xs={12}
					md={7}
					xl={5}
				>
					<PostFilter
						getAllWereTitleStartsWith={getAllWereTitleStartsWith}
						filterByCountry={filterByCountry}
						fetchPostsByContinent={findAllByContinentName}
					/>
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
					></Grid>
				</Grid>
			</Grid>
			{postsObj.length > 0 ? (
				postsObj.map((obj) => <PostCard postObject={obj} key={obj.id} />)
			) : (
				<Box sx={{ width: 300, height: 300, m: 4 }}>
					<Alert severity="warning" icon={<MoodBadIcon />}>
						Nothing related !
					</Alert>
				</Box>
			)}
		</Box>
	);
}

export default PostList;
