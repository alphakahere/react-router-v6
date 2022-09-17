import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light mb-4">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					React Router V6
				</Link>
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
							<Link className="nav-link" to="/">
								Accueil
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/tutoriels">
								Tutoriels
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/a-propos">
								A propos
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
