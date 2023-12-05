import profile1 from './images/profile1.png'
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardsInnerAboutMe from "./CardsInnerAboutMe"
import InterpreterModeRoundedIcon from '@mui/icons-material/InterpreterModeRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import RequestPageRoundedIcon from '@mui/icons-material/RequestPageRounded';
export default function AboutMe(){
    const card = useRef(null);
    const button = useRef(null)
    const text = useRef(null)
    useEffect(() => {
        if (card.current)
          scrollReveal().reveal(card.current  , {
            origin:'top',
            distance:'40px',
            duration:2000,
            delay:200
          });
    }, []);
    useEffect(() => {
        if (button.current )
          scrollReveal().reveal(button.current  , {
            origin:'bottom',
            distance:'40px',
            duration:2000,
            delay:200
          });
    }
    , []);
    useEffect(() => {
        if (text.current )
          scrollReveal().reveal(text.current  , {
            origin:'bottom',
            distance:'40px',
            duration:2000,
            delay:200
        });
    }
    , []);
    return(
        <Box sx={{ //height:"100vh" ,
            marginTop:"-174px"}} id='about'>
            <Box sx={{paddingTop:'20px'}}>
            <Typography variant='h2' 
            sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',
            margin:'20px 0 -20px',fontSize:15,}}> Get To Know </Typography>
            <Typography  variant="h3"  sx={{textAlign:'center',  padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
                About me
            </Typography>
            </Box>
            
            <Box className='aboutmeBox' 
            sx={{display:"flex", flexWrap:'wrap', justifyContent: "center"
            ,alignItems:'center',margin:'0px auto',gap:10}}> 
                <Box id='DivimgAbout' className='DivimgAbout' sx={{backgroundColor:' #0ef', borderRadius:'30px' ,width:'371px',height:'437px'}}>
                    <img id='imgAboutMe' className='imgAboutMe' src={profile1}alt='' 
        style={{background:'#31353b',borderRadius:'30px',transition:'1s'}}/>
                </Box>  
                <Box 
                sx={{display:'flex',flexDirection:'column',
                justifyContent:'center',alignItems:'start'}} >
                <Box ref={card} 
                sx={{width: '100%',display:"flex",justifyContent: "space-around",alignItems:'center',gap:1 ,flexWrap:'wrap', 
                    }}>
                    <Box >
                        <CardsInnerAboutMe icon ={<AllInclusiveRoundedIcon sx={{fontSize:35 ,color:'#4db5ff'}} />} title='Experience' perif='+1 years working'
                        />
                    </Box>
                    <Box>
                        <CardsInnerAboutMe icon ={<InterpreterModeRoundedIcon sx={{fontSize:35 ,color:'#4db5ff'}} />} title='Clients' perif='+150 worldWide ' />
                    </Box>
                    <Box>
                        <CardsInnerAboutMe icon ={<RequestPageRoundedIcon sx={{fontSize:35 ,color:'#4db5ff'}}  />} title='Projects' perif='+80 complited ' />
                    </Box>
                </Box>
                    <Box >
                        <Typography  ref ={text}variant='h6' 
                        sx={{color:'silver' , mt:2,fontSize:17, p:2}} >
                        As a diligent and trustworthy individual, I take pride in my work ethic. <br/>
                        Punctuality is a top priority for me, and I am always eager to expand my skill set<br/>
                        My amiable personality and sense of humor make me approachable and easy to work with<br/>
                        Whether working independently or as part of a team, I am able to adapt to any environment<br/>
                        I possess excellent communication skills and <br/>
                        am able to effectively listen and solve problems with tact and diplomacy<br/>
                        I know three languages  <span style={{color:'#4db5ff'}}> [ Arabic ,English ,Russian ] </span>
                        </Typography> 
                    </Box>
                    <Button ref={button} id='ofay'  className='buttonPro'  
                    sx={{ marginLeft:2, fontSize:"11px" ,width: "25%",height: "44px", 
                    mt:2,padding:2,color: '#1f1f38', background:'#4db5ff'}}
                    variant="contained" href='#contact'>lets Talk</Button>
                </Box>
            </Box>
        </Box>
    )
}