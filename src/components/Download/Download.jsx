import './Download.scss'
import MyLine from '../UI/MyLine/MyLine';

const Download = () => {
    return (
        <section className='download'>
            <div className="container">
                <div className="download__content">
                    <ul className='download__list'>
                        <li className='download__item video'>
                            <div className="download__item-wrapper">
                                <div className='download__download'>
                                    <div className='download__download-left'>
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="Image title" className='download__download-img' />
                                        <div>
                                            <p className='download__download-title'>Stranger Things</p>
                                            <p className='download__download-descr'>Downloading...</p>
                                        </div>
                                    </div>
                                    <div className='download__download-right'>
                                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="Gif download" className='download__download-download'/>
                                    </div>
                                </div>
                            </div>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className='download__item-img' />
                        </li>
                        <li className='download__item'>
                            <h1 className='download__item-title'>Download your shows to watch offline</h1>
                            <p className='download__item-descr'>Save your favorites easily and always have something to watch.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <MyLine />
        </section>
    );
};

export default Download;