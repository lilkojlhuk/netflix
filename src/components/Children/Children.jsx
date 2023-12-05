import './Children.scss'
import MyLine from '../UI/MyLine/MyLine';

const Children = () => {
    return (
        <section className='children'>
            <div className="container">
                <div className='children__content'>
                    <ul className='children__list'>
                        <li className='children__item video'>
                            <img src='https://occ-0-7965-1433.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55' className='children__item-img' alt='Children img' />
                        </li>
                        <li className='children__item'>
                            <h1 className='children__item-title'>Create profiles for kids</h1>
                            <p className='children__item-descr'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <MyLine />
        </section>
    );
};

export default Children;