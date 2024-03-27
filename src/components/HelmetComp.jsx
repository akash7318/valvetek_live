import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComp(props) {

    return (
        <Helmet>
            <link href={'./images/' + props.data.favicon} rel="shortcut icon" type="image/png" />
            <title>{props.data.metaTitle}</title>
            <meta name="keywords" content={props.data.metaKeywords} />
            <meta name="description" content={props.data.metaDescription} />
        </Helmet>
    )
}

export default HelmetComp