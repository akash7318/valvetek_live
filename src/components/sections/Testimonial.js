import React, {useEffect} from 'react';
import './Testimonial.css';
import Section_title from '../Section_title';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
    const boxVariantTesti = {
        visible: { opacity: 1,   transition: {duration: 0.5} },
        hidden: { opacity: 1,   },
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
      }, [control, inView]);

    return (
        <section className='sect-space testi-bg bg-gry'>
            <div className='container'>
                <div className='row'>
                    <div className='text-center'><Section_title smTitle='Testimonial' mainTitle='Here are some of our most valuable comments.' /></div>
                </div>
                <div className='m-t30 '>

                    <Swiper
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 6500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 4,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 4,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 4,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1824: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                        }}
                        modules={[Autoplay, Navigation]}
                        className="home-slider">
                        <SwiperSlide>
                            <motion.div
                             ref={ref}
                             variants={boxVariantTesti}
                             initial="hidden"
                             animate={control} 
                             className='Testimonial-box d-flex'>
                                <img className='testi-img' src="./images/img/testi-img.jpg" alt="" />
                                <div className='reviews-box'>
                                    <p className='testi-words'>“ After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business from the brink of ruin.”</p>
                                    <div className='testi-name-box'>
                                        <p className='testi-name'>Testi Name</p>
                                        <span className='testi-position'>Client</span>
                                        <i className="fa-solid fa-quote-right"></i>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                             ref={ref}
                             variants={boxVariantTesti}
                             initial="hidden"
                             animate={control} 
                             className='Testimonial-box d-flex'>
                                <img className='testi-img' src="./images/img/testi-img.jpg" alt="" />
                                <div className='reviews-box'>
                                    <p className='testi-words'>“ After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business from the brink of ruin.”</p>
                                    <div className='testi-name-box'>
                                        <p className='testi-name'>Testi Name</p>
                                        <span className='testi-position'>Client</span>
                                        <i className="fa-solid fa-quote-right"></i>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.div
                             ref={ref}
                             variants={boxVariantTesti}
                             initial="hidden"
                             animate={control} 
                             className='Testimonial-box d-flex'>
                                <img className='testi-img' src="./images/img/testi-img.jpg" alt="" />
                                <div className='reviews-box'>
                                    <p className='testi-words'>“ After being forced to move twice within five years, our customers had a hard time finding us and our sales plummeted. The Trydus Co. not only revitalized our brand, but saved our nearly 100-year-old family business from the brink of ruin.”</p>
                                    <div className='testi-name-box'>
                                        <p className='testi-name'>Testi Name</p>
                                        <span className='testi-position'>Client</span>
                                        <i className="fa-solid fa-quote-right"></i>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                       

                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default Testimonial
