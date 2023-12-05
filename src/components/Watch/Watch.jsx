import './Watch.scss'
import MyLine from '../UI/MyLine/MyLine';

const Watch = () => {
    return (
        <section className='watch'>
            <div className="container">
                <div className="watch__content">
                    <ul className='watch__list'>
                        <li className='watch__item'>
                            <h1 className='watch__item-title'>Watch everywhere</h1>
                            <p className='watch__item-descr'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </li>
                        <li className='watch__item video'>
                            <div className="watch__item-wrapper">
                                <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" autoPlay muted loop playsInline />
                            </div>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" className='watch__item-img' />
                        </li>
                    </ul>
                </div>
            </div>
            <MyLine />
        </section>
    );
};

export default Watch;
