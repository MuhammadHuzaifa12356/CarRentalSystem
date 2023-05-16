import { createSlice } from "@reduxjs/toolkit";



const Signupslice= createSlice({
    name:"Signup",
    initialState:{},           //data of login save init 
    reducers:{                                    
     add(){},                    //reducers help to perform actions such as crud operation   
     del(){} ,
           
    },
});

export const{add , del }=Signupslice.actions;
export default Signupslice.reducers;
