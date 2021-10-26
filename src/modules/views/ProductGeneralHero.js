import React from "react";
import backgroundImage from "../../assets/hero3.jpg";
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    main:{
        width:"100%",
        height:"auto"
    },
    root: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        height:"40vh",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        color:"white",
        fontWeight:'normal'
    }
  });
const ProductGeneralHero = (props) =>{
    const { classes, title } = props
    return(
        <>
        <div className={classes.main}>
            <div className= {classes.root}>
                <Typography variant="h4" align="center" className={classes.title}> 
                    {title}
                </Typography>
            </div>    
        </div>
        </>
    )
}
export default withStyles(styles)(ProductGeneralHero);