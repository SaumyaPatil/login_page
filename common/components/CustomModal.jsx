import * as React from 'react';
import { CTAButton } from './CTAButton';
import './CustomModal.css'
import { TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   button: {
     backgroundColor: 'orange',
     '&:hover': {
       backgroundColor: 'orange',
     },
   },
}));

function CustomModal() {

   return (
      <> <div id='topContainer' >
         <div id='container' >
            <div id='topBar' >
               <div id='topBarText' >
                  Login
               </div>
            </div>
            <div className='secondContainer' >
               <div className='titleText' >
                  Email Address <span style={{ color: "red" }} >*</span>
               </div>
               <div  className='text-field'>
                  <TextField sx={{ width: "420px" }} id="outlined-basic" label="Email address" variant="outlined" />
               </div>
            </div>
            <div className='secondContainer' >
               <div className='titleText'   >
                  Password <span style={{ color: "red" }} >*</span>
               </div>
               <div className='text-field'>
                  <TextField sx={{ width: "420px", maxHeight: " 10px" }} id="outlined-basic" label="****" variant="outlined" type='password'/>
               </div>
            </div>
            <div id='loginButton' >
               <CTAButton
                  title={'Login'}
                  sx={{
                     backgroundColor: "orange"
                  }}
               />
            </div>
         </div>
      </div> </>
   );
}

export default CustomModal;