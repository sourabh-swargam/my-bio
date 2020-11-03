import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import ProjectPage from "./ProjectPage";
import EducationPage from "./EducationPage";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";

function App() {
	return (
		<div>
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="/my-bio/">Logo</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link>
						<Link to="/my-bio/">Home</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/about">About Me</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/projects">Projects</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/education">Education</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/blog">Blog</Link>
					</Nav.Link>
				</Nav>
			</Navbar>

			<Route exact path="/my-bio/">
				<Home />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/projects">
				<ProjectPage />
			</Route>
			<Route path="/education">
				<EducationPage />
			</Route>
			<Route path="/blog">
				<Blog />
			</Route>
		</div>
	);
}

export default App;
