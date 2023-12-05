import React from 'react';
import Show from '../components/Show/Show'
import Footer from '../components/Footer/Footer';
import SecondHeader from '../components/SecondHeader/SecondHeader';

const Content = () => {
    return (
        <div>
            <SecondHeader bg={'#000'} container={'container-show'} />
            <Show />
            <Footer bg={'#181818'} container={'container-show'} />
        </div>
    );
};

export default Content;