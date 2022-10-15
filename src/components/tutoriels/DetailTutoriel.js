import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const DetailTutoriel = () => {
	const { tutorielId } = useParams();
	// console.log({ tutorielId });
	return (
		<div>
			<h1>Detail Tutoriel {tutorielId}</h1>
			<div className="my-3">
				<Link to={`/tutoriels/${tutorielId}/commentaires`}>Commentaires</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default DetailTutoriel;
