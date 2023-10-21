import "./index.css"
import Header from './components/Header/Header';
import AboutMe from './components/About-Me/AboutMe';
import SoftSkills from "./components/SoftSkills/SoftSkills";
import Skills from './components/Skills/Skills';
import Projects from "./components/Projects/Projects";
// import Blogs from "./components/Blogs/Blogs";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact-Me/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App xl:w-full 2xl:w-[80%] 3xl:w-[80%] 2xl:mx-auto 3xl:mx-auto" data-aos="fade-down" data-aos-delay="800" data-aos-duration="2000">
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <SoftSkills></SoftSkills>
      <Projects></Projects>
      {/* <Blogs></Blogs> */}
      <Achievements></Achievements>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
