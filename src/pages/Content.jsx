import React from 'react';
import Header from '../components/Header/Header';
import Show from '../components/Show/Show'
import Footer from '../components/Footer/Footer';
import SecondHeader from '../components/SecondHeader/SecondHeader';
import Test from '../components/Test/Test';

const Content = () => {
    return (
        <div>
            <SecondHeader bg={'#000'} container={'container-show'} />
            <Show />
            <Footer bg={'#181818'} container={'container-show'} />
            {/* <Test /> */}
        </div>
    );
};

export default Content;