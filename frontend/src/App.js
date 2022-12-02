import MainHeader from "./Components/MainHeader";
import Footer from "./Components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import ProjectDetail from "./Pages/ProjectDetail";

const App = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
