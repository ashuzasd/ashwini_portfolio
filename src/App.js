import Landing from "./components/Landing/Landing";
import ProjectList from "./components/ProjectList/ProjectList";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Social from "./components/Social/Social";
import Navbar from "./components/NavBar/NavBar";
import { useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Skills from "./components/skills";
import Experince from './components/Experience/index'

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Social />
          <Landing />
          <Skills/>
          <Experince/>
          <ProjectList />
          <About />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
