import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import Tutoriels from "./components/tutoriels/Tutoriels";
import AjouterUnTutoriel from "./components/tutoriels/AjouterUnTutoriel";
import DetailTutoriel from "./components/tutoriels/DetailTutoriel";
import ListesDesTutoriels from "./components/tutoriels/ListesDesTutoriels";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Accueil />} />
				<Route path="tutoriels" element={<Tutoriels />}>
					<Route index element={<ListesDesTutoriels />} />
					<Route path=":tutorielId" element={<DetailTutoriel />} />
					<Route path="ajouter" element={<AjouterUnTutoriel />} />
				</Route>
				<Route path="a-propos" element={<Apropos />} />
				<Route path="contactez-nous" element={<Contact />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</div>
	);
}

export default App;