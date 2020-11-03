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
		description:
			"A rail shooter game where the player controls a spaceship. The player needs to dodge the enemies and enemy projectiles and navigate around terrain obstacles and achieve high score.",
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
		description:
			"A 3D prototype game, where the player controls and rocket and needs to avoid crashing the rocket and land safely on the landing pad in order to progress through the game.",
		icon: <UnityLogo />,
		bgcolor: "#C0C0C0",
	},
	{
		id: 3,
		name: "Tile-Vania",
		technology: ["Unity2D", "C#"],
		date: "2020 July",
		role: "Developer",
		description:
			"2D platformer prototype where the player controls an adventurer has to travel into the dungeon avoiding hazards and monsters.",
		icon: <UnityLogo />,
		bgcolor: "#C0C0C0",
	},
	{
		id: 4,
		name: "Placement Prep Assistant",
		technology: ["ReactJS"],
		date: "2020 April - May",
		role: "Front-End Developer",
		description:
			"A web app that lets the user pick a dream job and then create a strategy for that dream job while providing deadlines for created tasks.",
		icon: <ReactLogo />,
		bgcolor: "skyblue",
	},
	{
		id: 5,
		name: "Glitch Garden",
		technology: ["Unity2D", "C#"],
		date: "2019 November",
		role: "Developer",
		description:
			"A 2D strategy game where the user has to manage resources, buy weapons and protect the garden from feral foxes and other monsters.",
		icon: <UnityLogo />,
		bgcolor: "#C0C0C0",
	},
	{
		id: 6,
		name: "Laser Defender",
		technology: ["Unity2D", "C#"],
		date: "2019 August",
		role: "Developer",
		description:
			"A bullet hell 2D prototype, where the player has to dodge enemies and their lasers while surviving for as long as possible.",
		icon: <UnityLogo />,
		bgcolor: "#C0C0C0",
	},
	{
		id: 7,
		name: "Virtual Keyboard using OpenCV",
		technology: ["Python", "OpenCV"],
		date: "2019 December - May",
		role: "Developer",
		description:
			"Allows the users to type text onto a notepad app using a keyboard interface. A webcam tracks the users finger and translates it to keystrokes.",
		icon: <PythonLogo />,
		bgcolor: "yellow",
	},
];

export default project_data;
