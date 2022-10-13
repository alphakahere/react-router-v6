import React from "react";
import { Outlet } from "react-router-dom";
const Tutoriels = () => {
	return (
		<div className="px-4">
			<h1>Mes Tutoriels</h1>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Tutoriels;
