import './App.css';
import AboutMe from './Component/about/AboutMe';
import Header from './Component/header/Header'
import Experience from './Component/experience/Experience';
import LabelBottomNavigation from './Component/navbarToggle/fixedToggleBottom';
import Services from './Component/servicee/Services';
import Projects from './Component/projectss/Projects';
import ContactMe from './Component/contactme/ContactMe';
import Footer from'./Component/footer/Footer'
import Comment from './Component/comment/Comment';
import Comment_2 from './Component/comment/Ccomment_2';
import CustomizedSwitches from './Component/navbarToggle/DarkMode';   
import {ThemeProvider  } from '@mui/material';
import {useMode} from './Context/ThemeContext'
import { ColorModeContext,tokens} from './Context/ThemeContext'
function App() {
  const [theme, toggleColorMode , mode] = useMode();
  const colors = tokens(theme.palette.mode);
  return (
    // <ColorProvider>
    <ThemeProvider theme={theme}>  
      <ColorModeContext.Provider value={{toggleColorMode,theme,mode}}>
        <div className= "App" style={{ backgroundColor: colors.primary[100]}}> 
          <Header/>
          <CustomizedSwitches  /> 
          <LabelBottomNavigation/>
          <AboutMe/>
          <Experience/>
          <Services/>
          <Projects/>
          {/* <Comment/> */}
          <Comment_2/>
          <ContactMe/>
          <Footer/>
        </div>  
        </ColorModeContext.Provider>
    </ThemeProvider>
  );
}
export default App;
