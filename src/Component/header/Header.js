import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRef ,useEffect} from 'react';
import cv from "../../images/AhmedResume.pdf"
import scrollReveal from "scrollreveal";
import profile1 from '../../images/without2.png'
import { TypeAnimation } from 'react-type-animation';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function Header() {
  const photoRef = useRef(null);
  const iconsRef = useRef(null);
  const buttonRightRef = useRef(null);
  const buttonLeftRef = useRef(null);
  const scrollRef = useRef(null);
  const ahmedRef = useRef(null);
  const juniorRef = useRef(null);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
      const revealSettings = [
          { ref: photoRef, origin: 'top' },
          { ref: iconsRef, origin: 'right' },
          { ref: scrollRef, origin: 'down' },
          { ref: buttonRightRef, origin: 'left' },
          { ref: buttonLeftRef, origin: 'right' },
          { ref: ahmedRef, origin: 'right' },
          { ref: juniorRef, origin: 'left' },
      ];

      revealSettings.forEach(({ ref, origin }) => {
          if (ref.current) {
              scrollReveal().reveal(ref.current, {
                  origin,
                  distance: '40px',
                  duration: 2000,
                  delay: 200,
              });
          }
      });
  }, []);

  const handleScrollDown = () => {
      window.scrollTo({
          left: 0,
          top: 4500,
          behavior: 'smooth',
      });
  };

    return (
        <>
        <Box className='header' id='header' sx={{ height: "100vh", display:"flex", flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Box sx={{ height: "100vh", display:"flex",marginTop:'-30px',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <TypeAnimation
                    sequence={[
                      'السلام عليكم، انا',
                      1000,
                      'hello!, Iam',
                      1000,
                      'здравствуйте!, Меня Зовут',
                      1000,
                      'السلام عليكم',
                      1000,
                    ]}
                    wrapper="h1"
                    speed={20}
                    style={{ fontSize: '15px' , color :colors.primary[200] }}
                    repeat={Infinity}
                  />
              <Typography variant="h2" color={colors.primary[150]} sx={{fontSize:35 ,padding:'5px 0 5px'}} ref={ahmedRef}> Ahmed Hussien </Typography>    
              <Typography  color={colors.primary[300]}  variant="h6"  sx={{fontSize:'14px',padding:'7px 0 16px'}} ref={juniorRef}> Mid-Senior level Fullstack Developer </Typography>
              <Box  sx={{display:"flex",justifyContent:"center",gap:3,marginTop: "10px", width:300  }}>
              <Button
                ref={buttonRightRef}
                className="buttonPro"
                sx={{ fontSize: '11px', width: '70%', padding: 2, height: '44px', color: colors.primary[400] }}
                variant="outlined"
                href={cv} // Link to the PDF file
                download="AhmedResume.pdf" // Prompt download with this filename
                >
                Download CV
            </Button>
                  <Button  className='buttonPro'  
                  sx={{fontSize:"11px",width: "50%",padding:2,height: "44px",
                  color: 'white'//colors.primary[200] 
                  , background:colors.primary[400] 
                }} 
                  ref={buttonLeftRef}
                  variant="contained" href='#contact'>lets Talk</Button>
              </Box>
          </Box>
          <Box>
            <Box className='imageBlock' sx={{position:'relative'}}>
                <img  className='headerIMG' src={profile1} alt=""  ref={photoRef}
                style={{ position:'inherit'
                ,borderTopRightRadius:'150px',width:'250px',height: '420px'
                ,borderTopLeftRadius: '150px',
                background:colors.primary[1000] //'linear-gradient(rgb(77 181 255), #cdcdcd00)'
                }} />   
            </Box>
          </Box>
        </Box>
        <Box className='hamada'
        sx={{ position: 'relative',bottom: '235px',display:"flex",
        justifyContent: "space-around",alignItems:'center',gap: "60%",}}> 
          <Box  style={{display:"flex",flexDirection:"column",justifyContent:"center",
          textAlign:"center", gap:10}} ref={iconsRef}>
            <Fab   aria-label="LinkedIn" target='_blank' 
            href="https://www.linkedin.com/in/ahmed-hussien-1574122a1/" sx={{height:'35px',width: '35px' ,background:'transparent'}}>
            <LinkedInIcon sx={{fontSize:16 ,color:colors.primary[600]}} />
            </Fab>
            <Fab  aria-label="Facebook" target='_blank' 
            href="https://www.facebook.com/ahmed.frankoo?mibextid=LQQJ4d" sx={{height:'35px',width: '35px',background:'transparent'}}>
            <FacebookIcon  sx={{fontSize:16 ,color:colors.primary[600]}}/>
            </Fab>
            <Fab aria-label="Instagram" target='_blank' 
            href="https://instagram.com/ahmed.frankoo?igshid=Nzd3djU4MThqMGh6&utm_source=qr" 
            sx={{height:'35px',width: '35px',background:'transparent'}}>
            <InstagramIcon sx={{fontSize:16 ,color:colors.primary[600]}} />
            </Fab>
            <Fab  aria-label="Github" target='_blank' href="https://github.com/DevAhmedHussien" 
            sx={{height:'35px',width: '35px',background:'transparent'}}>
            <GitHubIcon sx={{fontSize:16 ,color:colors.primary[600]}} />
            </Fab>
          </Box>
          <Box> 
              <div 
              style={{
                transform: "rotate(90deg)",fontSize: "15px",color:colors.primary[400],
                letterSpacing:1,fontWeight:300,cursor:'pointer', marginRight:-15,
                }}
                  onClick={handleScrollDown} ref={scrollRef}>
                    scroll down
                  </div>
          </Box>
        </Box>
    </>
    );
}