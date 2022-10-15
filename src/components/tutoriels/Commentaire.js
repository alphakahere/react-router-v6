import React from "react";
import { Link } from "react-router-dom";

const Commentaire = () => {
	return (
		<div>
			<h1>Commentaire</h1>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="../..">Deux pas en arrière</Link>
					</li>
					<li className="breadcrumb-item" aria-current="page">
						<Link to="..">Un pas en arrière</Link>
					</li>
				</ol>
			</nav>
		</div>
	);
};

export default Commentaire;
