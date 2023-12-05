import React, { useState, useEffect } from 'react';
import { Shows } from '../../Shows';
import Modal from '../Modal/Modal';
import CarouselItem from '../Carousel/CarouselItem';
import './Show.scss'

const filterShow = (searchText, listOfShows) => {
    if(!searchText) return listOfShows
    return listOfShows.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase())) 
}

const ShowModalCall = ({ active, setActive }) => {
    const [allShows] = useState([...Shows]);
    const [searchShow, setSearchShow] = useState([...Shows]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredShow = filterShow(searchTerm, allShows);
            setSearchShow(filteredShow);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [searchTerm, allShows]); 

    return (
        <div className='showModal'>
            <Modal active={active} setActive={setActive}>
                <div className='showModal__content'>
                    <div className='showModal__search'>
                        <input 
                            value={searchTerm}
                            autoFocus
                            type="text" 
                            autoComplete='off'
                            placeholder='I`m searching for...'
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='showModal__search-input'
                        />
                    </div>
                    <div className="showModal__list">
                        {searchShow.map(e => {
                            return(
                                <CarouselItem e={e}  key={e.id} />
                            )
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ShowModalCall;