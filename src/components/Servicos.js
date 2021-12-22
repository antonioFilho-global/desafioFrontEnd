import React from "react";

export default class Servicos extends React.Component {
    
    render() {
        return(
            <div class="container">
                <section id="servicos">
                    <div class="container shadow-lg">
                        <h1 class="text-center">Comics Life</h1>
                        <h2>
                            <p class="text-justify">Comic life especializada em HQs, mangás e tudo relacionado a cultura geek e pop. Ponto de encontro nerd.</p>
                        </h2>
                        <div class="text-center">
                            {/* Aqui pode ser colocado um futuro vídeo da empresa, para efeito de demonstração foi colocado um vídeo correlacionado ao tema */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/godTvNIpDMQ?controls=0" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </section>
            </div> 
        ); 
    }
}