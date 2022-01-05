import React, {useContext} from 'react'

import PostList from '../components/PostList';
import aroundTheWorldStyles from '../styles/aroundTheWorldStyles';
import {UserContext} from '../context/UserContext';

function HomePage() {
 	const classes = aroundTheWorldStyles();
	const { loading } = useContext(UserContext);

	return (
		<div>
			<div className={classes.cover}></div>
			<PostList />
		</div>
	);
}


export default HomePage
