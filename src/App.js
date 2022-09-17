import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Navbar from "./components/Navbar";
import Tutoriels from "./components/Tutoriels";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<Accueil />} />
				<Route path="tutoriels" element={<Tutoriels />} />
				<Route path="a-propos" element={<Apropos />} />
			</Routes>
		</div>
	);
}

export default App;
