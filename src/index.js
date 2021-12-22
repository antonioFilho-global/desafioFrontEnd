/* Importando o react */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
    <App/>,
    /* root faz referência a div no index.html */
    document.getElementById("root")
);