import React from 'react';
import './App.css';
import {Header} from './Lesson 1/heade';
import {Body} from './Lesson 1/Body';
import {Footer} from './Lesson 1/Footer';

function App() {
    return (
        <div className="App">
            <Header title='Hello World'/>
            <Body titlefoBody = 'Many text'/>
            <Footer />
        </div>
    );
}

export default App;
