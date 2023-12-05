import './Switcher.scss'

const Switcher = () => {
    return (
        <div>
            <select id="fruits" className='switcher__select'>
                <option className='switcher__option' value="en">English</option>
                <option className='switcher__option' value="uk">Українська</option>
            </select>
        </div>
    );
};

export default Switcher;