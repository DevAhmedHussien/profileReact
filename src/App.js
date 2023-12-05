import AboutMe from './AboutMe';
import './App.css';
import Header from './Header'
import Experience from './Experience';
import LabelBottomNavigation from './fixedToggleBottom';
import Services from './Services';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from'./Footer'
import Comment from './Comment';
import { createTheme,ThemeProvider } from '@mui/material';
function App() {
  const theme =createTheme({
    
    typography:{
      fontFamily: ["AhmedBold"],
      fontWeightLight:500
    },
    paragraph:{
      fontFamily: ["AhmedBold"],
      fontWeightLight:400
    },
    palette:{
      type: "dark",
      primary :{
        main:'#4db5ff'
      },
      secondary:{
        main:'#4db5ff'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>  
      <div className="App">
        <Header/>
        <LabelBottomNavigation/>
        <AboutMe/>
        <Experience/>
        <Services/>
        <Projects/>
        <Comment/>
        <ContactMe/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
