import React from 'react'
import { Card, CardContent, Divider,Typography,Grid, Box } from '@mui/material'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  ElementsConsumer,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import Review from './Review';
import StyledButton from '../StyledButton';


const stripePromise=loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)


const Payment = ({checkoutToken,backStep,customerdata,onCapture,nextStep,activeStep}) => {
   const handleSubmit=async(event,elements,stripe)=>{
    event.preventDefault()

    if(!stripe||!elements) return
    const cardElement=elements.getElement(CardElement)

    const {error,paymentMethod}=await stripe.createPaymentMethod({type:"card",card:cardElement})

    if(error){
        console.log("[error]",error)
    }else{
        const orderData={
            line_items:checkoutToken.live.line_items,
            customer:{firstname:customerdata.firstName,
            lastname:customerdata.lastName,
             email:customerdata.email},
            shipping:{
                name:"International",
                street:customerdata.address1,
                town_city:customerdata.city,
                county_state:customerdata.shippingState,
                postal_zip_code:customerdata.zipcode,
                country:customerdata.shippingCountry,
            


            },
            fulfillment:{shipping_method:customerdata.shippingOption},
            payment:{
                gateway:"stripe",
                stripe:{
                    payment_method_id:paymentMethod.id
                }
            }
        }
        console.log(orderData)

        onCapture(checkoutToken.id,orderData)
        nextStep()
    }

   }


  return (
    

       <div>
            {activeStep!==2?<>
                <Review checkoutToken={checkoutToken}/>
                <Divider/>
                <Typography variant="h6" gutterBottom> Payment Method</Typography>
                <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({elements,stripe})=>(
                <form onSubmit={(e)=>handleSubmit(e,elements,stripe)}>
                    <CardElement/>
    
                    <Grid container sx={{ marginTop: "40px", padding: "20px" }}>
                  <Grid item xs={6}>
                    <StyledButton variant='contained' onClick={backStep} >BACK</StyledButton>
    
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "right" }}>
                    {<StyledButton variant='contained' disabled={!stripe} type='submit'>PAY  {checkoutToken.live.subtotal.formatted_with_symbol}</StyledButton>}
    
                  </Grid>
    
                </Grid>
    
                </form>
            )}
          </ElementsConsumer>
                </Elements>
            </>:<Box>
                <Typography variant='h4' >
                    Thank you {customerdata.firstName} {customerdata.lastName}.
                Your Order has been completed and you will get a confirmation email at {customerdata.email}!!
                </Typography></Box>}
       </div>





  )
}

export default Payment