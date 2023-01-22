import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const DetailTutoriel = () => {
	const params = useParams();
	const context = useOutletContext();
	console.log({ context });
	return (
		<div>
			<h1>Detail Tutoriel {params?.tutorielId}</h1>
		</div>
	);
};

export default DetailTutoriel;