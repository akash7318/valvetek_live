import React, { useEffect } from 'react';
import './Product_card.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';

const Product_card = (props) => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, translateX: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0.25, scale: 0.65, translateX: 180 },
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
      <div className='product-img'>
        <img className='w-100' loading='lazy' src={process.env.REACT_APP_BASE_URL+"images/products/" + props.productImg} alt={props.productName} title={props.productName} /></div>
      <div className='product-name-box'>
        {/* <span className='product-name-title' >Catogery</span> */}
        <Link to={props.productSlug} className='product-name'>{props.productName}</Link>
      </div>
    </motion.div>
  )
}

export default Product_card
