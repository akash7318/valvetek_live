import React from 'react';
import LastPageIcon from '@mui/icons-material/LastPage';

const Btn_link = (props) => {
  return (
    <a className={props.addClass  + ' ' + 'thm-btn'} href={props.Href}>{props.btnName} <LastPageIcon /></a>
  )
}

export default Btn_link
