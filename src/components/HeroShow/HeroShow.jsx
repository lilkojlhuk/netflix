import './HeroShow.scss'

const HeroShow = ({ item }) => {
    return (
        <section className='heroShow'>
            <div className='heroShow-bg' style={{backgroundImage: `url(${item.bg})`}}></div>
            <div className="container-show">
                <div className="heroShow__content">
                    <img src={item.imgLogo} alt="logo-title img" className='heroShow__img' />
                    <h1 className='heroShow__title'>{item.title}</h1>
                    <div className='heroShow__info'>
                        <p className='heroShow__item'>{item.year}</p>
                        <span className='heroShow__item'>|</span>
                        <p className='heroShow__item age'>{item.ageLimit}</p>
                        <span className='heroShow__item'>|</span>
                        <p className='heroShow__item'>{item.seasons}</p>
                        <span className='heroShow__item'>|</span>
                        <p className='heroShow__item'>{item.genre}</p>
                    </div>
                    <p className='heroShow__descr'>{item.descr}</p>
                    {item.starring !== '' ? <p className='heroShow__role'><span>Starring: </span>{item.starring}</p> : '' }
                    {item.creators !== '' ? <p className='heroShow__role'><span>Creators: </span>{item.creators}</p> : '' }
                </div>
            </div>
        </section>
    );
};

export default HeroShow;

