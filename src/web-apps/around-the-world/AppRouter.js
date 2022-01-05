import React, {useContext, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpUser from "./pages/SignUpUser";
import PostForm from "./pages/PostForm";
import HomePage from './pages/HomePage';
import Post from "./pages/Post";
import FetchUser from "./customHooks/fetchUser";
import {UserContext} from "./context/UserContext";


function AppRouter() {
	const { jwtToken, user, setUser, loading } = useContext(UserContext);
  useEffect(() => {
    async function fetchData() {
      let user = await FetchUser(jwtToken);
      setUser(user);
    }
    fetchData();
  }, [jwtToken, setUser]);

  return (
		<Switch>
			{user == null ? (
				<>
					<Route exact path="/around-the-world" component={HomePage}></Route>
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
						path="/around-the-world/post/:id"
						component={Post}
					></Route>
				</>
			) : (
				<>
					<Route exact path="/around-the-world" component={HomePage}></Route>
					<Route
						exact
						path="/around-the-world/post/:id"
						component={Post}
					></Route>
					<Route
						exact
						path="/around-the-world/newpost"
						component={PostForm}
					></Route>
				</>
			)}
		</Switch>
	);
}

export default AppRouter
