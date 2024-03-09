import React, {useEffect, useState} from 'react';
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
    visible: { opacity: 1, scale: 1, translateX: 0, transition: {duration: 0.4} },
    hidden: { opacity: 0.25, scale: 0.65 , translateX: -100},
  }
  const boxVariantThree = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: {duration: 0.4} },
    hidden: { opacity: 0.25, scale: 0.65 , translateX: 100},
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
      <img className='shape-right anim-up-down' src="./images/shapes/why-shape.png" alt="" />
      {/* <h1 className='text-center'><CountUp end={100} enableScrollSpy scrollSpyOnce="true" /></h1> */}
      <div className='container'>
        <div className='row m-b40'>
          <div className='col-lg-4 col-md-6 m-b30'>
            <div
             className='countup_box'>
              <div className='icon-box-bg'></div>
              <div className='icon-box row'>
                <div className='cout-icon col-4'>
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <div className='col-8'>
                  <div className='count-text'>
                    <CountUp end={100} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Awards won</p>
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
                  <i className="fa-solid fa-business-time"></i>
                </div>
                <div className='col-8'>
                  <div className='count-text'>
                    <CountUp end={30} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Years Served</p>
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
                    <CountUp end={10000} enableScrollSpy scrollSpyOnce="true" /> <span>+</span>
                  </div>
                  <p className='count-name'>Happy Clients</p>
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
            <Section_title smTitle="Why Choose" mainTitle="We Are Expert In All
             Industry" />
            <LoremIpsum p={1} />

            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className="list-why-us">
                  <li>Our Work Growth</li>
                  <li>1500 Employed</li>
                  <li>1500 Employed</li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <ul className="list-why-us">
                  <li>Our Employee Growth</li>
                  <li>Service Management</li>
                  <li>Service Management</li>
                </ul>
              </div>
            </div>

            <div className='col-12 m-t30'>
              <div className='why_icn_box'>
                <div className='icon-box row'>
                  <img className='award-img' src="./images/shapes/award.png" alt="" />
                  <div className='award-cont'>
                    <p className='title'>Best Quality Products Always</p>
                    <p> Eiusmod tempor incididunt ut labore et dolore magna aliqua. ra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 m-t40'><Btn_link Href="" btnName="Readmore About" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why_choose_us
