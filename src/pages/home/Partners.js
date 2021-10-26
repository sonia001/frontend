import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Carousel } from 'react-responsive-carousel';
import InfiniteCarousel from 'react-leaf-carousel';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import amazon from "../../assets/amazon-partner.png"
import bookChor from "../../assets/bookchor.png"
import booksCart from "../../assets/bookscart.png"
import booksWagon from "../../assets/bookswagon-partner.png"
import buyBooks from "../../assets/buybooks.png"
import flipcart from "../../assets/flipkart-partner.png"
import paytmMall from "../../assets/paytmmall.png"
import shopclues from "../../assets/shopclues.png"
import Snapdeal from "../../assets/snapdeal-partner.png";
import jba from "../../assets/jba.png"
import obs from "../../assets/obs.png"
import sapnaBooks from "../../assets/sapnabooks-partner.png"

const styles = (theme) => ({
 image:{
     width: "100%",
     height: "auto"
 },
 container:{
   padding:"8% 0 5% 0"
 }
});

const carosuelImages = [amazon,booksCart,booksWagon,shopclues,flipcart,buyBooks,Snapdeal,paytmMall]

function PartnerInstitute(props) {
  const { classes } = props;

  return (
    <>
    <Typography variant="h3" marked="center" align="center" component="h3" className={classes.typography}>
    Our partners
  </Typography>
  <div className={classes.container}>
    <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={1}
    sideSize={0.1}
    slidesToScroll={5}
    slidesToShow={5}
    scrollOnDevice={true}
  >
   <div>
      <img
        alt=""
        className={classes.image}
        src={amazon}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={booksWagon}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={booksCart}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={flipcart}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={buyBooks}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={paytmMall}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={shopclues}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={bookChor}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={jba}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={Snapdeal}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={obs}
      />
    </div>
    <div>
      <img
        alt=""
        className={classes.image}
        src={sapnaBooks}
      />
    </div> 
  </InfiniteCarousel>
  </div>
    </>
  );
}

PartnerInstitute.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartnerInstitute);
