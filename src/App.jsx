import { useSelector } from "react-redux";
import "./App.css";
import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  const theme = useSelector((state) => state.themes.themes);
  return (
    <div className="App">
      <Header />
      <div className={`container ${theme}`}>
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
