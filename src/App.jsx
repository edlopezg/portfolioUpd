import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { MotionConfig } from "framer-motion";
import { SettingsProvider } from "./context/Settings";
import ScrollProgress from "./components/ScrollProgress";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SettingsProvider>
        <ScrollProgress />
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <Stats />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <ToastContainer theme="dark" />
      </SettingsProvider>
    </MotionConfig>
  );
}

export default App;
