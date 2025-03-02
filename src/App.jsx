import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import InEnglish from "./pages/InEnglish";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:projectId" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/inEnglish" element={<InEnglish />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
