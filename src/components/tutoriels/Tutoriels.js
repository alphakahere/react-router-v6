import React from "react";
import { Outlet } from "react-router-dom";

const Tutoriels = () => {
	return (
		<div>
			<h1>Mes Tutoriels</h1>
			<div className="outlet-container">
				<Outlet />
			</div>
		</div>
	);
};

export default Tutoriels;
