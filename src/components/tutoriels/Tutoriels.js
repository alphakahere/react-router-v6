import React from "react";
import { Outlet } from "react-router-dom";
const Tutoriels = () => {
	return (
		<div className="px-4">
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Tutoriels;
