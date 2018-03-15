import React from "react";
import Header from '../layout/components/Header/Header.jsx';
import Footer from '../layout/components/Footer/Footer.jsx';
import { hot } from 'react-hot-loader';

const RootContainer = () => (
    <div>
        <Header />
        <Footer />
    </div>
);

export default hot(module)(RootContainer);