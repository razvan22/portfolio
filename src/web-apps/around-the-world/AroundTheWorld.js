import React, { useContext, useEffect } from "react";

import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import aroundTheWorldStyles from "./styles/aroundTheWorldStyles";
import { UserContext } from "./context/UserContext";

function AroundTheWorld() {
	const classes = aroundTheWorldStyles();
	const { loading } = useContext(UserContext);

	return (
		<div>
			<Navbar search={false} />
			<div className={classes.cover}></div>
			<PostList />
		</div>
	);
}

export default AroundTheWorld;
