import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import BookNow from "../screens/Booknow";
export default function Approuter(){
return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}    />
    <Route path="signup" element={<Signup/>}    />
    <Route path="Home" element={<Home/>}    />
    <Route path="cardetails" element={<CarDetails/>}    />
    <Route path="booknow" element={<BookNow/>}    />


  
    </Routes>
    
    
    </BrowserRouter>
    
    
    </>
)

}