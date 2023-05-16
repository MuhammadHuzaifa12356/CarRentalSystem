
import * as React from 'react';

import Box from '@mui/material/Box';

import { Button,Typography ,TextField} from '@mui/material';
import { signUpUser } from '../config/firebasemethods';
import { useState } from "react";

 const Signup = () => {
  const [model,setModel] = useState({});
  let createUser = () => {
      console.log(model);
      signUpUser(model)
      .then((rse)=>{
          console.log(rse);
      })
      .catch((err) => {
          console.log(err);
      })
  }

   
  return (
   <>
      <Box   sx={{ height: "100vh"  }}
            className="d-flex justify-content-center align-items-center bg-white">
              <Box className="shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
         <Typography  className='text-center text-primary fs-1' >
             SignUp
         </Typography>
           <Box className="p-2">
              <TextField 
              onChange={(e) => setModel({ ...model, userName: e.target.value })}
               variant="standard"
               type='text'
               label="Name">
              </TextField>
           </Box>
           <Box className="p-2">
              <TextField 
                  onChange={(e) => setModel({ ...model, email: e.target.value })}
               variant="standard"
               type='Email'
               label="Email">
            
              </TextField>
           </Box>
           <Box className="p-2">
              <TextField 
               onChange={(e) => setModel({ ...model, password: e.target.value })}
               variant="standard"
               type='Password'
               label="Password">
              </TextField>
           </Box>
           <Box className="p-2">
              <TextField 
               onChange={(e) => setModel({ ...model, cnfrmpassword: e.target.value })}
               variant="standard"
               type='Password'
               label="Confirm Password">
              </TextField>
           </Box>
           <Box className="p-2">
              <TextField 
               onChange={(e) => setModel({ ...model, contact: e.target.value })}
               variant="standard"
               type='Number'
               label="Contact">
              </TextField>
           </Box>
           <Box className="p-2 text-center">
                <Button onClick={createUser} variant="contained">
                  Signup
                </Button>
              </Box>
              <Box className="p-2 text-center">
               <p>Already account? <a href="/" >Login</a> </p>
            </Box>
         </Box>
      </Box>
    </>
  );
}
export default Signup;