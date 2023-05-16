import { createSlice } from "@reduxjs/toolkit";


const Loginslice= createSlice({
    name:"Login",
    initialState:[],
        
               //data of login save init 
    reducers:{                                    
     add(state,actions){
    
     },                    //reducers help to perform actions such as crud operation   
     del(state,payload){} ,
           
    },
});

export const{add , del }=Loginslice.actions;
export default Loginslice.reducer;
