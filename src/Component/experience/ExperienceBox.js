
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
export default function ExperienceBox({
    bigTitle,first,firstY,second,secondY,third,thirdY
    ,fourth,fourthY,fifth,fifthY,sixth
}){
    const theme = useTheme();
const colors = tokens(theme.palette.mode);
    return (
<>
<Box>
    <Card  id='exCardd' className="cardEx"  sx={{ padding: '0px 0 50px 0',
        width: 550 ,borderRadius:5 ,  background:colors.primary[950],
        }} >
    <CardActionArea>
        <Typography variant='h3' color = {colors.primary[400]}
            sx={{textAlign:'center',p:4}}>{bigTitle}
        </Typography>
        <Box 
        sx={{display:'flex',flexDirection:'column', justifyContent:'center',
        alignItems:'center',gap:7}}>
            <Box 
            sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                <Box  
                sx={{display:'flex',flexDirection:'column',justifyContent:'center',
                alignItems:'center',gap:1 }}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:colors.primary[400] ,fontSize:'18px'}}/>
                        <Typography variant='h6'  style={{color:'white',fontSize:'17px' }} >{first}</Typography>
                    </Box>
                    <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> {firstY} </Typography>
                </Box>
                <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1, }}>
                        <GppGoodIcon sx={{color:colors.primary[400]  ,fontSize:'18px'}}/> 
                        <Typography variant='h6'  style={{color:'white',fontSize:'17px'}} >{second}</Typography>
                    </Box>
                    <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> {secondY}</Typography>
                </Box>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,}}>
                        <GppGoodIcon sx={{color:colors.primary[400] ,fontSize:'18px'}}/> 
                        <Typography variant='h6' sx={{color:'white',fontSize:'17px'}} >{third}</Typography>
                    </Box>
                    <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> {thirdY}</Typography>
                </Box>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
                    <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,}}>
                            <GppGoodIcon sx={{color:colors.primary[400] ,fontSize:'18px'}}/> 
                            <Typography variant='h6' sx={{color:'white',fontSize:'17px'}} >{fourth}</Typography>
                        </Box>
                        <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> {fourthY}</Typography>
                    </Box>
                </Box>
            </Box>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:18}}>
            <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,}}>
                    <GppGoodIcon sx={{color:colors.primary[400] ,fontSize:'18px'}}/> 
                    <Typography variant='h6' sx={{color:'white',fontSize:'17px'}} >{fifth}</Typography>
                </Box>
                <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> {firstY}</Typography>
            </Box>
            <Box  sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:1,}}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1,}}>
                    <GppGoodIcon sx={{color:colors.primary[400]  ,fontSize:'18px'}}/> 
                    <Typography variant='h6' sx={{color:'white',fontSize:'17px'}} >{sixth}</Typography>
                </Box>
                <Typography variant='h6'sx={{fontSize:'10px',color:"silver"}}> {fourthY}</Typography>
            </Box>
        </Box>
    </Box>
        </CardActionArea>
        </Card>
    </Box>
</>
    )
}