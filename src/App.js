import "./App.css";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import NotFound from "./components/notFound/not-found.component";
import CargaMental from "./components/courses/cargamental";
import About from "./components/about/about";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import Courses from "./components/courses/courses";
import AdvocaciaFeminista from "./components/courses/advocaciafeminista";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cargamental" element={<CargaMental />} />
        <Route path="/advocaciafeminista" element={<AdvocaciaFeminista />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/quemsomos" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/cursos" element={<Courses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
