import { Box } from "@mui/material";
import SMButton from "../components/Button";
import StarIcon from '@mui/icons-material/Star';

export default function CarDetails(){
    return(<>
          <div>

          </div>
          <Box className="container p-5 text-center w-50 shadow  mt-5 ">
          <h1>CarDetails</h1>
            <div className="row  d-flex justify-content-center">
              <div className="col-md-10 justify-content-center">

              <img className="w-100" src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="" srcset="" />
              <div className="text-center m-3">
              <StarIcon className="text-warning"/>
              <StarIcon className="text-warning"/>
              <StarIcon className="text-warning"/>
              <StarIcon className="text-warning"/>
              <StarIcon/>

              </div>
              </div>
              <div className="col-md-2">
              <SMButton className="bg-black text-white" label="BookNow"/>
              
              </div>
            </div>
        <div className="row">
            <div className="col-md-4 shadow">
              <div>
                <h1 className="text-danger">Features</h1> 
                 <div>
                  <ul>
                    <li>AC</li>
                    <li>GPS</li>
                    <li>Bluetooth</li>
                    <li>USB PORT</li>
                  </ul>
                 </div>
              </div>
            </div>
            <div className="col-md-4 shadow">
            <div>
                <h1 className="text-danger">Availabiltiy</h1> 
                 <div className="m-4">
                   <h6>Monday </h6>
                   <h6>Thursday</h6>
                   <h6>Friday</h6>
                 </div>
              </div>
            </div>
          <div className="col-md-4 shadow">
          <div>
                <h1 className="text-danger">Ratings</h1> 
                 <div className="m-4">
                  

                 </div>
              </div>
          </div>
            </div>

          </Box>
      
    
    </>);
}