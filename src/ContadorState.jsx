import React, { useState } from 'react';

function Counter() {
  // Declara uma variável de estado chamada 'count' e uma função para atualizá-la chamada 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      {/* Atualiza o estado quando o botão é clicado */}
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Counter;