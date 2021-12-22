import React from "react";

export default class Main extends React.Component {
    
    render() {
        return(
            <div>
                <div class="container">
                <div class="row shadow-lg p-3 mb-5 bg-white rounded">
                    {/* Usando Cards */}
                    <div class="col-sm-6 col-md-4 shadow-lg">
                        <div class="card border border-dark bg-light">
                            <img src="public/img/capaHomemAranha.jpg" class="img-thumbnail" class="card-img-top " />
                            <div class="card-body">
                                <h5 class="card-title">Título do quadrinho</h5>
                            </div>
                        
                        {/* Modal */}
                            <button type="button" class="btn btn-dark btn-lg " data-toggle="modal" data-target="#modal">
                                Mais Informações
                            </button>

                            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelleadby="Rotulo do modal">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title" id="titulo">Informações</h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>

                                        <div class="modal-body">
                                            <p>Informações</p>
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 shadow-lg">
                        <div class="card border border-dark bg-light">
                            <img src="public/img/capaHomemAranha.jpg" class="img-thumbnail" class="card-img-top " />
                            <div class="card-body">
                                <h5 class="card-title">Título do quadrinho</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, velit nec aliquet dignissim, nulla tortor volutpat sem, vel aliquam mi metus et enim.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 shadow-lg">
                        <div class="card border border-dark bg-light">
                            <img src="public/img/capaHomemAranha.jpg" class="img-thumbnail" class="card-img-top " />
                            <div class="card-body">
                                <h5 class="card-title">Título do quadrinho</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper, velit nec aliquet dignissim, nulla tortor volutpat sem, vel aliquam mi metus et enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        ); 
    }
}