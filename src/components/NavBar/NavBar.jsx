import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<Navbar
			expand="lg"
			className="py-4 bg-body-navy fixed-top z-2"
			id="NavBar">
			<Container>
				<Link to={""} className="text-decoration-none text-white h1 ">
					Start Framework
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto gap-4">
						<NavLink
							className={
								"text-decoration-none text-white h6 fw-bolder p-2 rounded-2 mt-3 mt-lg-0"
							}
							to={"about"}>
							ABOUT
						</NavLink>
						<NavLink
							className={
								"text-decoration-none text-white h6 fw-bolder p-2 rounded-2"
							}
							to={"portfolio"}>
							PORTFOLIO
						</NavLink>
						<NavLink
							className={
								"text-decoration-none text-white h6 fw-bolder p-2 rounded-2"
							}
							to={"contact"}>
							CONTACT
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
