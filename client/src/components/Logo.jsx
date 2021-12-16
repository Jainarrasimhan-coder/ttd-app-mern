import React from 'react';
import { useStyles } from '../styles';

export default function Logo(props) {
  const styles = useStyles();
  return (
    <img 
      src="https://www.apssb.in/wp-content/uploads/2021/08/online-tirupati-ticket-laddu-booking.jpg"
      alt="Food Order"
      className={props.large ? styles.largeLogo : styles.logo}
    ></img>
  );
}