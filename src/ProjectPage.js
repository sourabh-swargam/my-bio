import React from "react";
import { Badge, Button } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import project_data from "./project-data/project-info.js";

function ProjectElement(props) {
	const pills = props.project.technology.map((each) => {
		return (
			<span>
				<Badge pill variant="secondary">
					{each}
				</Badge>{" "}
			</span>
		);
	});
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			iconStyle={{
				background: props.project.bgcolor,
				color: "#fff",
			}}
			icon={props.project.icon}
			date={props.project.date}
			contentStyle={{
				background: props.project.bgcolor,
				color: "red",
			}}
			contentArrowStyle={{
				borderRight: `7px solid  ${props.project.bgcolor}`,
			}}
		>
			<h3 className="vertical-timeline-element-title">
				{props.project.name}
			</h3>
			<h4 className="vertical-timeline-element-subtitle">{pills}</h4>
			<p>{props.project.role}</p>
			<p style={{ textAlign: "justify" }}>{props.project.description}</p>
			<p>
				<Button variant="dark">KNOW MORE</Button>
			</p>
		</VerticalTimelineElement>
	);
}

class ProjectPage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const projectComponents = project_data.map((each) => {
			return <ProjectElement key={each.id} project={each} />;
		});
		return (
			<div style={{ backgroundColor: "gray" }}>
				<VerticalTimeline>
					{projectComponents}
					<VerticalTimelineElement
						iconStyle={{
							background: "rgb(16, 204, 82)",
							color: "#fff",
						}}
					/>
				</VerticalTimeline>
			</div>
		);
	}
}

export default ProjectPage;
