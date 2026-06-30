import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Service";
import Portfolio from "./page/Portfolio";
import Team from "./page/Team";
import Pricing from "./page/Pricing";
import Contact from "./page/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;