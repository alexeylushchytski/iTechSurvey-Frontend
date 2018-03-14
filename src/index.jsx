import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/init';
import RootContainer from './containers/RootContainer.jsx'

const store = configureStore();

const rootNode = document.getElementById('container');

render(<RootContainer />, rootNode);