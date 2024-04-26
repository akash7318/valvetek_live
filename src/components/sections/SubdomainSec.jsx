import React from 'react';
import Section_title from '../Section_title';
import { Parser } from 'html-to-react';

function SubdomainSec(props) {
    return (
        <section className='sect-space'>
            <div className='container'>
                <div className=''>
                    <div className='floated-pd'>
                        <img className='pd-img-main' src={process.env.REACT_APP_BASE_URL+"images/products/" + props.subdomain.img} alt={props.subdomain.shortDescription} title={props.subdomain.shortDescription} />
                    </div>
                    <Section_title smTitle="Product Details" mainTitle={props.subdomain.shortDescription} />
                    {Parser().parse(props.subdomain.description)}
                    {Parser().parse(props.subdomain.extraDescription)}
                </div>
            </div>
        </section>
    )
}

export default SubdomainSec