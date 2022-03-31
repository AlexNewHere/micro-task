import React from 'react';
import './App.css';
import {NewComponent, students} from './Lesson 2/NewComponent';
import {IsNewComponent, topCars} from './Lesson 2/MAP';


export const AppLes2 = () => {
    return (
        <div className="App">
            {/*<NewComponent students={students}/>*/}
            <IsNewComponent topCars={topCars}/>
        </div>
    )
}