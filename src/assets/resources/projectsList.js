import reactIcon from "../images/react.ico"
import vueIcon from "../images/vue.png"
import expressIcon from "../images/express.png"
import springIcon from "../images/spring-boot.png"

import colorsPalettes from "../images/reactColors.png"
import lightsOut from "../images/lights-out.png"
import aroundTheWorld from "../images/aroundTheWorld.png"
import nordana from "../images/nordana.png"



const projectsMetadata = [
	{
		name: "Around The World",
		icon: springIcon,
		type: "Spring & React",
		shortDescription:
			"A web application were you can share your journey around the world.",
		description: "",
		path: "/around-the-world",
		fullDescriptionPath: "/",
		imgSrc: aroundTheWorld,
	},
	{
		name: "React Color Palettes",
		icon: reactIcon,
		type: "React Class",
		shortDescription:
			"This is a color picker react class based application .... ",
		description: "",
		path: "/color-palettes",
		fullDescriptionPath: "/",
		imgSrc: colorsPalettes,
	},
	{
		name: "Lights Out ",
		icon: reactIcon,
		type: "React",
		shortDescription: "Require description ....",
		description: "",
		path: "/games/lights-out",
		fullDescriptionPath: "/",
		imgSrc: lightsOut,
	},
	{
		name: "Nordana Gard",
		icon: vueIcon,
		type: "Vue.js",
		shortDescription: "Require description ....",
		description: "",
		path: "nordana",
		fullDescriptionPath: "/",
		imgSrc: nordana,
	},
	// {
	// 	name: "Munchies Burgers",
	// 	icon: expressIcon,
	// 	type: "Express",
	// 	shortDescription: "Require description ....",
	// 	description: "",
	// 	path: "/colorPicker",
	// 	fullDescriptionPath: "/",
	// },
];

export default projectsMetadata;