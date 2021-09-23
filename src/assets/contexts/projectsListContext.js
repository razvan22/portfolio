import { createContext } from "react";
import projectsMetadata from "../resources/projectsList";


export const ProjectsMetadataContext = createContext();

const ProjectsMetadataProvider = (props) => {
	return (
		<ProjectsMetadataContext.Provider value={{ projectsMetadata }}>
			{props.children}
		</ProjectsMetadataContext.Provider>
	);
};

export default ProjectsMetadataProvider;