import "./index.css"
import Header from './components/Header/Header/Header';
import AboutMe from './components/Header/About-Me/AboutMe';
import Resume from './components/Header/Resume/Resume';
import Skills from './components/Header/Skills/Skills';
import Projects from "./components/Header/Projects/Projects";
import Blogs from "./components/Header/Blogs/Blogs";
import Achievements from "./components/Header/Achievements/Achievements";
import Contact from "./components/Header/Contact-Me/Contact";
import Footer from "./components/Header/Footer/Footer";

function App() {
  return (
    <div className="App xl:w-full 2xl:w-[80%] 3xl:w-[80%] 2xl:mx-auto 3xl:mx-auto">
      <Header></Header>
      <AboutMe></AboutMe>
      <Resume></Resume>
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
