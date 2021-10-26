import React from "react"
import AppAppBar from "../../modules/views/AppAppBar"
import AppFooter from "../../modules/views/AppFooter"
import ProductGeneralHero from "../../modules/views/ProductGeneralHero"
import ResponsiveAppBar from "../../modules/components/ResponsiveAppBar"
import TabDetails from "./TabDetails"

 const PublishBookChapter = () =>{
     return(
         <>
         <AppAppBar/>
         <ResponsiveAppBar/>
         <ProductGeneralHero title="Publish Book Chapter"/>
         <TabDetails/>
         <AppFooter/>
         </>
     )
 }
 export default PublishBookChapter;