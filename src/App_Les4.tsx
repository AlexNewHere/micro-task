import React, {useState} from 'react';
import './App.css';
import {IsNewComponent, topCars} from './Lesson 2/MAP';
import {AppLs3} from './Button';


export const AppLes4 = () => {
    // let a=1

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
    }
    const resetButton = () => {
        setA(a = 0)
    }
    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+</button>
            <button onClick={resetButton}>0</button>
        </div>
    )
}