import AboutMe from './AboutMe';
import './App.css';
import Header from './Header'
import Experience from './Experience';
import LabelBottomNavigation from './fixedToggleBottom';
import Services from './Services';
import Projects from './Projects';
function App() {
  return (
    <div className="App">
      <Header/>
      <LabelBottomNavigation/>
      <AboutMe/>
      <Experience/>
      <Services/>
      <Projects/>
      </div>
  );
}

export default App;
