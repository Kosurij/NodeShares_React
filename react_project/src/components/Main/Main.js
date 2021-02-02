import { NavLink } from 'react-router-dom';
import style from './Main.module.css';

function Main() {
    return (
        <div className={style.main}>
            <div className="container">
                <div className={style.inner} >
                    <div> #ShareEverything</div>
                    <NavLink to="/create" className={style.link}>
                        <button className={style.button}> Create new Note </button>
                    </NavLink>
                    <NavLink to="/note" className={style.link}>
                        <button className={style.button}> Check Note </button>
                    </NavLink>
                </div>
            </div >
        </div >
    );
}

export default Main;