import {formatDate} from "../../helpers/formatDate.ts";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <h1 className={s.title}>NEWS REACT</h1>
            <p className={s.data}>{formatDate(new Date())}</p>
        </header>
    );
};

export default Header;