import React, {useMemo} from "react";

function FormularioMemo( { data = [] } ) {

    const items = useMemo(() => {
        return data.map((item) => (
            <div key={item.id}> 
                {item.nome}
            </div>
        ));
    }, [data]);

    return (
        <div>
            <h1>Usando MEMO</h1>
            <p>
                {items}
            </p>
        </div>
    );
}

export default FormularioMemo;