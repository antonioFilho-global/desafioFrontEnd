import React from "react";

export default class Footer extends React.Component {
    
    render() {
        return(
            <div>
                <footer class="navegador fixed-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 ">
                                <p class="text-center">
                                    @2021 Comics | Construido por
                                    <a href="mailto:antonio.afce@gmail.com">Antonio Alves Costa Filho</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        ); 
    }
}