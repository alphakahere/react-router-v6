import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListesDesTutoriels = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
	return (
		<div className="px-4">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h1>Mes Tutoriels</h1>
				<Link to="/tutoriels/ajouter" className="btn btn-dark">
					Ajouter un tutoriel
				</Link>
			</div>
			<div className="row">
				{posts?.map((post) => (
					<div className="col-md-6 col-xl-4 mb-4" key={post.id}>
						<div className="card">
							<img
								src={`https://picsum.photos/20${post.id}`}
								className="card-img-top"
								alt={post.title}
								style={{ height: "30vh" }}
							/>
							<div className="card-body">
								<h5 className="card-title">
									{post.title?.slice(0, 50)}
								</h5>
								<p className="card-text">
									{post.body.slice(0, 100)}
								</p>
								<Link
									to={`/tutoriels/${post.id}`}
									className="btn btn-dark"
								>
									Detail
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListesDesTutoriels;