import React from "react";
import Footer from '../layout/components/Footer/Footer.jsx';
import HeaderContainer from '../layout/containers/index';
import { hot } from 'react-hot-loader';

const RootContainer = () => (
    <div>
        <HeaderContainer />
        <Footer />
    </div>
);

export default hot(module)(RootContainer);