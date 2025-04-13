import { NavBar } from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Languages } from "./components/Languages";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <br/>
      <br/>
      <br/>
      <Languages/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
