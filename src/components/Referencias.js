import React, {createRef, useRef} from 'react';

export default function Referencias() {

    let refMenu = useRef(),
        refMenuBtn = useRef();

    //console.log(refMenu, refMenuBtn);

    const handleToggleMenu = (e) => {
        /*
        const $menu = document.getElementById("menu");

        if(e.target.textContent === "Menú"){
            e.target.textContent = "Cerrar";
            $menu.style.display = "block";
        }
        else{
            e.target.textContent = "Menú";
            $menu.style.display = "none";
        }
        */
       if(refMenuBtn.current.textContent === "Menú"){
        refMenuBtn.current.textContent = "Cerrar";
        refMenu.current.style.display = "block";
       }
       else{
        refMenuBtn.current.textContent = "Menú";
        refMenu.current.style.display = "none";
    }
    }
    return (
        <>
            <h2> Referencias </h2>
            <button id = 'menu-btn' ref = {refMenuBtn} onClick = {handleToggleMenu}> Menú </button>
            <nav id = 'menu' ref = {refMenu} style={ {display : "none"} }>
                <a href = "#"> Seccion 1 </a>
                <br/>
                <a href = "#"> Seccion 2 </a>
                <br/>
                <a href = "#"> Seccion 3 </a>
                <br/>
                <a href = "#"> Seccion 4 </a>
                <br/>
                <a href = "#"> Seccion 5 </a>
                <br/>
            </nav>
        </>
    );
}