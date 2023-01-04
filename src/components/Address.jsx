import React from 'react'
import { Grid, Typography,TextField,Container,Checkbox, Button} from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link }from "react-router-dom"
import StyledButton from '../StyledButton';


const Address = () => {
  return (
   <React.Fragment>
   <Container component="main" maxWidth="sm" sx={{ mb: 4 ,mt:4,border:"2px solid whitesmoke",borderRadius:"5px",padding:"20px"}}>
        <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
            Shipping Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
              />
            </Grid>
            <Grid container sx={{paddingLeft:"20px",paddingTop:"20px"}}>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    label="Use this address for payment details"
                  />
                </Grid>
            </Grid>

         <Grid container sx={{marginTop:"40px",padding:"20px"}}>
            <Grid item xs={6}>
                <StyledButton variant='contained'
                component={Link} to="/products">BACK</StyledButton>

            </Grid>
            <Grid item xs={6} sx={{textAlign:"right"}}>
                <StyledButton variant='contained'>NEXT</StyledButton>

            </Grid>

         </Grid>





          </Grid>
   </Container>
   
   </React.Fragment>
  )
}

export default Address