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
	const [continent, setContinent] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { setLoading } = useContext(UserContext);

	const setResultMessage= () => {
	
		if(postsObj.length >= 0){
			setErrorMessage("Nothing related !");
		}
	}

	const findAllByContinentName = (continent) => {
		setContinent(continent)
		setLoading(true);
		axios
			.get(
				`${process.env.REACT_APP_BACKEND_SERVER_IP}/api/v1/post/continent/name=${continent}`
			)
			.then((response) => {
				setPostsObj(response.data)
				setResultMessage();
			})
			.catch((err) => err);
			setTimeout(() => {
				setLoading(false);
			}, 800);
	}

	const getAllWereTitleStartsWith = (title) => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_SERVER_IP}/api/v1/post/title=${title}`)
			.then((response) => {
				setPostsObj(response.data);
				setResultMessage();
			})
			.catch((err) => err);
		setTimeout(() => {
			setLoading(false);
		}, 800);
	}


	const filterByCountry = (country) => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_BACKEND_SERVER_IP}/api/v1/post/continent/name=${continent}`)
			.then((response) => {
				setPostsObj(
					response.data.filter((post) => post.location.country === country)
				);
				setResultMessage();
			})
			.catch((err) => err);
		setTimeout(() => {
			setLoading(false);
		}, 800);
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_BACKEND_SERVER_IP}/api/v1/post`)
			.then((response) => {
				setPostsObj(response.data)
				setResultMessage();
			})
			.catch((err) => {
				if(err.message.toLowerCase() === "network error" ){
					setErrorMessage("Server seems to be down.");
				}
			});
		setTimeout(() => {
			setLoading(false);
		}, 800);
	}, []);

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
						{errorMessage}
					</Alert>
				</Box>
			)}
		</Box>
	);
}

export default PostList;
