import React from "react";
import { Badge, Button } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as ReactLogo } from "./unity.svg";

const data = ["", "", "", "", "", "", ""];

function ProjectElement(props) {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			iconStyle={{
				background: "gray",
				color: "#fff",
			}}
			icon={<ReactLogo />}
			date="2011 - present"
			contentStyle={{
				background: "rgb(33, 150, 243)",
				color: "red",
			}}
			contentArrowStyle={{
				borderRight: "7px solid  rgb(33, 150, 243)",
			}}
		>
			<h3 className="vertical-timeline-element-title">Argon Assault</h3>
			<h4 className="vertical-timeline-element-subtitle">
				<Badge pill variant="secondary">
					Unity3D
				</Badge>{" "}
				<Badge pill variant="secondary">
					C#
				</Badge>{" "}
			</h4>
			<p>ROLE</p>
			<p>SHORT DESCRIPTION</p>
			<Button variant="dark">KNOW MORE</Button>
		</VerticalTimelineElement>
	);
}

class ProjectPage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const projectComponents = data.map((each) => {
			return <ProjectElement />;
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
