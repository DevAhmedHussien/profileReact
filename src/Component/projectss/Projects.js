import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import photoProject1 from '../../images/Screenshot_2.png'
import photoProject2 from '../../images/Screenshot_3.png'
import photoProject3 from '../../images/thethird.png'
import photoProject4 from '../../images/portfolio2.jpg'
import photoProject5 from '../../images/portfolio4.jpg'
import photoProject6 from '../../images/portfolio6.jpg'
import CardsProjects from './CardsProjects';
import scrollReveal from "scrollreveal";
import { useRef ,useEffect} from 'react';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function Projects() {
    const juniorRef = useRef(null)
    useEffect(() => {
        if (juniorRef.current )
        scrollReveal().reveal(juniorRef.current  , {
            origin:'bottom',
            distance:'80px',
            duration:2000,
            delay:200
        });
    }, []);
    const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
    <Box sx={{}} id='projects'>
        <Box sx={{paddingTop:'30px'}}>
            <Typography variant='h3' 
                    sx={{ textAlign:"center",color:colors.primary[300],padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> My Recent Work </Typography>
            <Typography  variant="h2"  color={colors.primary[400]}  
            sx={{textAlign:'center',  padding:'15px 0 50px 0'}}>
                    Projects</Typography>
        </Box>
        <Box  ref={juniorRef} sx={{display:'flex', justifyContent:'center', flexWrap:'wrap', alignItems:'center',gap:10 }}>
            <CardsProjects photo={photoProject1} title='Exchange from Rubel to BitCoins'
            git='https://github.com/DevAhmedHussien/obmen-btc'
            live='https://melodious-baklava-ad7cc7.netlify.app/'/>

            <CardsProjects photo={photoProject3} title='practice big todo List by ReactJs  '
            git='https://github.com/DevAhmedHussien/todo' 
            live='https://654d32fc52bd5b0a9a6ce0e6--heartfelt-kelpie-32af91.netlify.app/' />

            <CardsProjects photo={photoProject2} title='telegramBot to exchange money  '
            git='https://github.com/DevAhmedHussien?tab=repositories'
            live='https://github.com/DevAhmedHussien?tab=repositories'/>

            <CardsProjects photo={photoProject5} title='simple Clone-amazon using Firebase'
            git='https://github.com/DevAhmedHussien/clone-simple-Amazon'
            live='https://github.com/DevAhmedHussien?tab=repositories'/>

            <CardsProjects photo={photoProject6} title='praying time all world-listen quran'
            git='https://github.com/DevAhmedHussien/praying-time'
            live='https://luminous-flan-e8f046.netlify.app/'/>
            
            <CardsProjects photo={photoProject4} title='simple CMS - to manage loung'
            git='https://github.com/DevAhmedHussien/diplom'
            live='https://github.com/DevAhmedHussien?tab=repositories'/>
            
        </Box>
    </Box>
);
}