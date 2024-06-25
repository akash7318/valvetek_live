import React, { useEffect } from 'react';
import { Parser } from 'html-to-react'
import './Company_profile.css';
import Section_title from '../Section_title';
import Btn_link from '../Btn_link';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Company_profile = (props) => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0.25, scale: 0.85, translateX: -180 },
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
    <>
      <section className="about-section">
        <div className='about-left-shape anim-up-down'><img src={process.env.REACT_APP_BASE_URL+"images/shapes/about-left-shape.jpg"} alt="" /></div>
        <div className='about-right-shape anim-scale'><img src={process.env.REACT_APP_BASE_URL+"images/shapes/about-right-shape.jpg"} alt="" /></div>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-6'>
              <div>
                <Section_title smTitle="About Company" homeTitle={props.homeTitle} hTwoTitle={props.hTwoTitle} mainTitle={props.pageData.shortDescription} />
              </div>
              {Parser().parse(props.pageData.description)}
              {Parser().parse(props.pageData.extraDescription)}
              <div className='row align-items-center mt-4'>
                <Btn_link Href="/company-profile" btnName="Company Profile" />
                {/* <div className="abt-contact-content ">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="contact-text">
                    <span>Call Us Anytime</span>
                    <a className="link" href="">+91 00000 00000</a>
                  </div>
                </div> */}
              </div>

            </div>
            <motion.div
              ref={ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}
              className='col-lg-6 position-relative'>
              <div className='abt-text-circle'>
                <img className='img-one' loading='lazy' src={process.env.REACT_APP_BASE_URL+"images/shapes/text-curved.png"} alt="" />
                <img className='img-two' loading='lazy' src={process.env.REACT_APP_BASE_URL+"images/shapes/circle-shape.svg"} alt="" />
              </div>
              <div className='abt-shape anim-left-right'><img loading='lazy' src="images/shapes/service-left-shape.svg" alt="" /></div>
              <div className='row h-100 align-items-end'>
                <div className='abt-left-img'>
                  <img className='w-100' loading='lazy' src="images/img/about-2.jpg" alt="" />
                </div>
                <img className='w-50' loading='lazy' src={process.env.REACT_APP_BASE_URL+"images/pages/" + props.pageData.img} alt={props.pageData.shortDescription} title={props.pageData.shortDescription} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Company_profile
