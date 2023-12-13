import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function CardsProjects({photo,title,git,live}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
return (
    <Card className='proCard' sx={{ maxWidth: 345 , background:colors.primary[950],height:'470px'
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
            <Typography gutterBottom variant="h6" component="div" 
            sx={{marginTop:'-25px',marginBottom: '-5px',padding:1,color: colors.primary[300],fontSize:22}}>
                {title}
            </Typography>
        </Box>
        </CardContent>
    </CardActionArea>
    <CardActions sx={{padding:3 ,marginTop:'-15px'}}>
        <Button  target='_blank' className='buttonPro' variant='contained' size="small" color="primary" href={git} 
        sx={{height:'36px',background:colors.primary[400] , color: 'white'//colors.primary[200] 
        , background:colors.primary[400]  ,borderRadius:2}}>
            GitHub
        </Button>
        <Button  target='_blank' className='buttonPro' size="small" color="primary" href={live} 
         sx={{height:'36px',color:colors.primary[400] ,border:`0.5px solid ${colors.primary[400]}`, borderRadius:2}}>
            Live Demo
        </Button>
    </CardActions>
    </Card>
);
}
