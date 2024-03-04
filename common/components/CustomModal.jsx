import * as React from 'react';
import { CTAButton } from './CTAButton';
import './CustomModal.css'
import { TextField } from '@mui/material';




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
            Email Address <span style={{color : "red"}} >*</span>
           </div>
           <div  >
           <TextField  sx={{width : "440px"}} id="outlined-basic" label="Email address" variant="outlined" />
           </div>
        </div>   

        <div className='secondContainer' >
           <div  className='titleText'   >
            Password <span style={{color : "red"}} >*</span>
           </div>
           <div>
           <TextField sx={{width : "440px" , maxHeight : "10px" }} id="outlined-basic" label="****" variant="outlined" />
           </div>

        </div>   
           <div id='loginButton' >
           <CTAButton 
           title={'Login'}
           sx={{
            backgroundColor : "orange"
           }}
           />
           </div>
         
          


        </div>

      </div>
      </>
  );
}



export default CustomModal