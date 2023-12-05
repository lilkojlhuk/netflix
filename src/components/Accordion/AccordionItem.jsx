import './Accordion.scss'
import React, { useRef } from 'react';
import { HiOutlinePlus } from 'react-icons/hi'

const AccordionItem = ({ AccordionQuestions, onClick, isOpen }) => {
    const itemRef = useRef(null)

    return (
        <li className='accordion__item'>
            <button className='accordion__item-title' onClick={() => onClick()}>
                {AccordionQuestions.question} 
                <HiOutlinePlus className={`accordion__item-cross ${isOpen ? 'active' : ''}`} /> 
            </button>
            <div 
                className='accordion__item-collaps'
                style={
                    isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}
                }
            >
                <div className='accordion__item-descr' ref={itemRef}>{AccordionQuestions.answer}</div>
            </div>
        </li>
    );
};

export default AccordionItem;