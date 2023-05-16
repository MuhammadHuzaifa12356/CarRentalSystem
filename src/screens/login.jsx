import { Box } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { Button, Typography, TextField } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import SMInput from "../components/SMinput";
import "./login.css";
import Table from "../components/Table";
import { loginUser, userLogOut, } from "../config/firebasemethods";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { add } from "../config/redux/reducer/loginslice";
import { Get } from "../config/apimethods";



// const columns = [
//   { path: "id", name: "ID" },
//   { path: "name", name: "Name" },
//   { path: "age", name: "Age" },
// ];

// const data = [
//   { id: 1, name: "Kate", age: 25, favFruit: "🍏" },
//   { id: 2, name: "Tom", age: 23, favFruit: "🍌" },
//   { id: 3, name: "Ann", age: 26, favFruit: "🍊" },
//   { id: 4, name: "Jack", age: 21, favFruit: "🍒" },
// ];

function Logout() {
  const navigate = useNavigate();
    userLogOut()
    .then((res) => {
      console.log(res);
      navigate("/Signup");

      // Sign-out successful.
    })
    .catch((err) => {
        console.log(err);
        // An error happened.
    });
}


export default function Login() {
  const [data,setData]=useState([]);
  // React.useEffect(()=>{
  //     Get("/products").then((response)=>{
  //         console.log(response.data);
  //         setData(response.data)
  //         console.log(data);
  //     }).catch((error)=>{
  //         console.log("Error");
  //     });
  // },[])
  const navigate = useNavigate();
  const [model, setModel] = useState({});
  const [loaoder, setLoader] = useState(false);
  // const dispatch=useDispatch();
  let signIn = () => {
    setLoader(true);

    console.log("model", model);
    loginUser(model)
      .then((res) => {
        setLoader(false);
        console.log(res);
        navigate("/Signup");
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });

      
  };
  return (
    <>
      {/* <div>
      {
        data.map((x,i)=>{
           return(
            <div key={i}>
            <div>
                <img src={x.image} width={250} alt={x.title} />
            </div>
            <div>
                <h3>{x.category}</h3>
            </div>
            <div>
                <h3>{x.title}</h3>
            </div>  
            <div>
                <h3>{x.price}</h3>
            </div>
            <div>
                <button >
                    Add to Cart
                </button>
            </div>

        </div>
           )


        })}
      </div> */}
     
      <div className="row" >
 
      
     
        <Box className=" rounded-bottom  shadow-lg p-3 mb-5 bg-body-tertiary rounded  text-center col-md-4  justify-content-center position-absolute top-50 start-50 translate-middle">
          <h1 className="text-black text-center" onClick={Logout}>Login</h1>
          <Box className="p-3">
            <SMInput
              onChange={(e) => setModel({ ...model, email: e.target.value })}
              type="Email"
              label="User Name"
            />
          </Box>
          <Box className="p-4">
            <SMInput
              onChange={(e) => setModel({ ...model, password: e.target.value })}
              type="Password"
              label="Password"
            />
          </Box>
          <Button
            variant="standard"
            disabled={loaoder}
            onClick={signIn}
            className="bg-dark text-white"
          >
            {" "}
            SIGNIN{" "}
          </Button>
        </Box>
      {/* <Table id="id" columns={columns} data={data} /> */}

      </div>
    </>
  );
}
