import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/init';
import RootContainer from './containers/RootContainer.jsx'
import store from './store/init';

const rootNode = document.getElementById('container');

render(
    <Provider store= {store}>
        <RootContainer />
    </Provider>, 
    rootNode
);