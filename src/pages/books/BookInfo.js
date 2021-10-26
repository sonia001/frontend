import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      width:"100%",
      padding:"5%"
    },
    image: {
        width:"100%",
        height:"auto"
    }  
  });

 const BookInfo = () =>{
    const classes = useStyles();

     return(
         <>
         <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                <img className= {classes.image} src="http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg" alt="image"/>
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                </Grid>
            </Grid>
         </div>
         </>
     )
 }

 export default BookInfo;