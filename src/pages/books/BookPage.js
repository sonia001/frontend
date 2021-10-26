import React from "react";
import AppAppBar from "../../modules/views/AppAppBar";
import AppFooter from "../../modules/views/AppFooter";
import ProductGeneralHero from "../../modules/views/ProductGeneralHero";
import ResponsiveAppBar from "../../modules/components/ResponsiveAppBar";
import BookInfo from "./BookInfo";

 const BookPage = () =>{
     return(
         <>
         <AppAppBar/>
         <ResponsiveAppBar/>
         <ProductGeneralHero title="Books"/>
         <BookInfo/>
         <AppFooter/>
         </>
     )
 }

 export default BookPage;