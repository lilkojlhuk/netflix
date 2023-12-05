import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Download from '../components/Download/Download';
import Enjoy from '../components/Enjoy/Enjoy';
import Watch from '../components/Watch/Watch';
import Children from '../components/Children/Children';
import Accordion from '../components/Accordion/Accordion';
import { AccordionQuestions } from '../AccordionQuestions';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header />
            <Hero /> 
            <Enjoy />
            <Download />
            <Watch />
            <Children />
            <Accordion AccordionQuestions={AccordionQuestions} />
            <Footer bg={'#000'} container={'container'} />
        </div>
    );
};

export default Main;