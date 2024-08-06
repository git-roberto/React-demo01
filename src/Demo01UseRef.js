import React, {useState, useRef, useEffect} from "react";

function FormularioRef() {
    const [cliente, setCliente] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const cleanText = () => {
        setCliente("");
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Usando REF</h1>

            <input type="text" ref={inputRef} value={cliente} onChange={(e) => setCliente(e.target.value)} />

            <button onClick={cleanText}>
                Limpar
            </button>

            <p>{cliente}</p>
        </div>
    );
}

export default FormularioRef;