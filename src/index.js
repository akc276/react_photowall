import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import rootReducer from './redux/reducer';
import {thunk} from 'redux-thunk';
import {database} from './database/config';

import App from './Components/App';
import './Styles/stylesheet.css';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    applyMiddleware: [thunk]
});

const root = createRoot(document.getElementById('root'));

root.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>);