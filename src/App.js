import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Inavbar from "./components/navbar/Inavbar";
import {
  // BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact/Contact";
import Skills from "./components/skills/Skills";
import Publication from "./components/Publication/Publication";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Certificate from "./components/certificates/Certificate";
import Project from "./components/project/Project";

function App() {
  return (
    <div > 
      {/* <Inavbar />
      <Intro />
      <About /> */}
<Inavbar/>
      {/* <Home/> */}
      <Routes>
      <Route path="/"
          element={<Home />} />
        <Route path="/intro"
          element={<Intro />} />

        <Route path="/about"
          element={<About />} />
        <Route path="/skills"
          element={<Skills />} />
          <Route path="/experience"
          element={<Experience />} />
          <Route path="/education"
          element={<Education />} />
          <Route path="/publication"
          element={<Publication />} />
          <Route path="/certificate"
          element={<Certificate />} />
          <Route path="/project"
          element={<Project />} />

        <Route path="/contact"
          element={<Contact />} />
        

      </Routes>
    
    </div>
  );
}

export default App;
