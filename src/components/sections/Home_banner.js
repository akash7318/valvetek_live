import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

const Home_banner = () => {

    const [banners, setBanner] = useState([]);

    useEffect(() => {
        getBanners();
    }, []);

    const getBanners = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}banners`);
        result = await result.json();
        if (result.status) {
            setBanner(result.banners);
        }
    }

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
                modules={[Autoplay, Navigation]}
                className="home-slider">
                {
                    banners
                        ?
                        banners.map((value, index) =>
                            <SwiperSlide key={index}>
                                <img className='w-100' loading='lazy' src='../images/slider/Banner-1@2x.jpg' alt={value.name} title={value.name} />
                            </SwiperSlide>
                        )
                        :
                        null
                }
                <div className="prev-slide slide-btn"><span><i className="fa-solid fa-chevron-left"></i></span></div>
                <div className="next-slide slide-btn"><span><i className="fa-solid fa-chevron-right"></i></span></div>
            </Swiper>
        </>
    )
}

export default Home_banner
