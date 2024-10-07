import { Button, TextField } from '@mui/material'
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

  //Title Validation
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
}else if (!/)

  }
}



  return (
    <>
    <div class="employee" ><h2>NEW EMPLOYEE</h2></div>
   
    <TextField id="standard-basic"
     label="Employee ID"
      variant="standard"
    //  value={employee.EmployeeId}
      onChange={fetchValue}   
       name="EmployeeId" 
       
       /><br/>

     <TextField id="standard-basic"
      label="Employee Name" 
      variant="standard"  
    //  value={employee.EmployeeName} 
      onChange={fetchValue}  
      name="EmployeeName" /><br/> 

    <TextField id="standard-basic" 
    label="Department" 
    variant="standard" 
    // value={employee. Department}
     onChange={fetchValue} 
     name="Department" /><br/>

    <TextField id="standard-basic" 
    label="Location"
     variant="standard"
    //  value={employee.Location} 
    onChange={fetchValue} 
    name="Location" /><br/>

<br/>
    <Button onClick={sendData} variant="contained">submit</Button> 
    
    </>
  )
}

export default Add