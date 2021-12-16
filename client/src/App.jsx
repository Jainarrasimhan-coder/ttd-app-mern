import { Container, CssBaseline, ThemeProvider,Paper } from '@material-ui/core'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { createTheme } from '@material-ui/core';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ChooseScreen from "./screens/ChooseScreen"
import OrderScreen from './screens/OrderScreen';
import ReviewScreen from './screens/ReviewScreen';
import PaymentScreen from './screens/PaymentScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';
import AdminScreen from './screens/AdminScreen';
import QueueScreen from './screens/QueueScreen';
import { Helmet } from 'react-helmet';

const theme = createTheme({
    typography: {
      h1: { fontWeight: 'bold' },
      h2: {
        fontSize: '2rem',
        color: 'black',
      },
      h3: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: 'white',
      },
    },
    palette: {
      primary: { main: '#ff1744' },
      secondary: {
        main: '#118e16',
        contrastText: '#ffffff',
      },
    },
  });
const App = () => {
    return (
        <BrowserRouter>
        <ThemeProvider theme={theme}>
<CssBaseline>
    <Container>
        <Paper>
            <Routes>
            <Route path="/" element={<HomeScreen />}></Route>

                <Route path="/choose" element={<ChooseScreen/>}> </Route>
                <Route path="/order" element={<OrderScreen/>}> </Route>
                <Route path="/review" element={<ReviewScreen/>}> </Route>
                <Route path="/select-payment" element={<SelectPaymentScreen/>}> </Route>
                <Route path="/payment" element={<PaymentScreen/>}> </Route>
                <Route path="/complete" element={<CompleteOrderScreen/>}> </Route>
                <Route path="/admin" element={<AdminScreen/>}> </Route>
                <Route path="/queue" element={<QueueScreen/>}> </Route>


            </Routes>
        </Paper>
    </Container>
</CssBaseline>
        </ThemeProvider>
        </BrowserRouter>
        )
}

export default App
