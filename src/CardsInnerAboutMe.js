import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function CardsInnerAboutMe({icon , title , perif,sendM}){
    return(
        <Card className ='cartAboutMe' 
        sx={{ width: 210 , height:180, display:'flex', flexDirection:"column"
        ,background:'#253546', borderRadius:'20px'
            ,alignItems : 'center' ,cursor:'pointer'}}>
            <Box style={{fontSize: '66px'}}>{icon}</Box>
            <Typography  variant='h6'  style={{ fontSize: "17px",margin:'0' ,color:'white'}} >{title}</Typography>
            <Typography variant='h6' style={{fontSize: "9px", color: 'silver'}}>{perif}</Typography>
            <a href='' style={{fontSize: "11px", color: '#4db5ff',textDecoration:'none'}}>{sendM}</a>

        </Card>
        
            
        
)}