import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function CardsInnerAboutMe({icon , title , perif,sendM}){
    return(
        <Card className ='cartAboutMe' 
        sx={{ width: 210 , height:180, display:'flex', flexDirection:"column"
        ,background:'#253546', borderRadius:'20px'
            ,alignItems : 'center' ,cursor:'pointer'}}>
            <Box style={{fontSize: '66px'}}>{icon}</Box>
            <h5 style={{ fontSize: "17px",margin:'0' ,color:'white'}} >{title}</h5>
            <p style={{fontSize: "9px", color: 'silver'}}>{perif}</p>
            <a href='' style={{fontSize: "11px", color: '#4db5ff',textDecoration:'none'}}>{sendM}</a>

        </Card>
        
            
        
)}