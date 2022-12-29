import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider,createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import { CartContext } from './Context/Cart/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const domain=process.env.REACT_APP_AUTH0_DOMAIN
const clientId=process.env.REACT_APP_AUTH0_CLIENT_ID




const root = ReactDOM.createRoot(document.getElementById('root'));

const theme= createTheme({
  palette:{
    primary:{
      main: "rgba(36,0,27,0.8574561403508771)"
    },
    secondary:{
      main:"#fff"
    }
  },

  typography:{
    subtitle1:{
      fontWeight:400,
      color:"rgba(36,0,27,0.8574561403508771)"
     
    },
    h4:{
        fontWeight:700,
        color:"rgba(36,0,27,0.8574561403508771)",
       
    },
  h5:{
    fontWeight:700,
    fontSize:"1rem",
    color:"rgba(36,0,27,0.8574561403508771)"

  },
    h6:{
      fontWeight:700,
      color:"rgba(36,0,27,0.8574561403508771)"
    }

  },
 
  
})
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}> 
 
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={"https://leoimewore.github.io"}

  > 
    <App />
  </Auth0Provider>
   
   </ThemeProvider>
  </React.StrictMode>
);


