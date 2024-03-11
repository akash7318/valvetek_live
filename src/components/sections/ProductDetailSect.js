import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Section_title from '../Section_title';
import LoremIpsum from 'react-lorem-ipsum';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProductDetailSect = () => {

    const params = useParams();

    const [product, setProduct] = useState([]);

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.325 } },
        hidden: { opacity: 0.45, scale: 0.75 },
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }

        getProduct();

    }, [control, inView, params]);
    const [thumbsSwiper, setThumbsSwiper] = useState();

    const getProduct = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}product/${params.slug}`);
        result = await result.json();
        if (result.status) {
            setProduct(result.product);
        }
    }

    return (
        <section className='sect-space'>
            <div className='container'>
                <div className=''>
                    <div className='floated-pd'>
                        <img className='pd-img-main' src={"./images/products/" + product.img} alt={product.name} title={product.name} />
                    </div>
                    {/* <motion.div 
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                    className='floated-pd'>
                        <div className='w-100'>
                            <Swiper
                                speed={500}
                                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="home-slider">
                                <SwiperSlide>
                                    <img className='pd-img-main' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='pd-img-main' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='pd-img-main' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='pd-img-main' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='pd-img-main' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='w-100 m-t20 img-thumb'>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                // loop={true}
                                speed={500}
                                // navigation={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="home-slider">
                                <SwiperSlide>
                                    <img className='w-100' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className='w-100' src="./images/products/pd1.jpg" alt="" />
                                </SwiperSlide>
                              
                            </Swiper>
                        </div>
                    </motion.div> */}
                    <Section_title smTitle="Product Details" mainTitle={product.shortDescription} />
                    {product.description}
                    {product.extraDescription}
                </div>
            </div>
        </section>
    )
}

export default ProductDetailSect
