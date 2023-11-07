import AboutMe from './AboutMe';
import './App.css';
import Header from './Header'
import Experience from './Experience';
import LabelBottomNavigation from './fixedToggleBottom';
import Services from './Services';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from'./Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <LabelBottomNavigation/>
      <AboutMe/>
      <Experience/>
      <Services/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      </div>
  );
}

export default App;
