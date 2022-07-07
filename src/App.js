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

<Route path="/contact"
          element={<Contact />} />
        

      </Routes>
    
    </div>
  );
}

export default App;
