import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
import ExperienceBox from './ExperienceBox';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
export default function Experience(){
const front = useRef(null)
const back = useRef(null)
useEffect(() => {
    if (front.current )
    scrollReveal().reveal(front.current  , {
        origin:'left',
        // distance:'40px',
        duration:2000,
        delay:200
    });
}, []);
useEffect(() => {
    if (back.current )
    scrollReveal().reveal(back.current  , {
        origin:'right',
        // distance:'40px',
        duration:2000,
        delay:200
    });
}, []);
const theme = useTheme();
const colors = tokens(theme.palette.mode);
return(
    <Box id="Experience">
        <Box sx={{paddingTop:'20px'}}>
            <Typography variant='h3'  color={colors.primary[300]} 
                sx={{ textAlign:"center" 
,padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15
                }}> What Skills I Have </Typography>
            <Typography  variant="h2" color={colors.primary[400]}
            sx={{textAlign:'center', padding:'15px 0 50px 0'}}>
                My Experience
            </Typography>
        </Box>
        <Box className='exmeBox' sx={{  padding:5 ,display:'flex',justifyContent:'center' , flexWrap:'wrap',  alignItems:'center' , gap:10,}}>
            <ExperienceBox ref = {back} 
            bigTitle='Frontend Development'
                first = 'HTML5' firstY ='Experience'
                second = 'CSS/SCSS' secondY = 'Experience'
                third = 'JavaScript' thirdY = 'Intermediate' fourth = 'ReactJs' fourthY = 'Intermediate'
                fifth = 'Material UI' fifthY = 'Intermediate' sixth='NextJS' 
            />
            <ExperienceBox ref = {back} bigTitle='Backend Development' first = 'nodeJs' firstY ='basic'
                second = 'ExpressJs' secondY = 'Intermediate' third = 'MongoDb' thirdY = 'basic' 
                fourth = 'webpack' fourthY = 'basic'
                fifth = 'docker' fifthY = 'basic'
                sixth='MySQL' sixthY = 'Intermediate'
            />
        </Box>
    </Box>
)
}