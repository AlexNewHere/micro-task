import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from './Lesson 3/Button';

export const AppLs3 = () => {

    const Button1Foo = (sub: string, age: number) => {
      alert(sub+' '+age)
    }
    const Button2Foo = (sub: string, age: number) => {
      alert(sub+' '+age)
    }

    return (
        <div className="App">

            <Button name={'Youtube-1'} callback={()=>Button1Foo('Alex', 21)}/>
            <Button name={'Youtube-2'} callback={()=>Button2Foo('Ivan', 14)}/>
            <Button name={'Stupid'} callback={()=>alert ('I am stupid button')}/>

        </div>
    );
}


