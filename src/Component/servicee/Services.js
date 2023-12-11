import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
import {CardActionArea, CardActions } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function Services() {

    const box = useRef(null)
    useEffect(() => {
        if (box.current )
          scrollReveal().reveal(box.current  , {
            origin:'top',
            distance:'80px',
            duration:2000,
            delay:200
          });
    }, []);
    const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
    <Box component = 'div' id='services'>
        <Box sx={{paddingTop:'20px'}}>
            <Typography variant='h3' 
                sx={{ textAlign:"center",color:colors.primary[300],padding:'15px 0 15px',margin:'20px 0 -20px',fontSize:15 }}>
                    what I Offer</Typography>
            <Typography   variant="h2"   color={colors.primary[400]}
            sx={{textAlign:'center',  padding:'15px 0 30px 0',}}>
                Services
            </Typography>
        </Box>
        <Box ref={box} className='sereBox' sx={{display:'flex',justifyContent:'center' ,flexWrap:'wrap', gap: 10,margin:'20px 0 '}}>
            <Card className='cardServ' sx={{background:colors.primary[950], width: 380, height:610 ,
                borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px',cursor:'pointer'}}>
                <CardActionArea>
                    <CardContent
            sx={{background:colors.primary[400],height:60 ,display:'flex',justifyContent:'center',alignItems:'center',
            borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px'}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{textAlign:'center',color:'#253546'}}>
                    UI/UX Design
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{}}>
                <Box sx={{padding:3 , display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:2,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1}}>
                        <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px' ,mt:1}}/>
                        <Typography variant='h6' color={colors.primary[150]} style={{fontSize:'17px'}} > Creating Website design and development [wordPress ,tilda ,Shopify]</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px',mt:1}}/>
                    <Typography variant='h6'  color={colors.primary[150]}    style={{fontSize:'17px'}} > Ensuring that websites are optimized for various devices and screen sizes, including desktops, laptops, tablets, and smartphones.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px',mt:1}}/>
                    <Typography variant='h6'  color={colors.primary[150]}   style={{fontSize:'17px'}} >Designing online stores, including product pages, shopping carts, and checkout processes, to facilitate online transactions.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px',mt:1}}/>
                    <Typography variant='h6'  color={colors.primary[150]}   style={{fontSize:'17px'}} > Integrating websites with platforms such as WordPress, Joomla, or Drupal to enable easy content management for clients.</Typography>
                    </Box>
                </Box>
                </CardActions>
            </Card>
            <Card className='cardServ'
            sx={{background:colors.primary[950], width: 380,borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px',cursor:'pointer'}}>
                <CardActionArea>
                    <CardContent
                sx={{background:colors.primary[400],height:60 ,display:'flex',justifyContent:'center',alignItems:'center',
                borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px'}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{textAlign:'center',color:'#253546'}}>
                    Web Development
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{}}>
                <Box 
                sx={{padding:3 , display:'flex',flexDirection:'column',justifyContent:'center',
                alignItems:'center',gap:2,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px' ,mt:1}}/>
                    <Typography variant='h6' color={colors.primary[150]}   style={{fontSize:'17px'}}  >reating visually appealing and user-friendly interfaces that align with the brand identity and provide an optimal user experience.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px',mt:1}}/>
                    <Typography variant='h6' color={colors.primary[150]}   style={{fontSize:'17px'}} >Ensuring that websites and web applications are designed to function and display effectively across various devices and screen sizes, including desktops, tablets, and smartphones.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px',mt:1}}/>
                    <Typography variant='h6'  color={colors.primary[150]}   style={{fontSize:'17px'}}  >Leveraging frontend frameworks such as React to build scalable and maintainable web applications with structured architecture and component-based design.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px',mt:1}}/>
                    <Typography variant='h6' color={colors.primary[150]}   style={{fontSize:'17px'}}  >Testing and ensuring that web interfaces function consistently across different web browsers and browser versions.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px',mt:1}}/>
                    <Typography variant='h6' color={colors.primary[150]}   style={{fontSize:'17px'}}  > Optimizing frontend code, assets, and resources to enhance website loading speed and overall performance.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px',mt:1}}/>
                    <Typography variant='h6'  color={colors.primary[150]}   style={{fontSize:'17px'}} > Implementing best practices for web accessibility to ensure that websites and web applications are usable by people with disabilities.</Typography>
                    </Box>
                </Box>
                </CardActions>
            </Card>    
            <Card className='cardServ' sx={{background:colors.primary[950], width: 380, height:610 ,borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px',cursor:'pointer'}}>
                <CardActionArea>
                    <CardContent
            sx={{background:colors.primary[400],height:60 ,display:'flex',justifyContent:'center',alignItems:'center',
            borderBottomRightRadius:'40px',borderBottomLeftRadius:'40px'}}>
                    <Typography gutterBottom variant="h3" component="div" sx={{textAlign:'center',color:'#253546'}}>
                    TelegramBot Dev
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{}}>
                <Box sx={{padding:3 , display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:2,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px' ,mt:1}}/>
                    <Typography variant='h6' color={colors.primary[150]}   style={{fontSize:'17px'}}  > Creating custom bots that can interact with users, automate tasks, provide information, and perform various functions within Telegram chats.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px' ,mt:1 }}/>
                    <Typography variant='h6' color={colors.primary[150]}   style={{fontSize:'17px'}}  > Developing integrations with external platforms and services, allowing users to access external content or perform actions within Telegram.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px' ,mt:1}}/>
                    <Typography variant='h6' color={colors.primary[150]}   style={{fontSize:'17px'}}  >Designing and building intelligent chatbots that can understand natural language, provide automated responses, and perform tasks based on user input.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'start',gap:1, }}>
                    <CheckIcon sx={{color:' #4db5ff' , fontSize:'15px' ,mt:1}}/>
                    <Typography variant='h6' color={colors.primary[150]}   style={{fontSize:'17px'}}   >Implementing custom security features, encryption protocols, and privacy enhancements to ensure secure messaging and data protection within Telegram.</Typography>
                    </Box>
                </Box>
                </CardActions>
            </Card>
        </Box>
        
    </Box>

);
}