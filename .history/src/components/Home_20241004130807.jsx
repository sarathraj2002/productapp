import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const Home = () => {
    
  
 const [rows,setRows]=useState([]);


//   connecting external API
         useEffect(()=>{
            
            axios.get('https://fakestoreapi.com/products').then((res)=>{
                setRows(res.data);
            
            })
         },[])

         

    return (<>

  {/* CARD */}

      <Grid container spacing={3}>
        {rows.map((row) => (
          <Grid item xs={12} sm={6} md={4} key={row.title}>
            <Card sx={{ Width:400, height:800, border }}>
              <CardMedia
                component="img"
                height="600"
                image={row.image}
                alt={row.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {row.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {row.rating?.rate || 'No rating'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

       
      </>
  
   
  
//TABLE
    
  
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
          
    //         <TableCell align="left">Title</TableCell>
    //         <TableCell align="right">Price</TableCell>
    //         <TableCell align="right">Image</TableCell>
    //         <TableCell align="right">Rating</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.title}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.title}
    //           </TableCell>
             
    //           {/* <TableCell align="left">{row.title}</TableCell> */}
    //           <TableCell align="left">{row.price}</TableCell>
    //           <TableCell align="right"><img src={row.image} width={70}  /></TableCell>
    //           <TableCell align="left">{row.rating.rate}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>

  )
}

export default Home