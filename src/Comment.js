import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Avatar from '@mui/material/Avatar';
import x from './images/kk.png'
import y from './images/avatar4.jpg'
import f from './images/avatar2.jpg'
import a from './images/avatar3.jpg'
import d from './images/avatar1.jpg'
import p from './images/me.png'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
{
    label: 'Hussien Fathy',
    imgPath:x,
    body:`"The user interface is incredibly intuitive and easy\n
         to navigate, making for a seamless browsing experience."`
},
{
    label: 'Hoda Mahdi',
    imgPath:
    y,
    body:`"The website's design is visually stunning 
    and truly sets it apart from competitors"`
},
{
    label: 'Amer Hussin',
    imgPath:
    f,
    body:`"The seamless integration with social media 
    platforms makes it effortless 
    to share and engage with the website's content, 
    fostering a sense of community and connectivity."`
},
{
    label: 'Оксана Алесандровна',
    imgPath:
    d,
    body:`"Использование современных веб-технологий, 
    таких как адаптивный дизайн и функции 
    прогрессивного веб-приложения, обеспечивает современное и
     масштабируемое цифровое присутствие."`
},
{
    label: 'Mickel Jasmson',
    imgPath:
    p,
    body:`"The secure and reliable payment processing system
     instills confidence in making online transactions,
     contributing to a seamless shopping experience"`
},
{
    label: 'Глеб Денис',
    imgPath:
    a,
    body:`"Беспроблемная интеграция с платформами социальных сетей позволяет легко делиться 
    и взаимодействовать с контентом веб-сайта, способствуя формированию ощущения сообщества и связности"`
},

];
export default function Comment() {
const theme = useTheme();
const [activeStep, setActiveStep] = React.useState(0);
const maxSteps = images.length;
const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
};
const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};
const handleStepChange = (step) => {
    setActiveStep(step);
};
return (
    <Box  component="div"
    sx={{display:'flex' , flexDirection:'column',alignItems:'center' ,height:'90vh', margin:'20px 0 20px 0'}}>
        <Box sx={{paddingTop:'20px'}}>
            <Typography variant='h2' 
                    sx={{ textAlign:"center",color:'silver',padding:'15px 0 20px',margin:'20px 0 -20px',fontSize:15}}> review from clients </Typography>
            <Typography  variant="h3"  sx={{textAlign:'center',  padding:'15px 0 50px 0',color:' #4db5ff', fontSize:30}}>
                    Testimonials
            </Typography>
        </Box>
        <Box   component="div"
        sx={{ width: '70%', flexGrow: 1 ,display:'flex' , flexDirection:'column',alignItems:'center'}}>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            {images.map((step, index) => (
            <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="div"
                    sx={{
                    padding:1,
                    mt:9,
                    height: 325,
                    display: 'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    gap:2,
                    overflow:'hidden',
                    }}
                >
                    <Avatar alt="Remy Sharp" src= {step.imgPath} sx={{width:'50px' ,height:'50px',
                        boxShadow:'0px 0px 5px 5px #4db5ff'}}/>
                    <Typography variant='h6' sx={{color:'silver'}}>{step.label}</Typography>
                    <Typography sx={{color:'silver',mt:3,p:5,width:'300px'}}>{step.body}<br/></Typography>
                    
                </Box>
                
                ) : null}
            </div>
            ))}
        </AutoPlaySwipeableViews>
        <MobileStepper sx={{width: '100%',background:'#1f242d;'}}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                Next
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
                Back
            </Button>
            }
        />
        </Box>
    </Box>
);
}

