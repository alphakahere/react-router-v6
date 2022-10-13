import React from "react";
import { Link } from "react-router-dom";

const TutorielItem = ({ id, title, body }) => {
	return (
		<div className="col-md-6 col-xl-4 mb-4">
			<div className="card">
				<img
					src={`https://picsum.photos/20${id}`}
					className="card-img-top"
					alt={title}
					style={{ height: "25vh" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{title.slice(0, 30)}</h5>
					<p className="card-text">{body.slice(0, 100)}</p>
					<Link to={`/tutoriels/${id}`} className="btn btn-primary">
						Detail
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TutorielItem;
