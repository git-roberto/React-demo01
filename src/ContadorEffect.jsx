import React, { useState, useEffect } from 'react';

function AutoIncrementCounter() {
  // Declara uma variável de estado chamada 'count' e uma função para atualizá-la chamada 'setCount'
  const [count, setCount] = useState(0);

  // UseEffect para incrementar o contador a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      <p>O contador é incrementado automaticamente a cada segundo: {count}</p>
    </div>
  );
}

export default AutoIncrementCounter;
