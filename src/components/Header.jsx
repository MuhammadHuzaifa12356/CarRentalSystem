
import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Header(props) {
    const{text,className,src}=props;
const back=()=>{
	window.history.back();
}
return (
	<AppBar position="static">
		<Toolbar>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		> 
			{/*This is a simple Menu
			Icon wrapped in Icon */}
            <img src={src} alt="" />
			<ArrowBackIcon 
			 onClick={back}
			
			/>
		</IconButton>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6" className={className}
			component="div" sx={{ flexGrow: 1 }}>
			{text}
		</Typography>
		<Button color="inherit">Logout</Button>
		</Toolbar>
	</AppBar>
);
}
