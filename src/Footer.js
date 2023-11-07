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
    <Box 
    sx={{ background:'linear-gradient(rgb(77 181 255), #cdcdcd00)',marginTop:'40px',height:100 ,
     borderTopRightRadius:30 , borderTopLeftRadius:30,
     display:'flex',justifyContent:'space-around',alignItems:'center',gap:20
     }}>
    <Typography variant='h6' sx={{padding:'10px', textAlign:'center' }}>- Copy right - 
    <span style={{
        color:'#31353b'
    }} > А.Ахмед  </span></Typography>
     <div class="scroolUp" onClick={scrollUp} style={{cursor:'pinter'}} >
            <span id="btnn" onClick={scrollUp} class="btnn" style={{cursor:'pinter'}} >
               
                </span>
        </div>
    </Box>
)
}