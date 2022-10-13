import React from "react";
import { useParams } from "react-router-dom";

const DetailTutoriel = () => {
	const params = useParams();
	// const { tutorielId } = useParams();
	// console.log({ tutorielId });
	return (
		<div>
			<h1>Detail Tutoriel {params?.tutorielId}</h1>
		</div>
	);
};

export default DetailTutoriel;
