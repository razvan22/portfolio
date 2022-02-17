import React, {useContext} from 'react'

import PostList from '../components/PostList';
import aroundTheWorldStyles from '../styles/aroundTheWorldStyles';
import {UserContext} from '../context/UserContext';
import Typography from "@mui/material/Typography";

function HomePage() {
 	const classes = aroundTheWorldStyles();
	const { loading } = useContext(UserContext);

	return (
		<div>
			<div className={classes.cover}>
				<Typography
					align="center"
					fontWeight="500"
					letterSpacing={5}
					color="#f8f9fa"
					variant="h2"
					gutterBottom
					component="h2"
				>
					Travel The World !
				</Typography>
			</div>
			<PostList />
		</div>
	);
}


export default HomePage
