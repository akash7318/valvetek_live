import React, { useState, useEffect } from 'react';
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

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`)
    result = await result.json();
    if (result.status) {
      setProduct(result.products);
    }
  }

  return (
    <>
      <section className='sect-space bg-gry'>
        <div className='container'>
          <div className='text-center'><Section_title smTitle='Related Products' mainTitle="" /></div>
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
              modules={[Autoplay, Navigation]}
              className="home-slider">

              {
                products
                  ?
                  products.map((value, index) =>
                    <SwiperSlide key={index}>
                      <Product_card productName={value.name} productSlug={'/' + value.slug} productImg={value.img} />
                    </SwiperSlide>
                  )
                  :
                  null
              }

            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductSlider
