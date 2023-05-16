import { Box, Button } from "@mui/material";
import SMInput from "../components/SMinput";
import { useState } from "react";
import "./Home.css";
import SMButton from "../components/Button";
import Header from "../components/Header";
import { useNavigate } from "react-router";

export default function Home(){
    const [search,setsearch]=useState("")
    let searchval=(e)=>{
      setsearch(e.target.value);
    }
    const Navigate=useNavigate();
    const MoveScreen=()=>{
        Navigate("/cardetails");
    }
    const booknowhandle=(e)=>{
        e.stopPropagation();
        Navigate("/BookNow");

    }

 return(<>
 <Header className="text-center" text="Home"/>
       <div className="body ">
      <Box className="row text-center p-5  justify-content center">
       <Box>
        <SMInput className="w-75"  label="Search" type="Search" onChange={(searchval)}/><span></span>
       </Box>
      </Box>
      <Box>
        <div className="container ">
            <div className="row">
                <div className="col-md-3 shadow m-4 " onClick={MoveScreen}>
                  <div>
                  <SMButton className="bg-black text-white" label="BookNow" onClick={(e)=>{booknowhandle(e)} }/>
                    <img className="w-100" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="" srcset="" />
                     <div className="text-center">
                        <h2 className="text-center fs-1">Red Car</h2>
                        </div>  
                        <div>
                            <h2>Car Details</h2>
                           <p>CarModel: 2022</p>
                           <p>color: Red</p> 
                           <p>Carvin:sku123</p>
                           <h3>Description </h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium assumenda consequuntur ab dolorum voluptates facilis aliquid minima nostrum, eos omnis magnam asperiores laboriosam sint? Nulla nam inventore nihil nisi!</p>
                        </div>
                  </div>
                </div>
                <div className="col-md-3 shadow  m-5  " onClick={MoveScreen}>
                   <div>
                   <SMButton className="bg-black text-white" label="BookNow"/>
                    <img className="w-100" src="https://paultan.org/image/2020/12/Proton-X70-Pakistan_-1.jpg" alt="" />
                    <div className="text-center">
                        <h2 className="text-center fs-4">Black Car</h2>
                        </div> 
                        <div className="p-3">
                            <h2>Car Details</h2>
                           <p>CarModel: 2022</p>
                           <p>color: Red</p> 
                           <p>Carvin:sku123</p>
                           <h3>Description </h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium assumenda consequuntur ab dolorum voluptates facilis aliquid minima nostrum, eos omnis magnam asperiores laboriosam sint? Nulla nam inventore nihil nisi!</p>
                        </div>
                   </div>

                </div>
                <div className="col-md-3 shadow  m-5 " onClick={MoveScreen}>
                    <div>
                    <SMButton className="bg-black text-white" label="BookNow"/>

                        <img className="w-100" src="https://media.istockphoto.com/id/167496358/photo/white-sedan-from-passenger-side-view.jpg?b=1&s=612x612&w=0&k=20&c=1o7eFPGr6Q5y75iSHuVAVGJ1ftp4ChP1TJcL8Jhjilc=" alt="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-center fs-4">White Car</h2>
                        </div> 
                        <div className="p-3">
                            <h2>Car Details</h2>
                           <p>CarModel: 2022</p>
                           <p>color: Red</p> 
                           <p>Carvin:sku123</p>
                           <h3>Description </h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium assumenda consequuntur ab dolorum voluptates facilis aliquid minima nostrum, eos omnis magnam asperiores laboriosam sint? Nulla nam inventore nihil nisi!</p>
                        </div>
                </div>

            </div>
            <div className="row p-2 ">
                <div className="col-md-3 shadow m-5 " onClick={MoveScreen}>

                    <div className="">
                    <SMButton className="bg-black text-white" label="BookNow"/>

                        <img className="w-100" src="https://media.istockphoto.com/id/477470738/photo/red-volkswagen-beetle.jpg?s=612x612&w=0&k=20&c=3X18O2CgON2RBFCXB3SMyNkrXr5HedgWPpJraGanngk=" alt="" srcset="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-center fs-4">Red Car</h2>
                        </div> 
                        <div className="p-3">
                            <h2>Car Details</h2>
                           <p>CarModel: 2022</p>
                           <p>color: Red</p> 
                           <p>Carvin:sku123</p>
                           <h3>Description </h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium assumenda consequuntur ab dolorum voluptates facilis aliquid minima nostrum, eos omnis magnam asperiores laboriosam sint? Nulla nam inventore nihil nisi!</p>
                        </div>
                </div>
                <div className="col-md-3 shadow  m-5" onClick={MoveScreen}>
                <div>
                <SMButton className="bg-black text-white" label="BookNow"/>

                        <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zvgk0X8JBs-hn5VuA4AqQ9a-SyuIL2nIVQFgQZVDoNzMTkHnUMhYr9afCmgaBDdCAgs&usqp=CAU" alt="" srcset="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-center fs-4">Yellow car</h2>
                        </div> 
                        <div className="p-3">
                            <h2>Car Details</h2>
                           <p>CarModel: 2022</p>
                           <p>color: Yeellow</p> 
                           <p>Carvin:sku123</p>
                           <h3>Description </h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium assumenda consequuntur ab dolorum voluptates facilis aliquid minima nostrum, eos omnis magnam asperiores laboriosam sint? Nulla nam inventore nihil nisi!</p>
                        </div>
                </div>
                <div className="col-md-3 shadow  m-4" onClick={MoveScreen}>
                <div>
                <SMButton className="bg-black text-white" label="BookNow"/>

                        <img className="w-100" src="https://img.freepik.com/premium-vector/three-dimensional-image-purple-car-isolated-white-background_53876-12145.jpg" alt="" srcset="" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-center fs-4">Purple</h2>
                        </div> 
                        <div className="p-3">
                            <h2>Car Details</h2>
                           <p>CarModel: 2022</p>
                           <p>color: Purple car</p> 
                           <p>Carvin:sku123</p>
                           <h3>Description </h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusantium assumenda consequuntur ab dolorum voluptates facilis aliquid minima nostrum, eos omnis magnam asperiores laboriosam sint? Nulla nam inventore nihil nisi!</p>
                        </div>
                </div>

            </div>
        </div>
      </Box>
      </div>
 
 </>);

}