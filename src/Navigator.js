import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigator() {
	return (
		<Navbar bg="light" variant="light">
			<Navbar.Brand href="#home">Logo</Navbar.Brand>
			<Nav className="ml-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#aboutme">About Me</Nav.Link>
				<Nav.Link href="#projects">Projects</Nav.Link>
				<Nav.Link href="#education">Education</Nav.Link>
				<Nav.Link href="#blog">Blog</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default Navigator;
