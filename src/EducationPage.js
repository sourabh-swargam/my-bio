import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import education_data from "./education-data/education-info.js";

function EducationElement(props) {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			iconStyle={{
				background: "white",
				color: "#fff",
			}}
			icon={props.item.icon}
			date={props.item.date}
			contentStyle={{
				background: "white",
				color: "red",
			}}
			contentArrowStyle={{
				borderRight: `7px solid white`,
			}}
		>
			<h3 className="vertical-timeline-element-title">
				{props.item.college}
			</h3>
			<h4 className="vertical-timeline-element-subtitle">
				{props.item.degree}
			</h4>
			<p>Aggregate: {props.item.agg}</p>
		</VerticalTimelineElement>
	);
}

class ProjectPage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const educationComponents = education_data.map((each) => {
			return <EducationElement key={each.id} item={each} />;
		});
		return (
			<div style={{ backgroundColor: "gray" }}>
				<VerticalTimeline>
					{educationComponents}
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
