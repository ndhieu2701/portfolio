import { useSelector } from "react-redux";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Toast from "./components/toast";

function App() {
  const theme = useSelector((state) => state.themes.themes);
  return (
    <div className="App">
      <Header />
      <div className={`container ${theme}`}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
