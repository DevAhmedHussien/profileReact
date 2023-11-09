import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import photoProject1 from './images/Screenshot_2.png'
import photoProject2 from './images/Screenshot_3.png'
import photoProject3 from './images/thethird.png'
import CardsProjects from './CardsProjects';
import scrollReveal from "scrollreveal";
import { useRef ,useEffect} from 'react';
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
return (
    <Box sx={{}} id='projects'>
        <Box sx={{paddingTop:'30px'}}>
            <Typography variant='h2' 
                    sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> My Recent Work </Typography>
            <Typography  variant="h3"   sx={{textAlign:'center',  padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
                    Projects</Typography>
        </Box>
        <Box  ref={juniorRef} sx={{display:'flex', justifyContent:'center', flexWrap:'wrap', alignItems:'center',gap:10 }}>
            <CardsProjects photo={photoProject1} title='Exchange from Rubel to BitCoins'
            git='https://github.com/DevAhmedHussien?tab=repositories'
            live='https://melodious-baklava-ad7cc7.netlify.app/'/>
            <CardsProjects photo={photoProject3} title='practice big todo List by ReactJs  '
            git='https://github.com/DevAhmedHussien?tab=repositories' 
            live='https://654d32fc52bd5b0a9a6ce0e6--heartfelt-kelpie-32af91.netlify.app/' />
            <CardsProjects photo={photoProject2} title='telegramBot to exchange money  '
            git='https://github.com/DevAhmedHussien?tab=repositories'
            live='https://github.com/DevAhmedHussien?tab=repositories'/>
            
            {/* <CardsProjects photo={photoProject3} title='CMS Project to manage Resturant' git='http://www.google.gom'/>
            <CardsProjects photo={photoProject3} title='CMS Project to manage Resturant' git='http://www.google.gom'/>
            <CardsProjects photo={photoProject3} title='CMS Project to manage Resturant' git='http://www.google.gom'/> */}
        
            {/* <CardsProjects photo={photoProject1} title='CMS Project to manage Resturant' git='http://www.google.gom'/>
            <CardsProjects photo={photoProject1} title='CMS Project to manage Resturant' git='http://www.google.gom'/>
            <CardsProjects photo={photoProject1} title='CMS Project to manage Resturant' git='http://www.google.gom'/> */}
        </Box>
    </Box>
);
}