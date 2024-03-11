import React from 'react';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Link } from 'react-router-dom';

const Btn_link = (props) => {
  return (
    <Link className={props.addClass + ' ' + 'thm-btn'} to={props.Href}>{props.btnName} <LastPageIcon /></Link>
  )
}

export default Btn_link
