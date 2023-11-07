import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import SourceIcon from '@mui/icons-material/Source';
export default function CardsProjects({photo,title,git}) {
return (
    <Card className='proCard' sx={{ maxWidth: 345 , background:'#253546',height:'470px'
    ,borderRadius:7 ,cursor:'pointer' }}>
    <CardActionArea >
        <CardMedia sx={{ width:300, height:270, margin:'20px 20px', borderRadius:7 }}
        component="img"
        height="140"
        image={photo}
        alt="green iguana"
        />
        <CardContent>
        <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',gap:1}}>
            {/* <SourceIcon sx={{color:' #4db5ff' ,fontSize:'25px'}}/>  */}
            <Typography gutterBottom variant="h6" component="div" 
            sx={{marginTop:'-25px',marginBottom: '-5px',padding:1,color:'silver',fontSize:22}}>
                {title}
            </Typography>
        </Box>
        </CardContent>
    </CardActionArea>
    <CardActions sx={{padding:3 ,marginTop:'-15px'}}>
        <Button className='buttonPro' variant='contained' size="small" color="primary" href={git} 
        sx={{height:'36px',background:'#4db5ff' ,color:'#1f242d' ,borderRadius:2}}>
            GitHub
        </Button>
        <Button  className='buttonPro' size="small" color="primary" href={git}  sx={{height:'36px',color:'#4db5ff',border:'0.5px solid #4db5ff', borderRadius:2}}>
            Live Demo
        </Button>
    </CardActions>
    </Card>
);
}
