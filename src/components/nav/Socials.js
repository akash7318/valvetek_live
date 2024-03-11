import React, { useEffect, useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Socials = () => {
    const [siteInfo, setSiteInfo] = useState([]);
    const [whatsapp, setWhatsApp] = useState();

    useEffect(() => {
        getSiteInfo();
    }, [])

    const getSiteInfo = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}siteInfo`);
        result = await result.json();
        if (result.status) {
            setSiteInfo(result.siteInfo);

            let whatsappLink = result.siteInfo.whatsapp.replace(" ", "");
            whatsappLink = whatsappLink.replace("-", "");
            whatsappLink = whatsappLink.replace("+91", "");
            setWhatsApp("https://api.whatsapp.com/send?phone=" + whatsappLink);
        }
    }

    return (
        <ul className='social-icn-common'>
            {
                siteInfo.twitter
                    ?
                    <li>
                        <a href={siteInfo.twitter} target="_blank"><XIcon /></a>
                    </li>
                    :
                    null
            }
            {
                siteInfo.whatsapp
                    ?
                    <li>
                        <a href={whatsapp} target="_blank"><WhatsAppIcon /></a>
                    </li>
                    :
                    null
            }
            {
                siteInfo.instagram
                    ?
                    <li>
                        <a href={siteInfo.instagram} target="_blank"><InstagramIcon /></a>
                    </li>
                    :
                    null
            }
            {
                siteInfo.facebook
                    ?
                    <li>
                        <a href={siteInfo.facebook} target="_blank"><FacebookOutlinedIcon /></a>
                    </li>
                    :
                    null
            }
        </ul>
    )
}

export default Socials
