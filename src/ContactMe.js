import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CardsInnerAboutMe from './CardsInnerAboutMe'
import { Typography } from '@mui/material';
import InterpreterModeRoundedIcon from '@mui/icons-material/InterpreterModeRounded';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import RequestPageRoundedIcon from '@mui/icons-material/RequestPageRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
export default function ContactMe() {

  return (
    <Box id='contact'sx={{height:'100vh'}}>
     <Typography variant='h2' 
                sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> Get in Touch</Typography>
            <Typography  variant="h3"  sx={{textAlign:'center',  padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
               Contact Me
            </Typography>
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, display:'flex',justifyContent:'center',gap:20
      }}
      noValidate
      autoComplete="off"
    >
        <Box sx={{display:'flex', flexDirection:'column',gap:2}}>
            <Box>
                <CardsInnerAboutMe icon ={<MarkunreadIcon sx={{fontSize:35 ,color:'#4db5ff'}} />} 
                title='E-mail' perif='a.abdelmaksoud@mail.ru'
                sendM='Send a message'
                />
            </Box>
            <Box>
                <CardsInnerAboutMe icon ={<WhatsAppIcon sx={{fontSize:35 ,color:'#4db5ff'}} />} 
                title='WhatsApp' perif='+7(982)131-35-77' 
                sendM='Send a message'
                />
            </Box>
            <Box>
                <CardsInnerAboutMe icon ={<RequestPageRoundedIcon sx={{fontSize:35 ,color:'#4db5ff'}}  />} 
                title='Projects' perif='+80 complited'
                sendM='Send a message'
                />
            </Box>
        </Box>

        <Box sx={{display:'flex',flexDirection:'column',alignItems:'start',gap:5}}>
            <TextField  style={{width:500 ,color:'silver'}}   
            id="standard-textarea"
            label="Full name"
            placeholder="Full name"
            multiline
            variant="standard"
            inputProps={{
                style: { width:'500px' ,color:'#4db5ff'},
              }}
            InputLabelProps={{
                style: { color: 'silver' },
            }}
            />
            <TextField  style={{width:500 ,color:'#4db5ff'}} 
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
            <TextField  style={{width:500 ,color:'#4db5ff'}} 
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
