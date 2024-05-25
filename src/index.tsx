import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import GlobalStyles from './globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { theme, ThemeProvider } from '~/styledComponents';

ReactDOM.render(
    <>  
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </>, 
    document.getElementById('root')
);