import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import LightsOut from "./games/lights-out/LightsOut";
import ColorPalettes from "./web-apps/color-palettes/ColorPalettes";
import ProjectsMetadataProvider from "./assets/contexts/projectsListContext";
import AroundTheWorldApp from "./web-apps/around-the-world/AroundTheWorldApp";


import "./App.css";

function App() {
	return (
		<ProjectsMetadataProvider>
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/about" component={AboutMe}></Route>
				<Route exact path="/games/lights-out" component={LightsOut}></Route>
				<Route path="/color-palettes" component={ColorPalettes}></Route>
				<Route
					path="/around-the-world"
					component={AroundTheWorldApp}
				></Route>
			</Switch>
		</ProjectsMetadataProvider>
	);
}

export default App;
