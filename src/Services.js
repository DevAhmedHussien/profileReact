import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GppGoodIcon from '@mui/icons-material/GppGood';
import {CardActionArea, CardActions } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
export default function Services() {
return (
    <Box sx={{height:'100vh'}} id='services'>
        <Typography variant='h2' 
            sx={{ textAlign:"center",color:'silver',padding:'15px 0 15px',margin:'20px 0 -20px',fontSize:15}}> what skill i have </Typography>
        <Typography  variant="h3"  sx={{textAlign:'center',  padding:'15px 0 30px 0',color:' #4db5ff', fontSize:30}}>
            Services
        </Typography>
        <Box sx={{display:'flex',justifyContent:'center' ,gap: 10,margin:'20px 0 '}}>
            <Card className='cardServ' sx={{background:'#253546', width: 345 ,
                height:410 ,borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px',cursor:'pointer'}}>
                <CardActionArea>
                    <CardContent
            sx={{background:'#4db5ff',height:60 ,display:'flex',justifyContent:'center',alignItems:'center',
            borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px'}}>
                    <Typography gutterBottom variant="h6" component="div" sx={{textAlign:'center',color:'#253546'}}>
                    UI/UX Design
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{}}>
                <Box sx={{padding:3 , display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:2,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                </Box>
                </CardActions>
            </Card>
            <Card className='cardServ' sx={{background:'#253546', width: 345 , height:470 ,borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px',cursor:'pointer'}}>
                <CardActionArea>
                    <CardContent
                sx={{background:'#4db5ff',height:60 ,display:'flex',justifyContent:'center',alignItems:'center',
                borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px'}}>
                    <Typography gutterBottom variant="h6" component="div" sx={{textAlign:'center',color:'#253546'}}>
                    Web Development
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{}}>
                <Box sx={{padding:3 , display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:2,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                </Box>
                </CardActions>
            </Card>    
            <Card className='cardServ' sx={{background:'#253546', width: 345 , height:410 ,borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px',cursor:'pointer'}}>
                <CardActionArea>
                    <CardContent
            sx={{background:'#4db5ff',height:60 ,display:'flex',justifyContent:'center',alignItems:'center',
            borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px'}}>
                    <Typography gutterBottom variant="h6" component="div" sx={{textAlign:'center',color:'#253546'}}>
                    TelegramBot Dev
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{}}>
                <Box sx={{padding:3 , display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:2,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px'}}/>
                        <Typography variant='p'  style={{color:'white'}} >HTML</Typography>
                    </Box>
                </Box>
                </CardActions>
            </Card>
        </Box>
        
    </Box>

);
}