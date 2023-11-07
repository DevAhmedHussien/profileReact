import photo from './images/kk.png'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardsInnerAboutMe from "./CardsInnerAboutMe"
import InterpreterModeRoundedIcon from '@mui/icons-material/InterpreterModeRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import RequestPageRoundedIcon from '@mui/icons-material/RequestPageRounded';
export default function AboutMe(){
    return(
        <Box sx={{ //height:"100vh" ,
            marginTop:"-174px"}} id='about'>
            <Box sx={{paddingTop:'20px'}}>
            <Typography variant='h2' 
            sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',
            margin:'20px 0 -20px',fontSize:15,}}> what skill i have </Typography>
            <Typography  variant="h3"  sx={{textAlign:'center',  padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
                About me
            </Typography>
            </Box>
            
            <Box style={{display:"flex",justifyContent: "center",alignItems:'center',margin:'0px auto',gap:'160px'}}> 
                <Box style={{backgroundColor:' #0ef', borderRadius:'30px' ,width:'400px',height:'400px'}}>
                    <img className='imgAboutMe' src={photo}alt='' 
                    style={{background:'#31353b',borderRadius:'30px',transition:'1s',width:'400px',height:'400px'}}/>
                </Box>
                <Box sx={{}} >
                <Box sx={{display:"flex",justifyContent: "space-evenly",alignItems:'center',gap:5 ,
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
                    <Box sx={{mt:3}}>
                        <Typography variant='h6' sx={{color:'silver' , mt:5,fontSize:17}} >
                            Специалист по недвижимости в компании «Этажи». <br/>
                            Специалист по недвижимости в компании «Этажи»<br/>
                            Специалист по недвижимости в компании «Этажи»v<br/>
                            Специалист по недвижимости в компании «Этажи»<br/>
                            Специалист по недвижимости в компании «Этажи»v<br/>
                            Специалист по недвижимости в компании «Этажи»<br/>
                        </Typography> 
                    </Box>
                    <Button sx={{fontSize:"11px" ,width: "23%",height: "44px", mt:5,padding:2,height: "44px",color: '#1f1f38', background:'#4db5ff'}}
                    variant="contained">lets Talk</Button>
                </Box>
            </Box>
        </Box>
    )
}