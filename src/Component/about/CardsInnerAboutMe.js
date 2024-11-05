import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function CardsInnerAboutMe({icon , title , perif,sendM = 'Send a Massege' ,href}){
    const theme = useTheme();
const colors = tokens(theme.palette.mode);
    return(
        <Card className ='cartAboutMe' 
            sx={{ width: 210 , height:180, display:'flex', flexDirection:"column" ,
            background:colors.primary[950],
            borderRadius:'20px',alignItems : 'center' ,cursor:'pointer'}}>
            <Box style={{fontSize: '66px'}}>{icon}</Box>
            <Typography  variant='h6'  style={{ fontSize: "17px",margin:'0' ,
            color:colors.primary[150], }} >{title}</Typography>
            <Typography variant='h6' 
            style={{fontSize: "9px", color:colors.primary[300],}}>{perif}</Typography>
            <a href={href} rel="noreferrer"  target='_blank' alt=''style={{fontSize: "11px", color: '#4db5ff',textDecoration:'none'}}>{sendM}</a>
        </Card>
        
            
        
)}