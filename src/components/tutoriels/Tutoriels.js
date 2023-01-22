import React from "react";
import { Outlet } from "react-router-dom";

const Tutoriels = () => {
	return (
		<div>
			<div className="outlet-container">
				<Outlet />
			</div>
		</div>
	);
};

export default Tutoriels;
