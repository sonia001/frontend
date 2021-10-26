import * as React from 'react';
import ProductCategories from './ProductCategories';
import ProductSmokingHero from './ProductSmokingHero';
import AppFooter from '../../modules/views/AppFooter';
import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';
import AppAppBar from '../../modules/views/AppAppBar';
import ResponsiveAppBar from '../../modules/components/ResponsiveAppBar';
import Partners from './Partners';
import Footer from './Footer';

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ResponsiveAppBar/>
      <ProductHero />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Partners/>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
