import style from './Error.module.css';

function Error() {
    return (
        <div className='container'>
            <div className={style.warn}>404 Not found. Check correction of URL.</div>
        </div>
    );
}

export default Error;
