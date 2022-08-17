import React from 'react'
import "./Estilos.css"

export default function Estilos(){
    let myStyles = {
        borderRadius : ".5rem",
        margin : "2rem auto",
        maxWidth : "50%"
    };

    return(
        <section className='estilos'>
            <h2> Estilos en React </h2>    
            <h3 className='bg-react'> Estilos CSS en hoja externa </h3>     
            <h3 style={ {borderRadius: ".25rem", margin: "1rem"} }> Estilos en línea (atributo style) </h3>     
            <h3 style = {{myStyles}}> Estilos en línea </h3>     
        </section>
    );
}