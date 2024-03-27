import React from 'react'

const Section_title = (props) => {
    return (
        <>
            <span className='sm-title'>{props.smTitle}</span>
            {
                props.homeTitle
                    ?
                    <h1 className='sect-title'>{props.homeTitle}</h1>
                    :
                    <h2 className='sect-title'>{props.mainTitle}</h2>

            }
        </>
    )
}

export default Section_title
