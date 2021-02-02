import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../../env.json';
import style from './Note.module.css';

function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');
    const [warningClass, setWarningClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        } else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();

        if (url === '') {
            setWarningClass('');
            setFormClass('hide')
            return false;
        }
        noteURL = url;
        // window.location.href = env.url + '/' + url;

        fetch(env.urlBackend, {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({ "url": noteURL })
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    setNoteText(response.note);
                    setLineClass('');
                    setFormClass('hide');
                    setErrorClass('hide');
                }
                else if (!response.result) {
                    setLineClass('hide');
                    setFormClass('hide');
                    setErrorClass('');
                }
            })
        event.target.elements.url.value = '';
    }

    function searchNote() {
        setLineClass('hide');
        setFormClass('');
        setErrorClass('hide');
    }

    return (
        <div>
            <div className='container'>
                <div className={style.wrapper}>

                    <div className={lineClass}>
                        <div>
                            <h4 className={style.header}>Note:</h4>
                            <div className={style.outText}>"{noteText}"</div>
                            <button onClick={searchNote} className={style.button}> Check for more Note's</button>
                        </div>
                    </div>

                    {/* Error block */}
                    <div className={errorClass}>
                        <div className={style.error}>
                            <div> This Note was not found. Check the hash-Note is correct. </div>
                            <button type='submit' className={style.button} onClick={() => {
                                setErrorClass('hide');
                                setNoteText('');
                                setFormClass('');
                            }}> Try again </button>
                        </div>
                    </div>

                    {/* Form block */}
                    <div className={formClass}>
                        <form action="" onSubmit={getNote} className={style.form}>
                            <label htmlFor="url" className={style.label}>Enter your hash-Note here </label>
                            <input type="text" name="url" id="url" className={style.text} />
                            <button type='submit' className={style.button} > Check Note </button>
                        </form>
                    </div>
                    <div className={warningClass}>
                        <div className={style.modal}>
                            <div className={style.dialog}>
                                <div className={style.text}>
                                    Text field is empty. Please, fill the field.
                            </div>
                                <button className={style.button} onClick={() => {
                                    setWarningClass('hide');
                                    setFormClass('')
                                }}>
                                    Okay
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Note;