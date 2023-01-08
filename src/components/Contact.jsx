import React from 'react'
import {Typography, Card, Grid, Button, TextField, CardContent } from '@mui/material';

const Contact = () => {
    return (

        <div>
            <Card style={{maxWidth:"600px",margin:"10px auto",padding:"20px 5px"}}>

                <CardContent>
                <Typography variant='h4' gutterBottom>Contact Us</Typography>
                <Typography variant='body2' component="p" color="grey" gutterBottom> Fill up the form and our team will get back to you</Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="First Name" variant='outlined' fullWidth required />
    
                            </Grid>
    
                            <Grid item xs={12} sm={6}>
                                <TextField label="Last Name" variant='outlined' fullWidth required />
    
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="email" label="Email" variant="outlined" fullWidth required/>
    
                            </Grid>
    
                            <Grid xs={12} item>
                                <TextField type="number" label="Phone Number" variant="outlined" fullWidth required/>
                            </Grid>
    
                            <Grid xs={12} item>
                                <TextField label="Message" multiline rows={5} variant="outlined" fullWidth required/>
    
                            </Grid>
                            <Grid xs={12} item>
                               <Button type='submit' variant='contained' fullWidth>Submit</Button>
    
                            </Grid>
    
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )

}



export default Contact