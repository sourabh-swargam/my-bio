import React from "react";
import { ReactComponent as UnityLogo } from "./unity.svg";
import { ReactComponent as ReactLogo } from "./react.svg";
import { ReactComponent as PythonLogo } from "./python.svg";

const project_data = [
	{
		id: 1,
		name: "Argon Assault",
		technology: ["Unity3D", "C#"],
		date: "2020 October - Present",
		role: "Developer",
		description: "TEXT",
		icon: <UnityLogo />,
		bgcolor: "",
		bgcolor: "#C0C0C0",
	},
	{
		id: 2,
		name: "Project Boost",
		technology: ["Unity3D", "C#"],
		date: "2020 August",
		role: "Developer",
		description: "TEXT",
		icon: <UnityLogo />,
		bgcolor: "#C0C0C0",
	},
	{
		id: 3,
		name: "Tile-Vania",
		technology: ["Unity2D", "C#"],
		date: "2020 July",
		role: "Developer",
		description: "TEXT",
		icon: <UnityLogo />,
		bgcolor: "#C0C0C0",
	},
	{
		id: 4,
		name: "Placement Prep Assistant",
		technology: ["ReactJS"],
		date: "2020 April - May",
		role: "Front-End Developer",
		description: "TEXT",
		icon: <ReactLogo />,
		bgcolor: "skyblue",
	},
	{
		id: 5,
		name: "Glitch Garden",
		technology: ["Unity2D", "C#"],
		date: "2019 November",
		role: "Developer",
		description: "TEXT",
		icon: <UnityLogo />,
		bgcolor: "#C0C0C0",
	},
	{
		id: 6,
		name: "Laser Defender",
		technology: ["Unity2D", "C#"],
		date: "2019 August",
		role: "Developer",
		description: "TEXT",
		icon: <UnityLogo />,
		bgcolor: "#C0C0C0",
	},
	{
		id: 7,
		name: "Virtual Keyboard using OpenCV",
		technology: ["Python", "OpenCV"],
		date: "2019 December - May",
		role: "Developer",
		description: "TEXT",
		icon: <PythonLogo />,
		bgcolor: "yellow",
	},
];

export default project_data;
