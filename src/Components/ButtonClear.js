import React from "react";
import '../styles/ButtonClear.css';

const BotonClear = (props, className) => (
    <div className={`boton-clear`} onClick={props.manejarClear}>
        {props.children}

    </div>
);


export default BotonClear;
