import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Header from './Layout/components/Header/Header.jsx'
import Footer from './Layout/components/Footer/Footer.jsx'
require('./Layout/components/Footer/Footer.scss')
render(<Header/>, document.getElementById('header'));
render(<Footer/>, document.querySelector('footer'));