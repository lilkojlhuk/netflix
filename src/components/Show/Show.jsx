import React, { useState } from 'react';
import './Show.scss'
import ShowBlur from './ShowBlur';
import MySearch from '../UI/MySearch/MySearch';
import ShowCall from './ShowCall';
import Modal from '../Modal/Modal';
import ShowModalCall from './ShowModalCall';

const Show = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='show'>
            <div className='show__content'>
                <div className="container-show">
                    <ShowModalCall active={modalActive} setActive={setModalActive} />
                    <h1 className='show__title'>TV Shows</h1>
                    <p className='show__descr'>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</p>
                    <MySearch onClick={() => setModalActive(true)} />
                    <ShowCall />
                    <ShowBlur />
                    <h2 className='show__subtitle'>There’s even more to watch.</h2>
                    <p className='show__subdescr'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                </div>
            </div>
        </div>
    );
};

export default Show;
