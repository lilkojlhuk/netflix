import './MyInput.scss'

const MyInput = ({ children }) => {
    return (
        <div>
            <span className='myinput__text'>{children}</span>
            <form className='myinput__form'>
                <input type="text" className='myinput__input' placeholder='Email address'/>
                <button className='myinput__btn'>Get Started</button>
            </form>
        </div>
    );
};

export default MyInput;

