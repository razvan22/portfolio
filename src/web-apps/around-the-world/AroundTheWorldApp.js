import React from "react";

import AppRouter from "./AppRouter";
import UserContextProvider from "./context/UserContext";
import Navbar from './components/Navbar';


function AroundTheWorldApp() {
	return (
		<UserContextProvider>
		<Navbar/>
			<AppRouter />
		</UserContextProvider>
	);
}

export default AroundTheWorldApp;
