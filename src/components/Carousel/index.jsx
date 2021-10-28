import React from "react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"

// import "./styles.css";


// import Swiper core and required modules
// import SwiperCore, {
//   EffectCoverflow,Pagination
// } from 'swiper';
import SwiperPr from "./SwiperPr";

// install Swiper modules
// SwiperCore.use([EffectCoverflow,Pagination]);
// import Carousel from 'react-elastic-carousel';
import styles from './style.module.scss';

const ShopOnline = () => {
  return (
    <div className={styles.probas} id='shop'>
      <p className={styles.shopOnline}>Shop online</p>
      <div className={styles.carouselWrapper}>
        <SwiperPr/>
      </div>
    </div>
  )    
}

export default ShopOnline