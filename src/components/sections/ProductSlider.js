import React from 'react';
import Section_title from '../Section_title';
import { Aoutoplay, Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Product_card from '../Product_card';

const ProductSlider = () => {
  return (
    <>
      <section className='sect-space bg-gry'>
        <div className='container'>
            <div className='text-center'><Section_title  smTitle='Related Products' mainTitle="Cursus quis condimentum nunc ultricies " /></div>
            <div className=' m-t30'>
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
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    868: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1224: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                modules={[Autoplay , Navigation]}
                className="home-slider">
                <SwiperSlide>
                  <Product_card  productName="Product name one" />
                </SwiperSlide>
                <SwiperSlide>
                   <Product_card  productName="Product name two" />
                </SwiperSlide>
                <SwiperSlide>
                   <Product_card  productName="Product name three" />
                </SwiperSlide>
                <SwiperSlide>
                   <Product_card  productName="Product name four" />
                </SwiperSlide>
                <SwiperSlide>
                   <Product_card  productName="Product name five" />
                </SwiperSlide>

            </Swiper>
            </div>
        </div>
      </section>
    </>
  )
}

export default ProductSlider
