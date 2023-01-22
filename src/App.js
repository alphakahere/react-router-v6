import { createBrowserRouter, Outlet } from "react-router-dom";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import Tutoriels from "./components/tutoriels/Tutoriels";
import AjouterUnTutoriel from "./components/tutoriels/AjouterUnTutoriel";
import DetailTutoriel from "./components/tutoriels/DetailTutoriel";
import ListesDesTutoriels from "./components/tutoriels/ListesDesTutoriels";

function AppLayout() {
	return (
		<div className="app">
			<Navbar />
			<Outlet />
		</div>
	);
}

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				element: <Accueil />,
				index: true,
			},
			{
				path: "tutoriels",
				element: <Tutoriels />,
				children: [
					{
						element: <ListesDesTutoriels />,
						index: true,
					},
					{
						path: ":tutorielId",
						element: <DetailTutoriel />,
					},
					{
						path: "ajouter",
						element: <AjouterUnTutoriel />,
					},
				],
			},
			{
				path: "contactez-nous",
				element: <Contact />,
			},
			{
				path: "a-propos",
				element: <Apropos />,
			},
		],
		errorElement: <Page404 />,
	},
]);
