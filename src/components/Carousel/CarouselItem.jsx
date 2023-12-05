import React from 'react';
import './Carousel.scss'
import Flickity from 'react-flickity-component';
import { useNavigate } from 'react-router-dom';

const CarouselItem = ({ e }) => {
    const router = useNavigate()

    return (
        <div className='carousel__item'>
            <img src={e.img} alt="Carousel img" className='carousel__item-img' onClick={() => router(`/content/${e.id}`)} />
            <h2 className='carousel__item-title'>{e.title}</h2>
        </div>
    );
};

export default CarouselItem;