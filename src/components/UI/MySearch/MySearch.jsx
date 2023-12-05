import cl from './MySearch.module.scss'
import { LuSearch } from 'react-icons/lu'
import { PiSquaresFourThin } from 'react-icons/pi'

const MySearch = ({ onClick }) => {
    return (
        <form className={cl.form}>
            <LuSearch className={cl.form__search}/>
            <input type="text" placeholder='I`m searching for...' className={cl.form__input} onClick={onClick}/>
        </form>
    );
};

export default MySearch;