import "./index.css"
import Header from './components/Header/Header/Header';
import AboutMe from './components/Header/About-Me/AboutMe';
import Resume from './components/Header/Resume/Resume';
import Services from './components/Header/Services/Services';
import Skills from './components/Header/Skills/Skills';
import Projects from "./components/Header/Projects/Projects";
import Blogs from "./components/Header/Blogs/Blogs";
import Achievements from "./components/Header/Achievements/Achievements";
import Contact from "./components/Header/Contact-Me/Contact";
import Footer from "./components/Header/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Services></Services>
      <Skills></Skills>
      <Projects></Projects>
      <Blogs></Blogs>
      <Achievements></Achievements>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
