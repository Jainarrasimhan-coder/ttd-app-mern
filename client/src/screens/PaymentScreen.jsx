import React from 'react';
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';

export default function CompleteOrderScreen(props) {
  const styles = useStyles();
  const navigate=useNavigate();

  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large></Logo>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            Please use the UPI in the PIN pad
          </Typography>
          <CircularProgress />
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => navigate('/complete')}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Complete Order
        </Button>
      </Box>
    </Box>
  );
}