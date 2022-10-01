import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const activeLinkStyle = ({ isActive }) => {
		return {
			color: isActive && "red",
		};
	};
	return (
		<nav className="navbar navbar-expand-lg bg-light mb-4">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					React Router V6
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/"
								style={activeLinkStyle}
							>
								Accueil
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/tutoriels"
								style={activeLinkStyle}
							>
								Tutoriels
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/a-propos"
								style={activeLinkStyle}
							>
								A propos
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
