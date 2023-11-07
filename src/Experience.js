
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import GppGoodIcon from '@mui/icons-material/GppGood';
export default function Experience(){
    return(
        <Box //sx={{height:'100vh'}} 
        id="Experience">
        <Box sx={{paddingTop:'20px'}}>
            <Typography variant='h2' 
                sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> what skill i have </Typography>
            <Typography  variant="h3"   sx={{textAlign:'center',  padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
                Experience
            </Typography>
        </Box>
        <Box sx={{ padding:5 ,display:'flex',justifyContent:'center' , alignItems:'center' , gap:10,}}>
            <Box>
                <Card sx={{ width: 600 ,borderRadius:5 , height:400,background:'#253546',}}  className="cardEx">
                <CardActionArea  sx={{width:'100%'}}>
                    <Typography variant='h5' sx={{textAlign:'center',p:4,color:' #4db5ff'}}>Frontend Development
                    </Typography>
                <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',gap:7}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1, }}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >HTML</Typography>
                        </Box>
                        <Typography variant='p'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  sx={{color:'white',fontSize:'17px'}} >-CSS</Typography>
                        </Box>
                        <Typography variant='p'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  sx={{color:'white',fontSize:'17px'}} >JavaS</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >React</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1, }}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >M/Mui</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >BootS</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>  
                    </Box>
                </Box>    
                </CardActionArea>
                </Card>
            </Box>
            <Box>
            <Card sx={{ width: 600 ,borderRadius:5 , height:400, background:'#253546',}} className="cardEx">
                <CardActionArea  sx={{width:'100%'}}>
                    <Typography variant='h5' sx={{textAlign:'center',p:4,color:' #4db5ff'}}>Backend Development
                    </Typography>
                <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',gap:7}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1, }}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                            <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/>
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px' }} >NodeJS</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                            <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                            <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >ExpressJs</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
                        <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,}}>
                        <GppGoodIcon sx={{color:' #4db5ff' ,fontSize:'18px'}}/> 
                        <Typography variant='h6' sx={{color:'white',fontSize:'17px'}} >MongoDb</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> Experience</Typography>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:20}}>
                    </Box>
                    </Box>
                </CardActionArea>
                </Card>
            </Box>
        </Box>
        </Box>
    )
}