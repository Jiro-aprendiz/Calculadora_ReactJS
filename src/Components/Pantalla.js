import React from "react";
import '../styles/Pantalla.css';

const Pantalla = ({input, className}) => (
    <div className={`pantalla ${className}`}>
        {input}

    </div>
);

export default Pantalla;
