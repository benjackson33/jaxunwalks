import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Enquiries from "./pages/Enquiries";
import Contact2 from "./pages/Contact2";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dog-walking-services" element={<Services />} />
          <Route path="/about-jaxun" element={<About />} />
          <Route path="/contact" element={<Contact2 />} />
          <Route path="/enquiries" element={<Enquiries />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
