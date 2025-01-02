import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./navbar/header";
import Footer from "./footer/footer";
import Home from "./layout/hero";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Therapists from "./pages/Therapists";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/therapists" element={<Therapists />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
