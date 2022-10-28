import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Router>
<GoogleOAuthProvider clientId="241357156852-ffj221gfn0k6nacij1ptnj3fl0nj4pph.apps.googleusercontent.com">
  <App/>
</GoogleOAuthProvider>
</Router>
);