import React from 'react'
import { CssBaseline,Typography,Grid,Button,TextField } from '@mui/material';

const Contact = () => {
  return (
    <div >
    <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
            {'Contact Form'.toUpperCase()}
        </Typography>
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
                <form
                id="contact-form"
               
               
                >
                    <Grid item>
                        <TextField
                        fullWidth
                        required
                        id="name"
                        label="Name"
                        name="userName"
                        margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        fullWidth
                        required
                        id="email"
                        label="Email"
                        name="email"
      
                        margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        fullWidth
                        required
                        id="message"
                        label="Message"
                        name="message"
                        margin="normal"
                       
                     
                        />
                    </Grid>
                    <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}>
                    <Grid item >
                        <Button
                        
                        type="reset"
                        variant="contained"
                        
                        //disabled={submitting || pristine}
                        >
                        RESET
                        </Button>
                    </Grid>
                    <Grid item >  
                        <Button
                       
                        type="submit"
                        variant="contained"
                        
                        >
                        Submit
                        </Button>
                    </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
        
    </div> 
              
);
}



export default Contact