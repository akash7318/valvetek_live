import React, { useEffect, useState } from 'react';
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
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';

const ContactSect = () => {

    const [siteInfo, setSiteInfo] = useState([]);
    const [products, setProduct] = useState([]);
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [product, setEnquiryProduct] = useState('');

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.325 } },
        hidden: { opacity: 0.25, scale: 0.65 },
    }

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        getSiteInfo();
        getProducts();
        if (inView) {
            control.start("visible");
        }
        else {
            control.start("hidden");
        }
    }, [control, inView])

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    const getProducts = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}products`)
        result = await result.json();
        if (result.status) {
            setProduct(result.products);
        }
    }

    const handleEnquiryForm = async (event) => {
        event.preventDefault();

        const formData = event.target;
        const form = new FormData(formData);
        const data = Object.fromEntries(form.entries());
        Object.keys(data).forEach(k => data[k] = data[k].trim());
        if (
            data.name === '' ||
            data.phone === '' ||
            data.email === '' ||
            // data.companyName === '' ||
            data.product === ''
        ) {
            setError(true);
            return false;
        }
        if (data['g-recaptcha-response'] === '') {
            toast.error('Click on I\'m not a robot box to verify yourself.', {
                style: {
                    borderRadius: '10px',
                    background: '#2c2b7b',
                    color: '#fff',
                }
            });
            return false;
        }

        let result = await fetch(`${process.env.REACT_APP_BASE_URL}enquiry`,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }
        )

        result = await result.json();

        if (result.status) {
            event.target.reset();
            toast.success('Thank you for Contacting.', {
                style: {
                    borderRadius: '10px',
                    background: '#2c2b7b',
                    color: '#fff',
                }
            });
        } else {
            toast.error(result.message, {
                style: {
                    borderRadius: '10px',
                    background: '#2c2b7b',
                    color: '#fff',
                }
            });
        }
    }

    return (
        <section className='sect-space '>
            <Toaster position="bottom-right" />
            <div className='container'>

                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <Section_title smTitle="Contact Us" mainTitle="Customer Support" />
                        <p className='m-t20'>Our dedicated customer support team is ready to assist you with any questions or concerns you may have. Reach out for product information, order assistance, or general Enquiries.</p>
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
                                    <a href={"tel:" + siteInfo.primaryPhone}>{siteInfo.primaryPhone}</a>
                                    <a href={"tel:" + siteInfo.secondaryPhone}>{siteInfo.secondaryPhone}</a>
                                    <a href="tel:+91 7003927392">+91 7003927392</a>
                                </div>
                            </div>
                            <div className='contacts-box'>
                                <div className='cont-icn'><i className="fa-solid fa-envelope-open-text"></i></div>
                                <div className='conta-links'>
                                    <span className='title'>Email</span>
                                    <a href={"mailto:" + siteInfo.primaryMail}>{siteInfo.primaryMail}</a>
                                    <a href={"mailto:" + siteInfo.secondaryMail}>{siteInfo.secondaryMail}</a>
                                </div>
                            </div>
                            <div className='contacts-box'>
                                <div className='cont-icn'><i className="fa-solid fa-map-location-dot"></i></div>
                                <div className='conta-links'>
                                    <span className='title'>Address</span>
                                    <span>{siteInfo.primaryAddress}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className='col-lg-8 col-md-6'>
                        <div className='Contact_box bg-gry'>
                            <form onSubmit={handleEnquiryForm}>
                               <input type="hidden" name='currenturl' value={window.location.href} />
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <TextField
                                            error={
                                                (error && name == '')
                                                    ?
                                                    true
                                                    :
                                                    false
                                            }
                                            onChange={e => setName(e.target.value)}
                                            label="Your Name"
                                            name='name'
                                            type='text' />
                                    </div>
                                    <div className='col-lg-6'>
                                        <TextField
                                            error={
                                                (error && phone == '')
                                                    ?
                                                    true
                                                    :
                                                    false
                                            }
                                            onChange={e => setPhone(e.target.value)}
                                            label="Your Phone"
                                            name='phone'
                                            type='number' />
                                    </div>
                                    <div className='col-lg-6'>
                                        <TextField
                                            error={
                                                (error && email == '')
                                                    ?
                                                    true
                                                    :
                                                    false
                                            }
                                            onChange={e => setEmail(e.target.value)}
                                            label="Your Email"
                                            name='email'
                                            type='email' />
                                    </div>
                                    <div className='col-lg-6'>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Select service</InputLabel>
                                            <Select
                                                error={
                                                    (error && product == '')
                                                        ?
                                                        true
                                                        :
                                                        false
                                                }
                                                onChange={e => setEnquiryProduct(e.target.value)}
                                                label="Select product"
                                                name='product'
                                            // onChange={handleChange}
                                            >
                                                {
                                                    products
                                                        ?
                                                        products.map((value, index) =>
                                                            <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                                        )
                                                        :
                                                        null
                                                }
                                            </Select>
                                        </FormControl>

                                    </div>
                                    <div className='col-12'>
                                        <TextField
                                            label="Company Name"
                                            name='companyName'
                                            type='text' />
                                    </div>
                                    <div className='col-12'>
                                        <TextField label="Address" name='address' type='text' />
                                    </div>
                                    <div className='col-12'>
                                        <TextField multiline rows={3} label="Write any message..." name='message' type='text' />
                                    </div>
                                    <div className='col-12 mb-2'>
                                        <ReCAPTCHA
                                            sitekey="6LfG_YspAAAAAOCTnHlMLPDtDhIyeig2XTtNaaxv"
                                        />
                                    </div>
                                    <div className='col-12'>
                                        <Button btnType="submit" btnName="Submit Query" />
                                    </div>
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
