import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

//  const Add = () => {
  function Add() {

    const [product,setProduct] = useState ({
      Title:'',
      Productprice:'',
      ProductRate:''
      
       })
  
// let sendData=()=>{
// console.log(employee);
// }

const [errors,setErrors]=useState({});
  let fetchValue=(e)=>{
    // console.log(e)
    setProduct({...product,[e.target.name]:e.target.value})
  }

const validate=()=>{
  const newErrors={};

  
if (!product.Title) {
   newErrors.Title='title is required';
    

    }else if(!/^[a-zA-Z\s]*$/.test(product.Title)){
      newErrors.Title='Title must contain only alphabetic characters';
  }
    
 if(!product.Productprice){
  newErrors.Productprice='Price is required';
 }else if(!/^\d+(\.\d+)?$/.test(product.Productprice)||
product.Productprice<='0'){
  newErrors.Productprice='Price must be a positive number';

} 

if(!product.ProductRate){
  newErrors.ProductRate='Rate is required';
}else if (!/^\d+(\.\d+)?$/.test(product.ProductRate)||
product.ProductRate<'0'||
product.ProductRate>'5'){
  newErrors.ProductRate='Rate must be between 0 and 5';
}

return newErrors;
  };
const sendData=()=>{
  const validationErrors=validate();
  if(Object.keys(validationErrors).length>0){
    setErrors(validationErrors);
  }else{
    console.log('Product details:',product);
    setErrors({});
  }
};



  return (
    <div>
    <h2 style={{ paddingTop: "50px" }}>New Product</h2>
   
    <Box 
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >


    <TextField id="outlined-basic"
     label="Title"
      variant="outlined"
    //  value={employee.EmployeeId}
      onChange={fetchValue}   
       name="Title" 
       error={!!errors.Title}
       helperText={errors.Title}
       InputLabelProps={{
        style: { color: 'black' }, 
      }}
      InputProps={{
        style: { color: 'white' }, 
      }}
       /><br/>

     <TextField id="standard-basic"
      label="Product Price" 
      variant="standard"  
    //  value={employee.EmployeeName} 
      onChange={fetchValue}  
      name="Productprice"
      error={!!errors.Productprice}
      helperText={errors.Productprice}
      InputLabelProps={{
        style: { color: 'white' }, 
      }}
      InputProps={{
        style: { color: 'white' }, 
      }}
      /><br/> 

    <TextField id="standard-basic" 
    label="Product Rate" 
    variant="standard" 
    // value={employee. Department}
     onChange={fetchValue} 
     name="ProductRate" 
     error={!!errors.ProductRate}
     helperText={errors.ProductRate}
     InputLabelProps={{
      style: { color: 'white' }, 
    }}
    InputProps={{
      style: { color: 'white' }, 
    }}
     /><br/>

    

<br/>
    <Button onClick={sendData} variant="contained">submit</Button> 
    </Box>
    
    </div>  
  )
}

export default Add