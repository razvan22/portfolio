import React from "react";
import { Route, Switch } from "react-router-dom";

import AroundTheWorld from "./AroundTheWorld";
import LoginPage from "./pages/LoginPage";
import SignUpUser from "./pages/SignUpUser";
import UserContextProvider from "./context/UserContext";

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
			</Switch>
		</UserContextProvider>
	);
}

export default AroundTheWorldApp;
