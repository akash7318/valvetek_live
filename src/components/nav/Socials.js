import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Socials = () => {
    return (
            <ul className='social-icn-common'>
                <li>
                    <a href="#"><XIcon /></a>
                </li>
                <li>
                    <a href="#"><WhatsAppIcon /></a>
                </li>
                <li>
                    <a href="#"><InstagramIcon /></a>
                </li>
                <li>
                    <a href="#"><FacebookOutlinedIcon /></a>
                </li>
            </ul>
    )
}

export default Socials
