import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Footer(){
    const scrollUp =()=>{
        window.scrollTo({
            left:0,
            top:0,
            behavior:"smooth"
        })
}
return(
    <Box className='footer' 
    sx={{ background:'linear-gradient(rgb(77 181 255), #cdcdcd00)',marginTop:10, width:'100%',
    height:70 ,
    borderTopRightRadius:30 , borderTopLeftRadius:30,
    display:'flex',justifyContent:'center',alignItems:'center',gap:5
    }}>
    <Typography variant='h6' sx={{padding:'10px', textAlign:'center',fontSize:'22',color:'silver' }}>- Copy right - <Typography variant='span' style={{
        color:'#31353b'}} > А.Ахмед  </Typography></Typography>
    <div class="scroolUp" onClick={scrollUp} style={{cursor:'pinter'}} >
            <span id="btnn" onClick={scrollUp} class="btnn" style={{cursor:'pinter'}} >
            </span>
        </div>
    </Box>
)
}