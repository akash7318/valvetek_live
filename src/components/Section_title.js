import React from 'react'

const Section_title = (props) => {
    return (
        <>
            <span className='sm-title'>{props.smTitle}</span>
            <p className='sect-title'>{props.mainTitle}</p>
        </>
    )
}

export default Section_title
