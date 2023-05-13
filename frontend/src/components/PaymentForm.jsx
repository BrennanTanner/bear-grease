import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import {
   PayPalScriptProvider,
   PayPalButtons,
   usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

// This values are the props in the UI
const amount = '2';
const currency = 'USD';
const style = { layout: 'vertical' };
const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID

const ButtonWrapper = ({ currency, showSpinner }) => {
   // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
   // This is the main reason to wrap the PayPalButtons in a new component
   const [{ options, isPending }, dispatch] = usePayPalScriptReducer();


   useEffect(() => {
      dispatch({
         type: 'resetOptions',
         value: {
            ...options,
            currency: currency,
         },
      });
   }, [currency, showSpinner]);

   return (
      <>
         {showSpinner && isPending && <div className='spinner' />}
         <PayPalButtons
            style={style}
            disabled={false}
            forceReRender={[amount, currency, style]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
               return actions.order
                  .create({
                     purchase_units: [
                        {
                           amount: {
                              currency_code: currency,
                              value: amount,
                           },
                        },
                     ],
                  })
                  .then((orderId) => {
                     // Your code here after create the order
                     return orderId;
                  });
            }}
            onApprove={function (data, actions) {
               return actions.order.capture().then(function () {
                  // Your code here after capture the order
               });
            }}
         />
      </>
   );
};

export default function PaymentForm() {
   return (
      <React.Fragment>
         <Typography variant='h6' gutterBottom>
            Payment method
         </Typography>
         <PayPalScriptProvider
            options={{
               'client-id': clientId,
               components: 'buttons',
               currency: 'USD',
            }}
         >
            <ButtonWrapper currency={currency} showSpinner={false} />
         </PayPalScriptProvider>
      </React.Fragment>
   );
}
