import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
    <AppBar position="fixed" sx={{backgroundColor:'#134B70'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <div>  <h3>  PRODUCT APP</h3></div>
        </Typography>
     <Link to={'/'}><Button sx={{margin:2 }}variant='contained'  color="inherit">Home</Button></Link> 
     <Link to={'/add'}><Button variant='contained'  color="inherit">ADD</Button></Link> 
    
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar
