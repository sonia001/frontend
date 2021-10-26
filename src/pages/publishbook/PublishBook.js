import React from "react"
import AppAppBar from "../../modules/views/AppAppBar"
import AppFooter from "../../modules/views/AppFooter"
import ProductGeneralHero from "../../modules/views/ProductGeneralHero"
import ResponsiveAppBar from "../../modules/components/ResponsiveAppBar"

 const PublishBook = () =>{
     return(
         <>
         <AppAppBar/>
         <ResponsiveAppBar/>
         <ProductGeneralHero title="Publish Book"/>
         <AppFooter/>
         </>
     )
 }
 export default PublishBook;