// import React from "react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import TutorielItem from "./TutorielItem";

// const ListesDesTutoriels = () => {
// 	const [posts, setPosts] = useState([]);
// 	useEffect(() => {
// 		fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setPosts(data);
// 			})
// 			.catch((err) => {
// 				console.log(err.message);
// 			});
// 	}, []);
// 	return (
// 		<div className="px-4">
// 			<div className="d-flex justify-content-between align-items-center mb-3">
// 				<h1>Mes Tutoriels</h1>
// 				<Link to="/tutoriels/ajouter" className="btn btn-dark py-3">
// 					Ajouter un tutoriel
// 				</Link>
// 			</div>
// 			<div className="row">
// 				{posts?.map((post) => (
// 					<TutorielItem key={post.id} />
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default ListesDesTutoriels;
import React from "react";

const ListesDesTutoriels = () => {
	return (
		<div>
			<h1>Listes Des Tutoriels</h1>
		</div>
	);
};

export default ListesDesTutoriels;
