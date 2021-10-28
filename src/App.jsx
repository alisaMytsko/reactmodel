import './main.scss';
import React from "react";

import Header from './components/Header'
import Toolbar from './components/Toolbar';
import NewCollection from './components/NewCollection';
import ShopOnline from './components/Carousel';
import AboutUs from './components/AboutUs';
import Sustainable from './components/Sustainable';
import WinterFashion from './components/WinterFashionWeek';
import Newsletter from './components/Newsletter';
import Visit from './components/Visit';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Toolbar/>
      <NewCollection/>
      <ShopOnline/>
      <AboutUs/>
      <Sustainable/>
      <WinterFashion/>
      <Newsletter/>
      <Visit/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
