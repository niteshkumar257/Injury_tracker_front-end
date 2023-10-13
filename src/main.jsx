import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(

    <Auth0Provider  
    
    domain="dev-65cskdk7243pmgzq.us.auth0.com"
    clientId="iZ5fok1q6dXpCJHujj3y93AB7SRX2UFQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

   
    <App />
    </Auth0Provider>
 
)
