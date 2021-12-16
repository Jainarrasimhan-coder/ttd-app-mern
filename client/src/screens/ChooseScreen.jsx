import React, { useContext } from 'react';
import {useNavigate} from "react-router-dom"
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { setOrderType } from '../actions';
export default function HomeScreen(props) {
  const { dispatch } = useContext(Store);
  const navigate=useNavigate();
  const styles = useStyles();
  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    navigate('/order');
  };
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            className={styles.center}
            gutterBottom
            variant="h3"
            component="h3"
          >
            Omm Namo Narayanaya!!
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Advance booking')}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="https://tirupatitirumalainfo.com/wp-content/uploads/2017/07/ttd-archana-692x376.jpg"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                  >
                    Advance booking
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Today')}>
                <CardMedia
                  component="img"
                  alt="Take Out"
                  image="https://tirupatitirumalainfo.com/wp-content/uploads/2016/11/unjal-sevaa-696x503.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                  >
                    Current booking
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}