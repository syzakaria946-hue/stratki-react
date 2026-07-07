import Home from "./page/homePage";
import About from "./page/aboutPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./page/Service";
import Portfolio from "./page/portfolioPage";
import Team from "./page/teamPage";
import Pricing from "./page/pricingPage";
import Contact from "./page/contactPage";
import Navbar from "./components/navbar";


 export default function  App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>   
    </BrowserRouter>
  );
}

