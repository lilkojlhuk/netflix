import './Header.scss'
import logo from '../../img/header-logo.svg'

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar__wrap'>
                    <a href="/"><img src={logo} alt="" className='second__logo' /></a>
                    <ul className='menu__profile'>
                        <li className='menu__item'><a href="!#" className='menu__item-link btn'>Sign In</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;