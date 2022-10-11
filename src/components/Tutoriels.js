import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Tutoriels = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
			});
	}, []);
	return (
		<div className="px-4">
			<h1>Mes Tutoriels</h1>
			<div className="row">
				{posts?.map((post) => (
					<div className="col-md-4 mb-4" key={post.id}>
						<div className="card">
							<img
								src={`https://picsum.photos/20${post.id}`}
								className="card-img-top"
								alt={post.title}
								style={{ height: "25vh" }}
							/>
							<div className="card-body">
								<h5 className="card-title">
									{post.title.slice(0, 30)}
								</h5>
								<p className="card-text">
									{post.body.slice(0, 100)}
								</p>
								<Link to="" className="btn btn-primary">
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

export default Tutoriels;
