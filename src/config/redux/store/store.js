import { configureStore } from "@reduxjs/toolkit";
import loginslice from "../reducer/loginslice";
import signupslice from "../reducer/signupslice";




const store=configureStore({
    reducer:{
        Login: loginslice,
        Signup: signupslice,

    }
});

export default store;