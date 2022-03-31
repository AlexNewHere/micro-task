import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppLes2} from './App_Lex2';
import {AppLs3} from './Button';
import {AppLes4} from './App_Les4';
import {AppLes5} from './App_Les5';


const root = ReactDOM.createRoot(document.getElementById
('root') as HTMLDivElement)

// root.render(<App />)

// root.render(<AppLes2 />)

// root.render(<AppLs3 />)
// root.render(<AppLes4 />)
root.render(<AppLes5 />)

