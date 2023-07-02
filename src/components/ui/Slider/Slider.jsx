import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';


import rightArrow from "#assets/images/ad/rightArrow.svg";
import leftArrow from "#assets/images/ad/leftArrow.svg";
import image from "#assets/images/image_card.png";

import  './slider.scss'


const Slider = () => {
  return (
    <div className='slider'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 45,
          depth: 185,
          modifier: 2,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="slide_image" />
        </SwiperSlide>

        
          <div className="swiper-button-prev slider-arrow">
            <img src={leftArrow} alt="" />
          </div>
          <div className="swiper-button-next slider-arrow">
          <img src={rightArrow} alt="" />
          </div>
          <div className="swiper-pagination"></div>
        
      </Swiper>
    </div>
  );
};

export default Slider;
