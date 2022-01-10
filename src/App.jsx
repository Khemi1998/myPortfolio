import "./App.scss";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div className="portfolio">
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
