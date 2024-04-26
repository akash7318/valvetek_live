import React, { useEffect, useState } from 'react';
import './Why_choose_us.css'
import CountUp from 'react-countup';
import Section_title from '../Section_title';
import LoremIpsum from 'react-lorem-ipsum';
import Btn_link from '../Btn_link';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Why_choose_us = () => {

  // const boxVariant = {
  //   visible: { opacity: 1, scale: 1, translateY: 0, transition: {duration: 0.21} },
  //   hidden: { opacity: 1, scale: 0.98 , translateY: 0},
  // }

  const boxVariantTwo = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0.25, scale: 0.65, translateX: -100 },
  }
  const boxVariantThree = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0.25, scale: 0.65, translateX: 100 },
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
    <section className="sect-space why-sect">
      <img className='shape-right anim-up-down' src={process.env.REACT_APP_BASE_URL+"images/shapes/why-shape.png"} alt="" />
      {/* <h1 className='text-center'><CountUp end={100} enableScrollSpy scrollSpyOnce="true" /></h1> */}
      <div className='container'>
        <div className='row m-b40'>
          <div className='col-lg-4 col-md-6 m-b30'>
            <div
              className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-4'>
                  <i className="fa-solid fa-business-time"></i>
                </div>
                <div className='col-8'>
                  <div className='count-text'>
                    <CountUp end={23} enableScrollSpy scrollSpyOnce="true" /><span>+</span>
                  </div>
                  <p className='count-name'>Years Of Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 m-b30'>
            <div
              className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-4'>
                  <i className="fa-solid fa-users-gear"></i>
                </div>
                <div className='col-8'>
                  <div className='count-text'>
                    <CountUp end={585} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 m-b30'>
            <div
              className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-4'>
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div className='col-8'>
                  <div className='count-text'>
                    <CountUp end={53} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Total Employees</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <motion.div
            ref={ref}
            variants={boxVariantTwo}
            initial="hidden"
            animate={control}
            className='col-lg-5'>
            <div className='why-left-img'>
              <img src="./images/img/welcome.png" alt="" />
              <div className='color-layer'><span>Why Us</span></div>
            </div>
          </motion.div>
          <div className='col-lg-7 m-t30'>
            <Section_title smTitle="Why Valvetek Engineering?" mainTitle="Unveiling Excellence in Dampers and Expansion Joints" />
            <p>Choose Valvetek Engineering for dampers and expansion joints that redefine industry standards. Experience the difference in precision, reliability, and customer satisfaction.</p>

            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className="list-why-us">
                  <li>Fast Delivery</li>
                  <li>Minimum Rate</li>
                  <li>Innovative Design</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className="list-why-us">
                  <li>Customized Solutions</li>
                  <li>Reliability and Durability</li>
                  <li>Responsive Customer Support</li>
                </ul>
              </div>
            </div>

            <div className='col-12 m-t30'>
              <div className='why_icn_box'>
                <div className='icon-box row'>
                  <img className='award-img' src="./images/shapes/award.png" alt="" />
                  <div className='award-cont'>
                    <p className='title'>Quality Assurance</p>
                    <p> Quality is non-negotiable at Valvetek Engineering. Our products undergo rigorous testing to ensure they meet the highest industry standards, providing you with peace of mind and confidence in your choice.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 m-t40'><Btn_link Href="/" btnName="Read More" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why_choose_us
