import style from './Footer.module.css';

function Footer() {
    return (
        <div className={style.footer}>
            <div className="container">
                <div className={style.inner}>
                    <div>
                        <span> kosurij.dm@gmail.com </span>
                    </div>
                    <div>
                        <span> © NoteShares </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
