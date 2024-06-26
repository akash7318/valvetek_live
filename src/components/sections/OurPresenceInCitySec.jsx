import React from 'react'
import Section_title from '../Section_title'
import { Parser } from 'html-to-react'

function OurPresenceInCitySec(props) {
    return (
        <section className='sect-space'>
            <div className='container'>
                <div className=''>
                    <div className='floated-pd'>
                        <img className='pd-img-main' src={process.env.REACT_APP_BASE_URL + "images/ourPresenceInCity/" + props.data.img} alt={props.data.shortDescription} title={props.data.shortDescription} />
                    </div>
                    <Section_title smTitle="Product Details" hTwoTitle={props.hTwoTitle} mainTitle={props.data.shortDescription} />
                    {Parser().parse(props.data.description)}
                    {Parser().parse(props.data.extraDescription)}
                </div>
            </div>
        </section>
    )
}

export default OurPresenceInCitySec