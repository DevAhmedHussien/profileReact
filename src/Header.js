import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import photo from'./images/me.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
import BasicSpeedDial from'./IconSpeed'

export default function Header() {
    const photoRef = useRef(null);
    const iconsRef = useRef(null)
    const buttonRightref = useRef(null)
    const buttonlefttref = useRef(null)
    const scrollref = useRef(null)
    const ahmedRef = useRef(null)
    const juniorRef = useRef(null)
    useEffect(() => {
        if (photoRef.current )
          scrollReveal().reveal(photoRef.current  , {
            origin:'top',
            distance:'80px',
            duration:2000,
            delay:200
          });
    }, []);
    useEffect(() => {
        if (iconsRef.current )
          scrollReveal().reveal(iconsRef.current  , {
            origin:'right',
            distance:'80px',
            duration:2000,
            delay:200
          });
      }, []);
      useEffect(() => {
        if (scrollref.current )
          scrollReveal().reveal(scrollref.current  , {
            origin:'down',
            distance:'80px',
            duration:2000,
            delay:200
        
          });
      }, []);
    useEffect(() => {
        if (buttonRightref.current )
          scrollReveal().reveal(buttonRightref.current  , {
            origin:'left',
            distance:'80px',
            duration:2000,
            delay:200
        
          });
    }, []);
    useEffect(() => {
        if (buttonlefttref.current )
          scrollReveal().reveal(buttonlefttref.current  , {
            origin:'right',
            distance:'80px',
            duration:2000,
            delay:200
        
          });
      }, []);
    useEffect(() => {
        if (scrollref.current )
          scrollReveal().reveal(scrollref.current  , {
            origin:'right',
            distance:'80px',
            duration:2000,
            delay:200
        
          });
      }, []);
    useEffect(() => {
        if (ahmedRef.current )
          scrollReveal().reveal(ahmedRef.current  , {
            origin:'right',
            distance:'80px',
            duration:2000,
            delay:200
        
          });
      }, []);
    useEffect(() => {
        if (juniorRef.current )
          scrollReveal().reveal(juniorRef.current  , {
            origin:'left',
            distance:'80px',
            duration:2000,
            delay:200
        
          });
      }, []);
    const scrollDown =()=>{
            window.scrollTo({
                left:0,
                top:4500,
                behavior:"smooth"
            })
    }
    
    return (
        <>
    <Box className='header' id='header' sx={{ height: "100vh", display:"flex",
    flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{ height: "100vh", display:"flex",marginTop:'-50px',
            flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Typography variant="h1" sx={{fontSize:'15px'}}> hello! , Iam </Typography>   
            <Typography variant="h2"  sx={{fontSize:35 ,padding:'5px 0 5px'}} ref={ahmedRef}> Ahmed Hussien </Typography>    
            <Typography variant="h6"  sx={{fontSize:'14px',color:'silver',padding:'11px 0 16px'}} ref={juniorRef}> Junior Fullstack Developer </Typography>
            <Box sx={{display:"flex",justifyContent:"center",gap:3,marginTop: "20px", width:300           }}>
                <Button className='buttonPro' sx={{fontSize:"11px", width: "70%",padding:2, height: "44px",color:'#4db5ff'}} ref={buttonRightref}
                variant="outlined">Download CV</Button>
                <Button  className='buttonPro'  sx={{fontSize:"11px",width: "50%",padding:2,height: "44px",color: '#1f1f38', background:'#4db5ff'}} ref={buttonlefttref}
                variant="contained">lets Talk</Button>
            </Box>
        </Box>
        <Box style={{}} >
            <Box sx={{position:'relative'}}>
                <img  className='headerIMG' src={photo} alt=""  ref={photoRef}
                style={{ position:'inherit',height:'450px' ,borderTopRightRadius:'150px',
                borderTopLeftRadius: '150px',//bottom: '-25px',
                
                background:'linear-gradient(rgb(77 181 255), #cdcdcd00)'
                }} />   
            </Box>
        </Box>
    </Box>
    <Box sx={{ position: 'relative',bottom: '203px',display:"flex",justifyContent: "space-around",alignItems:'center',gap: "60%",}}> 
        <Box  style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",
            gap:10}} ref={iconsRef}>
                <Fab  color="secondary" aria-label="edit" href="https://facebook.com" sx={{height:'35px',width: '35px' ,background:'transparent'}}>
                <LinkedInIcon sx={{fontSize:16 ,color:'#4db5ff'}} />
                </Fab>
                <Fab color="secondary" aria-label="edit" href="https://facebook.com" sx={{height:'35px',width: '35px',background:'transparent'}}>
                <FacebookIcon  sx={{fontSize:16 ,color:'#4db5ff'}}/>
                </Fab>
                <Fab color="secondary" aria-label="edit" href="https://facebook.com" sx={{height:'35px',width: '35px',background:'transparent'}}>
                <InstagramIcon sx={{fontSize:16 ,color:'#4db5ff'}} />
                </Fab>
                <Fab color="secondary" aria-label="edit" href="https://facebook.com" sx={{height:'35px',width: '35px',background:'transparent'}}>
                <GitHubIcon sx={{fontSize:16 ,color:'#4db5ff'}} />
                </Fab>
            </Box>
            <Box> 
                <div style={{
                    transform: "rotate(90deg)",
                    fontSize: "15px",color:' #4db5ff', letterSpacing:1,fontWeight:300,cursor:'pointer'
                }}
                onClick={scrollDown} ref={scrollref}>scroll down</div>
                {/* <BasicSpeedDial sx={{}} /> */}
            </Box>
        </Box>
    </>
    );
}