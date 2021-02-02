import React from 'react';
import { useState } from 'react';
import env from '../../env.json';
import style from './Create.module.css';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');
    const [warningClass, setWarningClass] = useState('hide');
    const inputRef = React.createRef();


    const sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    setUrl(env.url + '/' + response.url)
                }
            })
    }

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            setWarningClass('');
            setFormClass('hide')
            return false;
        }
        sendData({ "note": note })
    }

    return (
        <div>
            <div className="container">
                <div className={style.wrapper}>
                    <form action="" onSubmit={loadDataFromForm} className={formClass}>
                        <div className={style.form}>
                            <label htmlFor="note" className={style.label}>Enter your Note's text</label>
                            <textarea name="note" id="note" placeholder="Enter Note" className={style.text} ref={inputRef}></textarea>
                            <button type='submit' className={style.button}> Create Note </button>
                        </div>
                    </form>
                </div>
                <div className={warningClass}>
                    <div className={style.modal}>
                        <div className={style.dialog}>
                            <div className={style.text}>
                                Impossible to create empty Note. Please, fill the field.
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
                <div>
                    <div className={lineClass}>
                        <div className={style.success}>
                            <div className={style.successMessage}>
                                <span> Your Note-hash: </span> {url}
                            </div>
                            <div>
                                <button className={style.button} onClick={() => {
                                    inputRef.current.value = '';
                                    setFormClass('');
                                    setLineClass('hide');
                                }}> Create new Note </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Create;
