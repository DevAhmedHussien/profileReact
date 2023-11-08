import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CardsInnerAboutMe from './CardsInnerAboutMe'
import { Typography } from '@mui/material';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
export default function ContactMe() {
  const email = useRef(null)
  useEffect(() => {
      if (email.current )
        scrollReveal().reveal(email.current  , {
          origin:'right',
          distance:'100px',
          duration:2000,
          delay:200
        });
  }, []);
  const card = useRef(null)
  useEffect(() => {
      if (card.current )
        scrollReveal().reveal(card.current  , {
          origin:'left',
          distance:'100px',
          duration:2000,
          delay:200
        });
  }, []);
  return (
    <Box id='contact' //sx={{height:'100vh'}}
    >
       <Box sx={{paddingTop:'20px'}}>
        <Typography variant='h2' 
            sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> Get in Touch</Typography>
        <Typography  variant="h3"  sx={{textAlign:'center',  padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
          Contact Me
        </Typography>
        </Box>
    
    <Box className='ConBox'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, display:'flex',flexWrap:'wrap', justifyContent:'center',gap:20
      }}
      noValidate
      autoComplete="off"
    >
        <Box className='ConCardBox'  ref={ card }sx={{display:'flex', flexDirection:'column', flexWrap:'wrap'  ,justifyContent:'center', gap:2 }} >
            <Box>
                <CardsInnerAboutMe icon ={<MarkunreadIcon sx={{fontSize:35 ,color:'#4db5ff'}} />} 
                title='E-mail' perif='a.abdelmaksoud@mail.ru'
                sendM='Send a message' href=''
                />
            </Box>
            <Box>
                <CardsInnerAboutMe icon ={<WhatsAppIcon sx={{fontSize:35 ,color:'#4db5ff'}} />} 
                title='WhatsApp' perif='+7(982)131-35-77' 
                sendM='Send a message' href=''
                />
            </Box>
            <Box>
                <CardsInnerAboutMe icon ={<TelegramIcon sx={{fontSize:35 ,color:'#4db5ff'}}  />} 
                title='Telegram' perif='Ahmed Hussien'
                sendM='Send a message' href=''
                />
            </Box>
            
        </Box>

        <Box  ref={email} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:5}}>
            <TextField className='INP'  style={{width:500 ,color:'silver'}}   
            id="standard-textarea"
            label="Full name"
            placeholder="Full name"
            multiline
            variant="standard"
            inputProps={{
                style: {color:'#4db5ff'},
              }}
            InputLabelProps={{
                style: { color: 'silver' },
            }}
            />
            <TextField  className='INP' style={{width:500 ,color:'#4db5ff'}} 
            id="standard-textarea"
            label="Your Email"
            placeholder="Your Email"
            multiline
            variant="standard"
            inputProps={{
                style: { width:'500px' ,color:'#4db5ff'},
              }}
            InputLabelProps={{
                style: { color: 'silver' },
            }}
            />
            <TextField  className='INP' style={{width:500 ,color:'#4db5ff'}} 
            id="standard-multiline-static"
            label="Your Message"
            placeholder="Your Message"
            multiline
            rows={4}
            defaultValue="Name Project"
            variant="standard"
            inputProps={{
                style: { width:'500px' ,color:'#4db5ff'},
              }}
            InputLabelProps={{
                style: { color: 'silver' },
            }}
            
            />
             <Button variant="contained"  endIcon={<SendIcon sx={{color:'#253546'}}/>} 
             sx={{fontSize:"11px" ,width: "23%",height: "44px",height: "44px",color: '#253546', background:'#4db5ff'}}>
                Send
            </Button>
        </Box>
    </Box>
    </Box>
  );
}
