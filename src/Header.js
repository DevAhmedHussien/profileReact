import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import photo from'./images/me.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BasicSpeedDial from'./IconSpeed'
export default function Header() {
    
    return (
        <>
    <Box className='header' id='header' style={{ height: "100vh", display:"flex",
    flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="h1" sx={{fontSize:'15px'}}> hello! , Iam </Typography>   
        <Typography variant="h2"  sx={{fontSize:35 ,padding:'5px 0 5px'}}> Ahmed Hussien </Typography>    
        <Typography variant="p"  sx={{fontSize:'14px',color:'silver',padding:'11px 0 16px'}}>  Fullstack Developer </Typography>
        <Box sx={{display:"flex",justifyContent:"center",gap:3,marginTop: "20px", width:300           }}>
            <Button  sx={{fontSize:"11px", width: "70%",padding:2, height: "44px",color:'#4db5ff'}}
            variant="outlined">Download CV</Button>
            <Button sx={{fontSize:"11px",width: "50%",padding:2,height: "44px",color: '#1f1f38', background:'#4db5ff'}}
            variant="contained">lets Talk</Button>
        </Box>
        <Box style={{}} >
            <Box sx={{position:'relative'}}>
                <img src={photo} alt="" 
                style={{ position:'inherit',height:'393px' ,borderTopRightRadius:'120px',
                borderTopLeftRadius: '120px',background: 'black',bottom: '-25px',
                background:'linear-gradient(rgb(77 181 255), #cdcdcd00)'
                }} />   
            </Box>
        </Box>
    </Box>
    <Box sx={{ position: 'relative',bottom: '203px',display:"flex",justifyContent: "space-around",alignItems:'center',gap: "60%",}}> 
        <Box  style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",
        gap:10}}>
                <Fab color="secondary" aria-label="edit" href="https://facebook.com" sx={{height:'35px',width: '35px' ,background:'transparent'}}>
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
                <h2 style={{
                    transform: "rotate(90deg)",
                    fontSize: "15px",color:' #4db5ff',opacity:0.6,letterSpacing:1,fontWeight:300,
                }}>scroll down</h2>
                {/* <BasicSpeedDial sx={{}} /> */}
            </Box>
        </Box>
    </>
    );
}