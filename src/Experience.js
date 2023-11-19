import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
export default function Experience(){
const front = useRef(null)
const back = useRef(null)
    useEffect(() => {
        if (front.current )
        scrollReveal().reveal(front.current  , {
            origin:'left',
            distance:'80px',
            duration:2000,
            delay:200
        });
    }, []);
    useEffect(() => {
        if (back.current )
        scrollReveal().reveal(back.current  , {
            origin:'right',
            distance:'120px',
            duration:2000,
            delay:200
        });
    }, []);
    return(
        <Box //sx={{height:'100vh'}} 
        id="Experience">
        <Box sx={{paddingTop:'20px'}}>
            <Typography variant='h2' 
                sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> What Skills I Have </Typography>
            <Typography  variant="h3"   sx={{textAlign:'center',   padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
                My Experience
            </Typography>
        </Box>
        <Box className='exmeBox' sx={{  padding:5 ,display:'flex',justifyContent:'center' , flexWrap:'wrap',  alignItems:'center' , gap:10,}}>
            <Box>
                <Card  id='exCardd' className="cardEx" 
                sx={{ width:550 ,borderRadius:5 , height:400,background:'#253546',}}  >
                <CardActionArea  ref={front}  sx={{width:'100%'}}>
                    <Typography variant='h5' sx={{textAlign:'center',p:4,color:' #4db5ff'}}>Frontend Development
                    </Typography>
                <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center',
                 alignItems:'center',gap:7}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                    <Box  sx={{display:'flex',flexDirection:'column',
                    justifyContent:'center',alignItems:'end',gap:1, }}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >HTML5</Typography>
                        </Box>
                        <Typography variant='p'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  sx={{color:'white',fontSize:'17px'}} >CSS/SCSS</Typography>
                        </Box>
                        <Typography variant='p'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  sx={{color:'white',fontSize:'17px'}} >JavaScript</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1}}>
                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                            <   GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                                <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >Reactjs</Typography>
                            </Box>
                            <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Intermediate</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1, }}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >Material UI</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Intermediate</Typography>
                    </Box>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >Nextjs</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Intermediate</Typography>
                    </Box>  
                    </Box>
                </Box>    
                </CardActionArea>
                </Card>
            </Box>
            <Box>
            <Card  id='exCardd' className="cardEx" sx={{ width: 550 ,borderRadius:5 , height:400, background:'#253546',}} >
                <CardActionArea  ref={back}  sx={{width:'100%'}}>
                    <Typography variant='h5' sx={{textAlign:'center',p:4,color:' #4db5ff'}}>Backend Development
                    </Typography>
                <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',gap:7}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                            <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/>
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px' }} >NodeJS</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Basic </Typography>
                    </Box>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                            <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >ExpressJs</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Basic</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,}}>
                            <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6' sx={{color:'white',fontSize:'17px'}} >MongoDb</Typography>
                            </Box>
                            <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Basic</Typography>
                        </Box>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,}}>
                            <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6' sx={{color:'white',fontSize:'17px'}} >webpack</Typography>
                            </Box>
                            <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Basic</Typography>
                        </Box>
                    </Box>
                   
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,}}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                        <Typography variant='h6' sx={{color:'white',fontSize:'17px'}} >docker</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Basic</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                    </Box>
                    </Box>
                </CardActionArea>
                </Card>
            </Box>
        </Box>
        </Box>
)
}