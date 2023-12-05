import './Accordion.scss'
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import MyInput from '../UI/MyInput/MyInput';
import MyLine from '../UI/MyLine/MyLine';

const Accordion = ({ AccordionQuestions }) => {
    const [openId, setOpenId] = useState(null)

    return (
        <section className='accordion'>
            <div className='accordion__content'>
                <div className="container">
                    <h1 className='accordion__title'>Frequently Asked Questions</h1>
                    <ul className="accordion__list">
                        {AccordionQuestions.map((e, id) => {
                            return (
                                <AccordionItem onClick={() => id === openId ? setOpenId(null) : setOpenId(id)} AccordionQuestions={e} isOpen={id === openId} key={id} />
                            );
                        })}
                    </ul>
                    <div className='accordion__form'>
                        <MyInput>Ready to watch? Enter your email to create or restart your membership.</MyInput>
                    </div>
                </div>
            </div>
            <MyLine />
        </section>
    );
};

export default Accordion;