import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Avatar from '@mui/material/Avatar';
import x from './images/avatar1.jpg'
import y from './images/avatar2.jpg'
import z from './images/avatar3.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
{
    label: 'Mickel jasmson',
    imgPath:x,
    body:`Loreeememasdajsodaskldkalsdjkal;kdal;kd;akl;asl;kd;ald;lslslsdfmlsdfm`
},
{
    label: 'Amer hussin',
    imgPath:
    y,
    body:`Loreeememasdajsodaskldkalsdjkal;kdal;kd;akl;asl;kd;ald;lslslsdfmlsdf`
},
{
    label: 'Radwa hussien',
    imgPath:
    z,
    body:`Loreeememasdajsodaskldkalsdjkal;kdal;kd;akl;asl;kd;ald;lslslsdfmlsdfm`
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
        sx={{ width: 700, flexGrow: 1 ,display:'flex' , flexDirection:'column',alignItems:'center'}}>
        {/* <Paper 
            square
            elevation={0}
            sx={{
            width:'100%',
            display: 'flex',
            alignItems: 'center',
            height: 50,
            justifyContent:'center',
            pl: 2,
            bgcolor: 'background.default',
            }}
        >
            <Typography>{images[activeStep].label}</Typography>
        </Paper> */}
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
                    height: 225,
                    display: 'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    gap:2,
                    overflow:'hidden',
                    }}
                >
                    <Avatar alt="Remy Sharp" src= {step.imgPath} sx={{width:'50px' ,height:'50px',
                        boxShadow:'0px 0px 5px 5px #4db5ff'}}/>
                    <Typography variant='h6' sx={{color:'white'}}>{step.label}</Typography>
                    <Typography sx={{color:'silver',mt:3}}>{step.body}<br/>{step.body}<br/>{step.body}</Typography>
                    
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

