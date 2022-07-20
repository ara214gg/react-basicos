import React, {Component} from "react";

/* Eventos con funciones */
export class EventosES6 extends Component {
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
                <h2> Eventos en componentes de clase ES6</h2>
                
                <nav>
                    <button onClick = {this.sumar}> + </button>
                    <button onClick = {this.restar}> - </button>
                </nav>

                <h3> {this.state.contador} </h3>
                
            </div>
        );
    }
}


/* Eventos con Property Initializers */
export class EventosES7 extends Component {
  
    state = {
        contador : 0
    };

    //Arrow function - heredan el contexto donde se encuentran y se auto bindean
    sumar = (e) => {
        //console.log(this);
        this.setState({
            contador : this.state.contador + 1,
        });
    }

    restar = (e) => {
        //console.log(this);
        this.setState({
            contador : this.state.contador - 1,
        });
    }

    render(){
        return (
            <div>
                <h2> Eventos en componentes de clase ES7</h2>
                
                <nav>
                    <button onClick = {this.sumar}> + </button>
                    <button onClick = {this.restar}> - </button>
                </nav>

                <h3> {this.state.contador} </h3>
                
            </div>
        );
    }
}

/*
    Evento personalizado en react: 
*/
function Boton(props){
    return (
        <button onClick={props.myOnClick}> Boton echo componente </button>
    );
}




export class MasSobreEventos extends Component{
    /*Evento manejador del boton */
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.target); 
        console.log(e.nativeEvent); //Evento original nativo de JavaScript
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }

    render(){
        return (
            <div>
                <h2> Mas sobre eventos </h2>
                <button onClick = {(e) => this.handleClick(e,"Hola pasando parametro desde un evento")}> Saludar </button>

                {/**Evento Personalizado */}
                {/* ERROR
                    <Boton onClick = {(e) => this.handleClick(e,"Hola pasando parametro desde un evento")}/>
                */}

                <Boton myOnClick = {(e) => this.handleClick(e,"Hola pasando parametro desde un evento")}/>

            </div>
        );
    }
}

