import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpUser from "./pages/SignUpUser";
import PostForm from "./pages/PostForm";
import AroundTheWorld from "./AroundTheWorld";
import UserContextProvider from "./context/UserContext";
import Post from './pages/Post';

function AroundTheWorldApp() {
	return (
		<UserContextProvider>
			<Switch>
				<Route
					exact
					path="/around-the-world"
					component={AroundTheWorld}
				></Route>
				<Route
					exact
					path="/around-the-world/login"
					component={LoginPage}
				></Route>
				<Route
					exact
					path="/around-the-world/signup"
					component={SignUpUser}
				></Route>
				<Route
					exact
					path="/around-the-world/newpost"
					component={PostForm}
				></Route>
				<Route exact path="/post/:id" component={Post} ></Route>
			</Switch>
		</UserContextProvider>
	);
}

export default AroundTheWorldApp;
