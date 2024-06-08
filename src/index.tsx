import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import GlobalStyles from './globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { theme, ThemeProvider } from '~/styledComponents';
import { Provider } from 'react-redux';
import store from './store';
import { validateAccessToken } from './store/auth';

store.dispatch(validateAccessToken())

ReactDOM.render(
    <>
        <GlobalStyles />
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </>,
    document.getElementById('root')
);