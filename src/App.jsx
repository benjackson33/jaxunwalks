import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enquiries from "./pages/Enquiries";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiries" element={<Enquiries />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
