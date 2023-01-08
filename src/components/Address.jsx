import React from 'react'
import { Grid, Typography, TextField, Container, Checkbox, InputLabel, Select, MenuItem, Step,StepLabel,Stepper } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "react-router-dom"
import StyledButton from '../StyledButton';
import { useState, useEffect } from 'react';
import commerce from '../lib/commerce';
import Payment from './Payment';
import { Box } from '@mui/system';



const Address = ({ checkoutToken,  onCapture }) => {


  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState("")
  const [shippingStates, setShippingStates] = useState([])
  const [shippingState, setShippingState] = useState("")
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const [customerdata,setCustomerData]=useState({})

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipCode] = useState("")
  const [clicked, setClicked] = useState(false)
  const [activeStep, setActiveStep] = useState(0);
  const [email,setEmail]=useState("")

  console.log(shippingOptions)

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


  const steps = ['Shipping Address', 'Payment & Review'];

  const customerShippingAddress = {
    firstName,lastName,address1,address2,email,city, zipcode

  }
  
  const handleNext = (e) => {
e.preventDefault()
setCustomerData({...customerShippingAddress,shippingCountry, shippingState,shippingOption})
nextStep()

    }

    console.log(customerdata)

  


  const fetchCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

    console.log(countries)
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchStates = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    console.log(subdivisions)
    setShippingStates(subdivisions)
    setShippingState(Object.keys(subdivisions)[0])



  }


  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {

    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

    console.log(options)


    setShippingOptions(options)
    setShippingOption(options[0].id)
  }



  useEffect(() => {
    fetchCountries(checkoutToken.id)


  }, [])

  useEffect(() => {

    if (shippingCountry) fetchStates(shippingCountry)

  }, [shippingCountry])


  useEffect(() => {
    if (shippingState) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingState)


  }, [shippingState])


 







 



  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 4, border: "2px solid whitesmoke", borderRadius: "5px", padding: "20px" }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Checkout
        </Typography>

        <Box sx={{ width: '100%' ,marginBottom:"5px"}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
       { activeStep===0?<form onSubmit={handleNext}>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                value={firstName}
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onInput={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                value={lastName}
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                onInput={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                value={address1}
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                onInput={(e) => setAddress1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                value={address2}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                onInput={(e) => setAddress2(e.target.value)}
              />
            </Grid>

           <Grid item xs={12}>
            <TextField 
            type="email" 
            label="Email" 
            variant="standard" 
            fullWidth 
            required
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            />
            
           </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                value={city}
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
                onInput={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>


              <InputLabel fullWidth></InputLabel>
              <Select
                fullWidth

                value={shippingState ? shippingState : ""}
                onChange={(e) => setShippingState(e.target.value)}



              >
                {Object.entries(shippingStates).map(([abbr, state]) => ({ id: abbr, label: state }))
                  .map((item) => (<MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                value={zipcode}
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
                onInput={(e) => setZipCode(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="demo-simple-select-label" variant="standard" fullwidth></InputLabel>
              <Select
                fullWidth

                value={shippingCountry ? shippingCountry : ""}
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {Object.entries(shippingCountries).map(([abbr, country]) => ({ id: abbr, label: country }))
                  .map((item) => (<MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>))}
              </Select>
            </Grid>

            <Grid item sm={6}>
            <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>

            </Grid>
            <Grid container sx={{ paddingLeft: "20px", paddingTop: "20px" }}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" name="saveAddress" value="yes" onClick={() => setClicked(true)} />}
                  label="Use this address for payment details"
                />
              </Grid>
            </Grid>

            <Grid container sx={{ marginTop: "40px", padding: "20px" }}>
              <Grid item xs={6}>
                <StyledButton variant='contained'
                  component={Link} to="/products">BACK</StyledButton>

              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                {<StyledButton variant='contained' type='submit'>NEXT</StyledButton>}

              </Grid>

            </Grid>





          </Grid>

        </form>:<Payment checkoutToken={checkoutToken} backStep={backStep} customerdata={customerdata} activeStep={activeStep}  onCapture={onCapture} nextStep={nextStep}/>}
      </Container>

    </React.Fragment>
  )
}

export default Address