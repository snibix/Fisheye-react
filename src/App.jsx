import AOS from "aos";
import "aos/dist/aos.css"; // Importer le CSS d'AOS
import "font-awesome/css/font-awesome.min.css";
import { useEffect } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import DetailsPhotograph from "./pages/DetailsPhotograph";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/photographer/:id" element={<DetailsPhotograph />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
