import Header from './components/Header/Header/Header';
import AboutMe from './components/Header/About-Me/AboutMe';
import Resume from './components/Header/Resume/Resume';
import Services from './components/Header/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Services></Services>
    </div>
  );
}

export default App;
