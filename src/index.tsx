import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import GlobalStyles from './globalStyles';

ReactDOM.render(
    <>  
        <GlobalStyles />
        <App />
    </>, 
    document.getElementById('root')
);