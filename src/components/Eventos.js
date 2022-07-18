import React, {Component} from "react";

export default class Eventos extends Component {
    constructor(props){
        super(props);

        this.state = {
            contador : 0
        };

        this.sumar = this.sumar.bind(this); //Declaramos una propiedad sumar y le enlaza el elemento THIS
        this.restar = this.restar.bind(this); //Declaramos una propiedad sumar y le enlaza el elemento THIS
    }

    sumar(e){
        //console.log(this);
        this.setState({
            contador : this.state.contador + 1,
        });
    }

    restar(e){
        //console.log(this);
        this.setState({
            contador : this.state.contador - 1,
        });
    }

    render(){
        return (
            <div>
                <h2> Eventos en componentes de clase </h2>
                
                <nav>
                    <button onClick = {this.sumar}> + </button>
                    <button onClick = {this.restar}> - </button>
                </nav>

                <h3> {this.state.contador} </h3>
                
            </div>
        );
    }
}