import React, { useRef, useState } from 'react';
import {  Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Home_banner = () => {
    return (
        <>
            <Swiper
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                navigation={{
                    prevEl: '.prev-slide',
                    nextEl: '.next-slide',
                  }}
                modules={[Autoplay , Navigation]}
                className="home-slider">
                <SwiperSlide><img className='w-100' loading='lazy' src='images/slider/Banner-1@2x.jpg' alt='' /></SwiperSlide>
                <SwiperSlide><img className='w-100' loading='lazy' src='images/slider/Banner-2@2x.jpg' alt='' /></SwiperSlide>
                <SwiperSlide><img className='w-100' loading='lazy' src='images/slider/Banner-3@2x.jpg' alt='' /></SwiperSlide>
                <div className="prev-slide slide-btn"><span><i className="fa-solid fa-chevron-left"></i></span></div>
                <div className="next-slide slide-btn"><span><i className="fa-solid fa-chevron-right"></i></span></div>
            </Swiper>
        </>
    )
}

export default Home_banner
