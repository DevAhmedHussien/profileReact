import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CardsInnerAboutMe from '../about/CardsInnerAboutMe'
import { Typography } from '@mui/material';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';
import { useRef ,useEffect} from 'react';
import emailjs from '@emailjs/browser';
import scrollReveal from "scrollreveal";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ContactMe() {

  const [formValue,setFormValue ]= React.useState({
    name:"",
    email: "",
    message: ""
  });
  const handleChangeName = (e)=>{
    setFormValue({...formValue,name:e.target.value})
  };
  const handleChangeEmail = (e)=>{
    setFormValue({...formValue,email:e.target.value})
  };
  const handleChangeMessage = (e)=>{
    setFormValue({...formValue,message:e.target.value})
  };
  //snackbar
  const [open, setOpen] = React.useState(false);
  const [type,setTYPE] =React.useState('');
  const[message,setMESSAGE] =  React.useState('');
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const email = useRef(null)
  useEffect(() => {
      if (email.current )
        scrollReveal().reveal(email.current  , {
          // origin:'right',
          distance:'40px',
          duration:2000,
          delay:200
        });
  }, []);
  const card = useRef(null)
  useEffect(() => {
      if (card.current )
        scrollReveal().reveal(card.current  , {
          // origin:'left',
          distance:'40px',
          duration:2000,
          delay:200
        });
  }, []);
  //email js 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(formValue.name === '' || formValue.email === '' || formValue.name === 'message'){
      setOpen(true);
      setTYPE('info')
      setMESSAGE('U have to write name and ur email')
      setFormValue({
        name:"",
        email: "",
        message: ""
      })
    }else{
      emailjs.sendForm('service_gufllpi', 'template_n3zcmlk', form.current, 'Oq8h-9gW4i-CXe746')
      .then((result) => {
          console.log(result.text);
          if(result.text==='OK'){
            setOpen(true);
            setTYPE('success')
            setMESSAGE('Your message has been sent successfully!')
            setFormValue({
              name:"",
              email: "",
              message: ""
            })
        }
      }, (error) => {
          console.log(error.text);
      });
     
    }
   
  };

const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
  <Box id='contact' variant='div'>
    <Box sx={{paddingTop:'20px'}}>
    <Typography variant='h3' 
        sx={{ textAlign:"center",color:colors.primary[300],padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> Get in Touch</Typography>
    <Typography  variant="h2"  sx={{textAlign:'center',  padding:'15px 0 50px 0',color:colors.primary[400]}}>
      Contact Me
    </Typography>
    </Box>
  <Box className='ConBox'
  component="form" ref={form} onSubmit={sendEmail}
  sx={{
  '& .MuiTextField-root': 
  { m: 1, width: '25ch' }, display:'flex',flexWrap:'wrap',
  justifyContent:'center',gap:20
  }}
  noValidate
  autoComplete="off">
    <Box className='ConCardBox' ref={ card }
  sx={{display:'flex',flexDirection:'column', flexWrap:'wrap',justifyContent:'center', gap:2 }} >
    <Box>
      <CardsInnerAboutMe icon ={
      <IconButton target='_blank'  href='mailto:a.abdelmaskoud@mail.ru' >
        <MarkunreadIcon sx={{fontSize:35 ,color:colors.primary[400]}} />
      </IconButton>} 
      title='E-mail' perif='a.abdelmaksoud@mail.ru'
      href='mailto:a.abdelmaskoud@mail.ru'
      />
      </Box>
      <Box>
      <CardsInnerAboutMe icon ={
        <IconButton   href='https://wa.me/79821313577?' target='_blank' >
          <WhatsAppIcon  sx={{fontSize:35 ,color:colors.primary[400]}} /> 
        </IconButton>}
        title='WhatsApp' perif='+7(982)131-35-77' 
       href='https://wa.me/79821313577?'
        />
    </Box>
    <Box>
        <CardsInnerAboutMe icon ={
          <IconButton  href='https://t.me/mango12198' target='_blank' >
          <TelegramIcon  sx={{fontSize:35 ,color:colors.primary[400]}}  />
        </IconButton>
        } 
              title='Telegram' perif='Ahmed Hussien'
              sendM='Send a message' href='https://t.me/mango12198'
              />
          </Box>
    </Box>
    <Box  ref={email} sx={{display:'flex',flexDirection:'column',
      alignItems:'start',gap:5}}>
          <TextField className='INP'  style={{width:500 ,color:colors.primary[300]}} onChange={handleChangeName}
          name="user_name"
          id="standard-textarea"
          label="Full name"
          placeholder="Full name"
          multiline
          variant="standard"
          inputProps={{
              style: {color:colors.primary[400]},
            }}
          InputLabelProps={{
              style: { color: colors.primary[400] },
          }}
          />
          <TextField  className='INP' style={{width:500 ,color:colors.primary[400] ,}} onChange={handleChangeEmail}
          name="user_email"
          id="standard-textarea"
          label="Your Email"
          placeholder="Your Email"
          multiline
          variant="standard"
          inputProps={{
              style: { width:'300px' ,color:colors.primary[400] }}}
          InputLabelProps={{
              style: { color:colors.primary[400]},
          }}
          />
          <TextField  className='INP' style={{width:500 ,color:colors.primary[400]}} onChange={handleChangeMessage}
          name="message"
          id="standard-multiline-static"
          label="Your Message"
          placeholder="Your Message"
          multiline
          rows={4}
          defaultValue="Name Project"
          variant="standard"
          inputProps={{
              style: { width:'300px' ,color:colors.primary[400]},
            }}
          InputLabelProps={{
              style: { color: colors.primary[300] },
          }}
          />
          <Button variant="contained"  endIcon={<SendIcon sx={{color:colors.primary[150]}}/>} 
          sx={{fontSize:"11px" ,width: "23%",height: "44px",color: colors.primary[150]
          , background:'#4db5ff'}}
          type="submit" value="Send"
          >
              Send
          </Button>
    </Box>
  </Box>
  {/* snack bar  */}
  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  </Box>
);
}
