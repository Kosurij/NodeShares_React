import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import logo from './images/logo.png'

function Header() {
    return (
        <div className={style.header}>
            <div className='container'>
                <div className={style.wrapper}>
                    <div>
                        <NavLink to="/" className={style.logo_link}>
                            <img src={logo} alt="" className={style.logo_img} />
                            <span> NoteShares </span>
                        </NavLink>
                    </div>
                    <nav className={style.nav}>
                        <NavLink exact className={style.nav_link} to="/"> Home </NavLink>
                        <NavLink className={style.nav_link} to="/note"> Check Note </NavLink>
                        <NavLink className={style.nav_link} to="/create"> Create new Note </NavLink>
                        <NavLink className={style.nav_link} to="/about"> About </NavLink>
                    </nav>
                </div>
            </div >
        </div>
    );
}

export default Header;