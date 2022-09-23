import React from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
	return (
		<div>
			<h1>Hello bienvenue, sur mon site</h1>
			<Link to="/contactez-nous" className="btn btn-primary">
				Contactez-nous
			</Link>
		</div>
	);
};
export default Accueil;
