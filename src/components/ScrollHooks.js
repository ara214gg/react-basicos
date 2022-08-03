import React, {useState, useEffect} from 'react';

export default function ScrollHooks(){
    
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        //console.log("Moviendo el scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll",detectarScroll);

        return () => {
            window.addEventListener("scroll",detectarScroll)
            //console.log("Fase de Desmontaje");
        };
    },[scrollY]);

    /*
    useEffect(() => {
        console.log("Fase de Montaje");
    },[scrollY]); //Solo se ejecuta cuando la variable scrollY cambie
    */

    useEffect(() => {
        //console.log("Fase de montaje");
    },[]); //Si dejamos vacio el arreglo solo se ejecutara una sola vez el useEffect

    useEffect(() => {
        //console.log("Fase de Actualizacion");
    });

    useEffect(() => {
        //console.log("Fase de Desmontaje");

        return () => {}; //Con esto le indicamos a react que active la fase de desmontaje
    });

    return (
        <>
            <h2> Hooks - useEffect y el ciclo de vida </h2>
            <p> Scrol Y del navegador {scrollY}px </p>
        </>
    );
}