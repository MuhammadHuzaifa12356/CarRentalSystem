
import * as React from 'react';
import Button from '@mui/material/Button';



export default function SMButton(props){
    const{color,variant,disabled,label,className,onClick}=props;
    return(
   <>
    <Button
      className={className}
      variant={variant}
     color={color}
     disabled={disabled}
     onClick={onClick}
     >{label}
 
     </Button> 
    
  </>
    );
    
}