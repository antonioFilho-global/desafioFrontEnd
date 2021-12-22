import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Servicos from "./Servicos";
import FaleConosco from "./faleConosco";


/* Expotando uma class padrão e fazendo herença do react  */
export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div id="main"><Main/></div>
                <div id="servicos"><Servicos/></div>
                <div id="faleConosco"><FaleConosco/></div>
                <div><Footer/></div>
            </div>
        );
    }
}