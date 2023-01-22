import React from "react";
import { Outlet } from "react-router-dom";

const Tutoriels = () => {
	return (
		<div>
			<div className="outlet-container">
				<Outlet context={{ message: "hello, voici ta donnée partagée" }} />
			</div>
		</div>
	);
};

export default Tutoriels;
