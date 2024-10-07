import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

//  const Add = () => {
  function Add() {
    
    const [employee,setEmployee] = useState ({
      EmployeeId:'',
      EmployeeName:'',
      Department:'',
      Location:''
    })
  
let sendData=()=>{
console.log(employee);
}

  let fetchValue=(e)=>{
    // console.log(e)
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  return (
    <>
    <div class="employee" ><h2>NEW EMPLOYEE</h2></div>
   
    <TextField id="standard-basic"
     label="Employee ID"
      variant="standard"
    //  value={employee.EmployeeId}
      onChange={fetchValue}   
       name="EmployeeId" /><br/>

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