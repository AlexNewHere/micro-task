import React, {useState} from 'react';
import a from './Les6__Input/Ls6.module.css'
import {FullInput} from './Les6__Input/FullInput';
import {Input} from './Les6__Input/Input';
import {Button} from './Les6__Input/Button';


export function AppLes6() {
    let [message, setMessage] = useState([
        {message: ''},
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }
    const callBackHandler = () => {
        addMessage(title)
        setTitle('')
    }

        return (
        <div className={a.box}>
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callback={callBackHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })
            }
        </div>
    )
}