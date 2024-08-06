import React, { useState, useEffect } from 'react';

function FormularioEffect(){
    const [cliente, setCliente] = useState("");

    useEffect(() => {
        console.log("Componente iniciado");
        setCliente("Roberto Oliveira");
    }, []);

    useEffect(() => {
        console.log("Componente modificado", cliente);
    }, [cliente]);

    return (
        <div>
            <h1>Usando EFFECT</h1>
            
            <input type="text" value={cliente} onChange={(e) => {
                setCliente(e.target.value);
            }} />
        </div>
    );
}

export default FormularioEffect;