import './SecondHeader.scss'
import logo from '../../img/header-logo.svg'

const SecondHeader = ({ bg, container }) => {
    return (
        <header style={{background:bg}}>
            <div className={`${container}`}>
                <nav className='second__nav'>
                    <div className="second__navbar-wrap">
                        <a href="/netflix"><img src={logo} alt="" className='second__logo' /></a>
                        <ul className='second__profile'>
                            <li className='second__item'><a href="!#" className='second__item-link btn'>Sign In</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default SecondHeader;