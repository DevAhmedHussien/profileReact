import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import photoProject1 from './images/Screenshot_2.png'
import photoProject2 from './images/Screenshot_3.png'
import photoProject3 from './images/thethird.png'
import CardsProjects from './CardsProjects';
export default function Projects() {
return (
    <Box sx={{}} id='projects'>
        <Box sx={{paddingTop:'30px'}}>
            <Typography variant='h2' 
                    sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> what skill i have </Typography>
            <Typography  variant="h3"   sx={{textAlign:'center',  padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
                    Experience</Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', flexWrap:'wrap', alignItems:'center',gap:10}}>
            <CardsProjects photo={photoProject1} title='profile has creagted by pure JS ' git='http://www.google.gom'/>
            <CardsProjects photo={photoProject2} title='CMS Project to manage Resturant' git='http://www.google.gom'/>
            <CardsProjects photo={photoProject3} title='CMS Project to manage Resturant' git='http://www.google.gom'/>
            {/* <CardsProjects photo={photoProject1} title='CMS Project to manage Resturant' git='http://www.google.gom'/>
            <CardsProjects photo={photoProject1} title='CMS Project to manage Resturant' git='http://www.google.gom'/>
            <CardsProjects photo={photoProject1} title='CMS Project to manage Resturant' git='http://www.google.gom'/> */}
        </Box>
    </Box>
);
}