import './Show.scss'
import Carousel from '../Carousel/Carousel';
import { Shows } from '../../Shows';

import React from 'react';

const ShowItem = ({ name }) => {
    return (
        <ul className='show__list addtop'>
            <li className='show__item category'>{name}</li>
            <li className='show__item shows'>
                <Carousel item={Shows} category={name} />
            </li>
        </ul>
    );
};

export default ShowItem;