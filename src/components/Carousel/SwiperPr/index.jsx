import React from "react";
import './style.css'

import photo1 from '../../../UI/images/grl1.png';
import photo2 from '../../../UI/images/grl2.png';
import photo3 from '../../../UI/images/grl4.png';
import photo4 from '../../../UI/images/grl5.png';
import photo5 from '../../../UI/images/grl6.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,Pagination
} from 'swiper';

SwiperCore.use([EffectCoverflow,Pagination, Autoplay]);

const SwiperPr = () => {
    return (
      <>
        <Swiper 
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
              "rotate": 0,
              "stretch": 0,
              "depth": 50,
              "modifier": 2,
              "slideShadows": false
          }} 
          loop={true}
          autoplay={{
            "delay":1000
          }}
          pagination={false}
          className="mySwiper"
        >
          <SwiperSlide>
              <img src={photo1} />
          </SwiperSlide>
          <SwiperSlide>
              <img src={photo2} />
          </SwiperSlide>
          <SwiperSlide>
              <img src={photo3} />
          </SwiperSlide>
          <SwiperSlide>
              <img src={photo4} />
          </SwiperSlide>
          <SwiperSlide>
              <img src={photo5} />
          </SwiperSlide>

        </Swiper>
      </>
    )    
}

export default SwiperPr