import React,{useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";

import { listStyles } from "../styles/postListStyles";
import PostFilter from "./PostFilter";
import PostCard from "../components/PostCard";

function PostList() {
	const classes = listStyles();
  const [postsObj, setPostsObj] = useState([]);


  useEffect( ()=> {
    axios
			.get("http://localhost:8080/api/v1/post")
			.then((response) =>  setPostsObj(response.data))
			.catch(function (error) {
				console.log(error);
			});
  },[]);

	return (
		<Box className={classes.listBox}>
			<Grid container justifyContent="center">
				<Grid
					sx={{ boxShadow: 3 }}
					className={classes.itemContainer}
					item
					xs={12}
					md={8}
					lg={5}
				>
					<PostFilter />
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
					></Grid>
				</Grid>
			</Grid>
			{postsObj.length > 0 ? ( postsObj.map((obj) => <PostCard postObject={obj} />)) : 'No posts' }
		</Box>
	);
}

export default PostList;
