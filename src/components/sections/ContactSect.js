import React, {useEffect} from 'react';
import './ContactSect.css';
import Section_title from '../Section_title';
import Button from '../Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSect = () => {

    const boxVariant = {
        visible: { opacity: 1, scale: 1,  transition: {duration: 0.325} },
        hidden: { opacity: 0.25, scale: 0.65 },
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
        <section className='sect-space '>
            <div className='container'>

                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <Section_title smTitle="Contact" mainTitle="Semper tellus semmag" />
                        <p className='m-t20'>Cursus quis condimentum nunc ultricies dis nisi diam nec. Bibendum potenti taciti ex parturient lacinia velit habitant.  </p>
                        <motion.div 
                           ref={ref}
                           variants={boxVariant}
                           initial="hidden"
                           animate={control}
                        className='contact-info'>
                            <div className='contacts-box m-t30'>
                                <div className='cont-icn'><i className="fa-solid fa-phone-volume"></i></div>
                                <div className='conta-links'>
                                    <span className='title'>Phone</span>
                                    <a href="">+91 0000 00000</a>
                                </div>
                            </div>
                            <div className='contacts-box'>
                                <div className='cont-icn'><i className="fa-solid fa-envelope-open-text"></i></div>
                                <div className='conta-links'>
                                    <span className='title'>Email</span>
                                    <a href="">contact@company.com</a>
                                </div>
                            </div>
                            <div className='contacts-box'>
                                <div className='cont-icn'><i className="fa-solid fa-map-location-dot"></i></div>
                                <div className='conta-links'>
                                    <span className='title'>Address</span>
                                    <span>456, Loandon Street, lorem tisuml, 33454, India</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className='col-lg-8 col-md-6'>
                        <div className='Contact_box bg-gry'>
                            <form>
                                <div className='row'>
                                    <div className='col-lg-6'><TextField label="Your Name" /></div>
                                    <div className='col-lg-6'><TextField label="Your Phone" /></div>
                                    <div className='col-lg-6'><TextField label="Your Email" /></div>
                                    <div className='col-lg-6'>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select product</InputLabel>
                                            <Select
                                                label="Select product"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                    <div className='col-12'><TextField label="Company Name" /></div>
                                    <div className='col-12'><TextField multiline rows={3} label="Write any message..." /></div>
                                    <div className='col-12'><Button btnType="submit" btnName="Submit Query" /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSect
