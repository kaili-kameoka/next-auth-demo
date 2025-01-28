'use client'
import React from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";

function MainNav() {
	return (
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/">NextJS Auth Demo</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/sign-up">Sign Up</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
	);
}

export default MainNav;