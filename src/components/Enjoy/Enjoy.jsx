import './Enjoy.scss'
import MyLine from '../UI/MyLine/MyLine';

const Enjoy = () => {
    return (
        <section className='enjoy'>
            <div className="container">
                <div className="enjoy__content">
                    <ul className='enjoy__list'>
                        <li className='enjoy__item'>
                            <h1 className='enjoy__item-title'>Enjoy on your TV</h1>
                            <p className='enjoy__item-descr'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </li>
                        <li className='enjoy__item video'>
                            <div className="enjoy__item-wrapper">
                                <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay muted loop playsInline />
                            </div>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className='enjoy__item-img' />
                        </li>
                    </ul>
                </div>
            </div>
            <MyLine />
        </section>
    );
};

export default Enjoy;
