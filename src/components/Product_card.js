import React, { useEffect } from 'react';
import './Product_card.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product_card = (props) => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: {duration: 0.4} },
    hidden: { opacity: 0.25, scale: 0.65 , translateX: 180},
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
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className='product-card'>
      <div className='product-img'><img className='w-100' loading='lazy' src="./images/products/pd1.jpg" alt="" /></div>
      <div className='product-name-box'>
        <span className='product-name-title' >Catogery</span>
        <a className='product-name' href="">{props.productName}</a>
      </div>
    </motion.div>
  )
}

export default Product_card
