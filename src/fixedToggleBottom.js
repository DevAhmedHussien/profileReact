import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import { useRef ,useEffect} from 'react';
// import scrollReveal from "scrollreveal";
export default function LabelBottomNavigation() {
    // const boxRef = useRef(null)
    // useEffect(() => {
    //     if (boxRef.current )
    //       scrollReveal().reveal(boxRef.current  , {
    //         // origin:'top',
    //         reset: true,
    //         distance:'10px',
    //         duration:2000,
    //         delay:200
    //       });
    // }, []);
const [value, setValue] = React.useState('Experience');
const handleChange = (event, newValue) => {
    setValue(newValue);
};
return (
    <Box className='bottomNavigation'  
    sx={{width: '100vw',opacity:'0.6',position:'fixed',bottom:'5px',zIndex:100,
    display:'flex',justifyContent:'center',alignItems:'center'}}>
    <BottomNavigation sx={{ width: 400 ,borderRadius: '30px',background:'#31353b',}} value={value} onChange={handleChange}  //ref={boxRef}
    >
    <BottomNavigationAction href='#header' label="Home" value="Home"icon={<HomeRoundedIcon sx={{color:'silver',fontSize:'18px'}}/>}/>
    <BottomNavigationAction href='#about' label="About" value="About me" icon={<FavoriteIcon sx={{color:'silver',fontSize:'18px'}} />}/>
    <BottomNavigationAction href='#Experience' label="Experience" value="Experience" icon={<LocationOnIcon sx={{color:'silver',fontSize:'18px'}} />}/>
    <BottomNavigationAction href='#services' label="Services" value="Services" icon={<FolderIcon sx={{color:'silver',fontSize:'18px'}} />} />
    <BottomNavigationAction href='#projects'label="projects" value="projects" icon={<ShareIcon  sx={{color:'silver',fontSize:'18px'}}/>} />
    </BottomNavigation>
    </Box>
);
}