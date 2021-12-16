import React, { useContext } from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import { setPaymentType } from '../actions';
import { Store } from '../Store';
export default function HomeScreen(props) {
  const { dispatch } = useContext(Store);
  const navigate=useNavigate();

  const styles = useStyles();
  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === 'Pay here') {
      navigate('/payment');
    } else {
      navigate('/complete');
    }
  };
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        <Typography
          className={styles.center}
          gutterBottom
          variant="h3"
          component="h3"
        >
          Select payment type
        </Typography>
        <Box className={styles.cards}>
          <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={() => selectHandler('Pay here')}>
              <CardMedia
                component="img"
                alt="Pay here"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeBk3mDmiQt2y4O2heMJPAu7LD5XY14Rf0w&usqp=CAU"
                className={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p"
                >
                  PAY HERE
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={() => selectHandler('At counter')}>
              <CardMedia
                component="img"
                alt="At counter"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeBk3mDmiQt2y4O2heMJPAu7LD5XY14Rf0w&usqp=CAU"
                className={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p"
                >
                  AT COUNTER
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}