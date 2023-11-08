import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoIcon from '@mui/icons-material/Info';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// import { useRef ,useEffect} from 'react';
// import scrollReveal from "scrollreveal";
export default function LabelBottomNavigation() {
    // const boxRef = useRef(null)
    // useEffect(() => {
    //     if (boxRef.current )
    //         scrollReveal().reveal(boxRef.current  , {
    //             // origin:'top',
    //             reset: true,
    //             distance:'10px',
    //             duration:2000,
    //             delay:200
    //         });
    // }, []);
const [value, setValue] = React.useState('Home');
const handleChange = (event, newValue) => {
    setValue(newValue);
};
return (
    <Box className='bottomNavigation'  
    sx={{width: '100vw',opacity:'0.6',position:'fixed',bottom:'5px',zIndex:100,
    display:'flex',justifyContent:'center',alignItems:'center'}}>
    <BottomNavigation sx={{width:600, borderRadius: '30px',background:'#31353b',}} value={value} onChange={handleChange}  //ref={boxRef}
    >
    {/* <BottomNavigationAction href='#header' label="Home" value="Home"icon={<HomeRoundedIcon sx={{color:'silver',fontSize:'20px'}}/>}/> */}
    <BottomNavigationAction href='#about' label="About" value="About me" icon={<InfoIcon sx={{color:'silver',fontSize:'20px'}} />}/>
    <BottomNavigationAction href='#Experience' label="Experience" value="Experience" icon={<PsychologyIcon sx={{color:'silver',fontSize:'20px'}} />}/>
    <BottomNavigationAction href='#services' label="Services" value="Services" icon={<MiscellaneousServicesIcon sx={{color:'silver',fontSize:'20px'}} />} />
    {/* <BottomNavigationAction href='#projects'label="projects" value="projects" icon={<VideoLabelIcon  sx={{color:'silver',fontSize:'20px'}}/>} /> */}
    {/* <BottomNavigationAction href='#contact'label="Contact" value="Contact" icon={<ConnectWithoutContactIcon  sx={{color:'silver',fontSize:'20px'}}/>} /> */}
    </BottomNavigation>
    </Box>
);
}