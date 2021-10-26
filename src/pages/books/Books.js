import React from "react"
import AppAppBar from "../../modules/views/AppAppBar"
import AppFooter from "../../modules/views/AppFooter"
import ProductGeneralHero from "../../modules/views/ProductGeneralHero"
import ResponsiveAppBar from "../../modules/components/ResponsiveAppBar"
import Card from "../../modules/components/Card"
 const Books = () =>{
     return(
         <>
         <AppAppBar/>
         <ResponsiveAppBar/>
         <ProductGeneralHero title="Books"/>
         <Card/>
         <AppFooter/>
         </>
     )
 }

 export default Books;