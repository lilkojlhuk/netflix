import Switcher from '../UI/MySwitcher/Switcher';
import './Footer.scss'

const Footer = ({ bg, container }) => {
    return (
        <footer className='footer' style={{background:bg}}>
            <div className={`${container}`}>
                <div className="footer__content">
                    <a href="!#" className='footer__item-link title'>Questions? Contact us.</a>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href="!#" className='footer__item-link'>FAQ</a>
                            <a href="!#" className='footer__item-link'>Investor Relations</a>
                            <a href="!#" className='footer__item-link'>Privacy</a>
                            <a href="!#" className='footer__item-link'>Speed Test</a>
                        </li>
                        <li className='footer__item'>
                            <a href="!#" className='footer__item-link'>Help Center</a>
                            <a href="!#" className='footer__item-link'>Jobs</a>
                            <a href="!#" className='footer__item-link'>Cookie Preferences</a>
                            <a href="!#" className='footer__item-link'>Legal Notices</a>
                        </li>
                        <li className='footer__item'>
                            <a href="!#" className='footer__item-link'>Account</a>
                            <a href="!#" className='footer__item-link'>Ways to Watch</a>
                            <a href="!#" className='footer__item-link'>Corporate Information</a>
                            <a href="!#" className='footer__item-link'>Only on Netflix</a>
                        </li>
                        <li className='footer__item'>
                            <a href="netflix/content" className='footer__item-link'>Media Center</a>
                            <a href="!#" className='footer__item-link'>Terms of Use</a>
                            <a href="!#" className='footer__item-link'>Contact Us</a>
                        </li>
                    </ul>
                    <Switcher />
                    <p className='footer__descr'>Netflix Ukraine</p>
                    <p className='footer__descr'>This is not an official Netflix website</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;