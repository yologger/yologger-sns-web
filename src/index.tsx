import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import GlobalStyles from './globalStyles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <>  
        <GlobalStyles />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>, 
    document.getElementById('root')
);