import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoIcon from '@mui/icons-material/Info';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function LabelBottomNavigation() {
    
const [value, setValue] = React.useState('Home');
const handleChange = (event, newValue) => {
    setValue(newValue);
};
const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
<Box component='div'>
    <Box className='bottomNavigation' 
        sx={{width: '100vw',opacity:'0.8',position:'fixed',bottom:'5px',zIndex:100,
        display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <BottomNavigation className='navBar' 
          sx={{width:400, borderRadius: '30px', background:colors.primary[850],
            "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                color: colors.primary[300]  
            }
          }}
        value={value} onChange={handleChange} > 
        <BottomNavigationAction  sx={{width:'50px'}} href='#header' label="Home" value="Home" 
            icon= {<HomeRoundedIcon sx={{color:colors.primary[300],fontSize:'20px'}}/>}/>
        <BottomNavigationAction href='#about' label="About" value="About me" 
            icon={<InfoIcon sx={{color:colors.primary[300],fontSize:'20px'}} />}/>
        <BottomNavigationAction href='#Experience' label="Experience" value="Experience" 
            icon={<PsychologyIcon sx={{color:colors.primary[300],fontSize:'20px'}} />}/>
        <BottomNavigationAction href='#projects'label="projects" value="projects" 
            icon={<VideoLabelIcon  sx={{color:colors.primary[300],fontSize:'20px'}}/>} />
        <BottomNavigationAction href='#contact'label="Contact" value="Contact" 
            icon={<ConnectWithoutContactIcon  sx={{color:colors.primary[300],fontSize:'20px'}}/>} />
        </BottomNavigation>
    </Box>
</Box>
 
);
}