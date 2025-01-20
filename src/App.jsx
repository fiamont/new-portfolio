import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Observera att vi nu använder Routes
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {" "}
          {/* Byt ut Switch mot Routes */}
          <Route path="/" element={<Home />} />{" "}
          {/* Använd element istället för component */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
