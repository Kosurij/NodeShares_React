import style from './About.module.css';
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <div>
            <div className='container'>
                <div className={style.about}>
                    <div className={style.about_left}>
                        <h4 className={style.header}> What is NoteShares? </h4>
                        <div className={style.text} > <strong> NoteShares </strong> is a free and secure messaging app that lets people connect with friends and family - no matter who they are or where they are from.
                    </div>
                    </div>

                    <div className={style.about_right}>
                        <h4 className={style.header}> How NoteShares works: </h4>
                        <li className={style.header_item}>Step one - create a Note.</li>
                        <li className={style.header_item}>Step two - give your friend the secure message link you received.</li>
                        <li className={style.header_item}>Step three - get a reply link from a friend containing a secure reply message.</li>
                    </div>
                </div>
                <NavLink to='/' className={style.link}>
                    <button className={style.button}> Try now </button>
                </NavLink>
            </div>

        </div >
    );
}

export default About;
