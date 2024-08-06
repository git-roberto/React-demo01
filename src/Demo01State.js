import React, { useState } from 'react';

function FormularioState(){
    const [cliente, setCliente] = useState("");

    return(
        <div>
            <h1>Usando STATE</h1>

            <input type="text" onChange={(e) => {
                setCliente(e.target.value);
            }} />
        </div>
    );
}

export default FormularioState;