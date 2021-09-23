import React from "react";
import HomePage from "./pages/HomePage";
import ProjectsMetadataProvider from "./assets/contexts/projectsListContext";

import "./App.css";

function App() {
	return (
		<ProjectsMetadataProvider>
			<HomePage />
		</ProjectsMetadataProvider>
	);
}

export default App;
