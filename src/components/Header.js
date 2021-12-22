import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Header extends React.Component {
    
    render() {
        return(
            <header class="navegador">
                <nav class="navbar navbar-expand-lg fixed-top navbar-inverse navbar-dark rounded-bottom">
                    <a href="#" class="navbar-brand"><img class="rounded" width="70px" src="public/img/logo.png"/></a>
                    {/* o button criarar o menu com icone dentro da teg span, que abrirar o conteudo da div de id menu,
			        Muito útil em telas menos de smartphones */}
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#menu">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                   {/*  Links */}
                    <div id="menu" class="collapse navbar-collapse">
                       {/*  tag ul cria lista nao numerada
                        ml-md-auto Faz o alinhamento dos links a direita */}
                        <ul class="navbar-nav ml-md-auto">
                            <li class="nav-item active">
                                <AnchorLink href="#main" class="nav-link"><h2>Catálago</h2></AnchorLink>
                            </li>
                            <li class="nav-item active">
                                <AnchorLink href="#servicos" class="nav-link"><h2>Serviços</h2></AnchorLink>
                            </li>
                            <li class="nav-item active">
                                <AnchorLink href="#faleConosco" class="nav-link"><h2>Fale Conosco</h2></AnchorLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        ); 
    }
}