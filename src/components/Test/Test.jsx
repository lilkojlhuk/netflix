import React, { useState, useEffect } from 'react';
import { Shows } from '../../Shows';
import './Test.scss'
import CarouselItem from '../Carousel/CarouselItem';

const filterShow = (searchText, listOfShows) => {
    if(!searchText) return listOfShows
    return listOfShows.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase())) 
}

const Test = () => {
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
        <div className='test'>
            <div className="container-show">
                <div className='test__search'>
                    <input 
                        value={searchTerm}
                        autoFocus
                        type="text" 
                        autoComplete='off'
                        placeholder='I`m searching for...'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='test__search-input'
                    />
                </div>
                <div className="test__list">
                    {searchShow.map(e => {
                        return(
                            <CarouselItem e={e}  key={e.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Test;