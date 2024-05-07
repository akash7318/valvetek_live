import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { Parser } from 'html-to-react'

function HelmetComp(props) {

    const [siteInfo, setSiteInfo] = useState([]);

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);
        }
    }

    useEffect(() => {
        getSiteInfo();
    }, []);

    return (
        <Helmet>
            <link href={process.env.REACT_APP_BASE_URL+'images/' + siteInfo.favicon} rel="shortcut icon" type="image/png" />
            <title>{props.data.metaTitle}</title>
            <meta name="keywords" content={props.data.metaKeywords} />
            <meta name="description" content={props.data.metaDescription} />
            {Parser().parse(siteInfo.googleAnalytic)}
        </Helmet>
    )
}

export default HelmetComp